import { jwtDecode } from "jwt-decode";
import { UserToken } from "./interface";

export function getToken() {
  if (typeof window !== "undefined") {
    return document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1]
  }
}

export function getUser(token: string){
    const user: UserToken = jwtDecode(token)
    return user
}
