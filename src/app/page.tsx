import { redirect } from 'next/navigation';

export default function RootPage() {
  // Esta página serve apenas como um "guarda-fatos"
  // Mal o utilizador entra em localhost:3000, é enviado para /login
  redirect('/login');
}