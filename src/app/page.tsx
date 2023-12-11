'use client'

import Login from './login/page'
import Dashboard from './dashboard/page'
import { hasToken } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => { 
    setIsAuthenticated(hasToken())
  }, [])

  return isAuthenticated ? <Dashboard /> : <Login />

}
