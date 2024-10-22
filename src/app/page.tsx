import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const isAuthenticated = (await cookies()).has('token');
  return isAuthenticated ? redirect('/dashboard') : redirect('/login');
}
