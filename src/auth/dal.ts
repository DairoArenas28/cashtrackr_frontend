// Data Access Layer for authentication
import "server-only"
import { cache } from 'react'
import { redirect } from "next/navigation"
import { UserSchema } from "../schemas"
import getToken from "./token"

export const verifySession = cache( async () => {
    
    const token = await getToken()
    if(!token){
        redirect("/auth/login")
    }

    const url = `${process.env.API_URL}/auth/user`
    const rerq = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    const session = await rerq.json()

    const result = UserSchema.safeParse(session)

    if(!result.success){
        redirect("/auth/login")
    }

    return {
        user: result.data,
        isAuth: true
    }

})