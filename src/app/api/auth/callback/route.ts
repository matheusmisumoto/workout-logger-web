import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if(searchParams.has('error')) {
    return NextResponse.redirect('http://'+ request.headers.get('host'))
  }  

  const registerResponse = await api.post('/auth/oauth', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = new URL('/', 'http://'+ request.headers.get('host'))

  const cookieExpiresInSeconds = 60 * 60 * 24 * 7

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
