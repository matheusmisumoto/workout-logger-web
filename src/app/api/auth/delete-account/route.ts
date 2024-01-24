import { apiWithAuth } from '@/lib/api';
import { UserToken } from '@/lib/interface';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    const token = cookies().get('token')?.value;
    if(!token) redirect('/');
    const profile: UserToken = jwtDecode(token);

    await apiWithAuth(token).delete(`/users/${profile.sub}`)

    const redirectURL = new URL('/', 'http://'+ request.headers.get('host'))
    
    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=; Path=/; max-age=0`,
        },
    })
}