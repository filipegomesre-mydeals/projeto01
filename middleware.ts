import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // 1. Refresh da sessão (Essencial para RLS)
  const { data: { session } } = await supabase.auth.getSession()

  const url = request.nextUrl.clone()

  // 2. Bloqueio para quem não está logado
  if (!session && (url.pathname.startsWith('/backoffice') || url.pathname.startsWith('/master'))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 3. Bloqueio Master usando a TUA função RPC
  if (session && url.pathname.startsWith('/master')) {
    const { data: isMaster } = await supabase.rpc('is_core_gestor_ou_admin')
    
    if (!isMaster) {
      return NextResponse.redirect(new URL('/backoffice/dashboard', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}