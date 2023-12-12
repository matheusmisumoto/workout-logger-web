import { jwtDecode } from "jwt-decode";
import { UserToken } from "./interface";

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

    const user: UserToken = jwtDecode(token)
    return user
  }
}
