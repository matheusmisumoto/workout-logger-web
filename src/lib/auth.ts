import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface User {
  sub: string;
  name: string;
  picture: string;
}

export function getUser(){
    const token = cookies().get('token')?.value

    if (!token) {
      throw new Error('Unautenticated')
    }
  
    const user: User = jwtDecode(token)

    return user
}

