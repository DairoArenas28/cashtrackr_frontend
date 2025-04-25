"use server"

import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"
import { error } from "console"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function confirmAccount(token: string, prevState: ActionStateType) {
    console.log("Confirming account server action")
    console.log(token)
    const confirmToken = TokenSchema.safeParse(token)
    if (!confirmToken.success) {
        return {
            errors: confirmToken.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    //confirmar el token en la base de datos
    const url = `${process.env.API_URL}/auth/confirm-account`
    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            token: confirmToken.data
        })
    })

    const json = await req.json()

    if(!req.ok) {
        const { error } = ErrorResponseSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    const success = SuccessSchema.parse(json)
    return {
        errors: [],
        success
    }
}