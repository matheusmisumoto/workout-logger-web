import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const isAuthenticated = cookies().has('token');
  return isAuthenticated ? redirect('/dashboard') : redirect('/login');
}
