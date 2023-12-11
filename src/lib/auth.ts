import { jwtDecode } from "jwt-decode";

interface User {
  sub: string;
  name: string;
  picture: string;
  roles: string;
}

export function hasToken() {
  if (typeof window !== "undefined") {
    return document.cookie.split("; ").some((row) => row.startsWith("token="))
  }
  return false
}

export function getToken() {
  if (typeof window !== "undefined") {
    return document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1]
  }
}

export function getUser(){
  if (typeof window !== "undefined") {
    const token = getToken()

    if (!token) {
      throw new Error('Unautenticated')
    }

    const user: User = jwtDecode(token)
    return user
  }
}
