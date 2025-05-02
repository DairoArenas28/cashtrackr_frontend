"use server"

import getToken from "@/src/auth/token"
import { ErrorResponseSchema, SuccessSchema, ProfileFormSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"

type ActionStateType = {
    errors: string[],
    success: string
}

export async function updateProfile(prevState: ActionStateType, formData: FormData) {

console.log(formData)

    const userProfile = ProfileFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email')
    })

    if(!userProfile.success){
        return {
            errors: userProfile.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()
    const url = `${process.env.API_URL}/auth/user`
    const req = await fetch(url , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: userProfile.data.name,
            email: userProfile.data.email
        })
    })

    const json = await req.json()

    console.log(json)

    if(!req.ok){
        const {error} = ErrorResponseSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    const success = SuccessSchema.parse(json)
    revalidatePath(`${process.env.API_URL}/admin/user`)
    return {
        errors: [],
        success
    }
}