// src/components/auth/LoginForm.tsx
'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Autenticação no Supabase
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Erro no login: ' + error.message);
      setLoading(false);
      return;
    }

    // 2. Verificação de Role via RPC (Tua função SQL)
    const { data: isMaster } = await supabase.rpc('is_core_gestor_ou_admin');

    // 3. Redirecionamento Inteligente
    if (isMaster) {
      router.push('/master/dashboard');
    } else {
      router.push('/backoffice/dashboard');
    }
    
    router.refresh();
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input 
          type="email" 
          className="w-full p-2 border rounded-md" // Aqui usarias as classes do Nexadash
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Palavra-passe</label>
        <input 
          type="password" 
          className="w-full p-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        {loading ? 'A entrar...' : 'Entrar'}
      </button>
    </form>
  );
}