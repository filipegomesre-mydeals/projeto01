'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export default function MasterDashboard() {
  const [user, setUser] = useState<any>(null)
  const [role, setRole] = useState<string>('A verificar...')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    async function getProfile() {
      // 1. Pega o utilizador atual
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      // 2. Confirma se ele é Master através da tua função RPC
      const { data: isMaster } = await supabase.rpc('is_core_gestor_ou_admin')
      setRole(isMaster ? 'MASTER (Gestor/Admin)' : 'COLABORADOR')
    }
    getProfile()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-indigo-700">Confirmação de Perfil</h1>
      
      <div className="mt-4 p-4 bg-white border rounded-lg shadow-sm space-y-2">
        <p><strong>Utilizador:</strong> {user?.email}</p>
        <p><strong>Cargo detetado:</strong> 
          <span className={`ml-2 px-2 py-1 rounded text-white ${role.includes('MASTER') ? 'bg-green-500' : 'bg-blue-500'}`}>
            {role}
          </span>
        </p>
      </div>

      {role.includes('MASTER') ? (
        <p className="mt-4 text-green-600 font-medium">✅ Acesso autorizado: Tens permissões de Master.</p>
      ) : (
        <p className="mt-4 text-red-600 font-medium">⚠️ Aviso: Estás numa rota de Master, mas o teu perfil é de Colaborador.</p>
      )}
    </div>
  )
}