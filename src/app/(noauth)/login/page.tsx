'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr' // Mudança aqui
import { useRouter } from 'next/navigation'
import IconFacebook from '@/components/icons/icon-facebook'
import IconGoogle from '@/components/icons/icon-google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AtSign, TriangleAlert, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    // --- Lógica de Autenticação ---
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const router = useRouter()

    // Nova forma de criar o cliente Supabase
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    
    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setErrorMessage(null)

        // 1. Tenta autenticar no Supabase
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setErrorMessage(error.message)
            setLoading(false)
            return
        }

        // 2. Chama a tua função RPC para verificar se é Master
        const { data: isMaster } = await supabase.rpc('is_core_gestor_ou_admin')

        // 3. Redirecionamento baseado no Role
        if (isMaster) {
            router.push('/master-dashboard')
        } else {
            router.push('/backoffice-dashboard')
        }
        
        router.refresh()
    }
    // ----------------------------

    return (
        <div className="grid h-screen w-full gap-5 p-4 md:grid-cols-2">
            <div className="relative hidden overflow-hidden rounded-[20px] bg-[#3B06D2] p-4 md:block md:h-full">
                <Image
                    src="/images/logo-white.svg"
                    width={145}
                    height={34}
                    alt="Logo"
                    className="absolute left-4 top-4 z-10 h-auto w-auto"
                />
                <Image
                    src="/images/login-cover-step.svg"
                    width={240}
                    height={240}
                    alt="Logo Cover Step"
                    className="absolute left-0 top-0.5 size-40 md:h-auto md:w-auto"
                />
                <Image
                    src="/images/login-cover-cartoon.svg"
                    width={145}
                    height={34}
                    alt="Logo Cover Cartoon"
                    className="absolute bottom-0 left-0 right-0 h-52 w-full md:h-96"
                />
                <div className="absolute left-1/2 top-1/4 w-full max-w-md -translate-x-1/2 space-y-3 px-3 text-center text-white">
                    <h2 className="text-lg font-bold sm:text-2xl lg:text-[30px]/9">
                        Turn your ideas into reality.
                    </h2>
                    <p className="text-sm lg:text-xl/[30px]">
                        Encourages making dreams tangible through effort and creativity.
                    </p>
                </div>
            </div>
            <div className="flex overflow-y-auto py-2">
                <Card className="m-auto w-full max-w-[400px] space-y-[30px] p-5 shadow-sm md:w-[400px]">
                    <CardHeader className="space-y-2">
                        <h2 className="text-lg font-semibold text-black lg:text-xl/tight dark:text-white">
                            Sign In to your account
                        </h2>
                        <p className="font-medium leading-tight dark:text-gray-600">
                            Enter your details to proceed future
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-[30px]">
                        <div className="grid grid-cols-2 gap-4">
                            <Link href="#">
                                <Button variant={'outline-general'} size={'large'} className="w-full">
                                    <IconGoogle className="size-[18px]!" />
                                    Google
                                </Button>
                            </Link>
                            <Link href="#">
                                <Button variant={'outline-general'} size={'large'} className="w-full">
                                    <IconFacebook className="size-[18px]! text-[#0866FF]" />
                                    Facebook
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="h-px w-full bg-[#E2E4E9]"></span>
                            <p className="shrink-0 font-medium leading-tight dark:text-gray-600">
                                or login with email
                            </p>
                            <span className="h-px w-full bg-[#E2E4E9]"></span>
                        </div>
                        
                        {/* FORMULÁRIO COM LÓGICA */}
                        <form onSubmit={handleLogin} className="space-y-[30px]">
                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black dark:text-white">
                                    Email address
                                </label>
                                <Input
                                    type="email"
                                    variant={'input-form'}
                                    placeholder="username@domain.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    iconRight={<AtSign className="size-[18px]" />}
                                />
                            </div>

                            <div className="relative space-y-3">
                                <label className="block font-semibold leading-none text-black dark:text-white">
                                    Password
                                </label>
                                <Input
                                    type="password"
                                    variant={'input-form'}
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="rtl:pl-9 rtl:pr-3.5"
                                />
                            </div>

                            {/* Alerta de Erro Dinâmico */}
                            {errorMessage && (
                                <div className="flex items-center gap-2 text-danger">
                                    <TriangleAlert className="size-[18px] shrink-0" />
                                    <p className="text-xs font-medium">{errorMessage}</p>
                                </div>
                            )}

                            <Link
                                href="/forgot"
                                className="block text-right text-xs/4 font-semibold text-black underline underline-offset-[3px] hover:text-[#3C3C3D] dark:text-white dark:hover:text-primary"
                            >
                                Forgot password?
                            </Link>

                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? 'A autenticar...' : 'Login'}
                            </Button>

                            <div className="text-center text-xs/4 font-semibold text-black dark:text-gray-600">
                                Don&apos;t have an account?
                                <Link
                                    href="/register"
                                    className="pl-1.5 text-sm/tight underline underline-offset-4 hover:text-[#3C3C3D] dark:text-white dark:hover:text-primary"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}