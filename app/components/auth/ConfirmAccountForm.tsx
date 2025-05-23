"use client"
import { confirmAccount } from '@/actions/confirm-account-action'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { startTransition, useActionState, useEffect, useState } from 'react'

export default function ConfirmAccountForm() {
    const router = useRouter()
    const [isComplete, setIsComplete] = useState(false)
    const [token, setToken] = useState("")


    const confirmAccountWithToken = confirmAccount.bind(null, token)
    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (isComplete) {
            startTransition(() => {
                dispatch();
            });
        }
    }, [isComplete, dispatch])

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => {
                toast.error(error)
            })
        }

        if(state.success){
            toast.success(state.success, {
                onClose: () => {
                    router.push('/auth/login')
                }
            })
        }
    }, [state, router])


    const handleChange = (token: string) => {
        setIsComplete(false)
        setToken(token)
    }

    const handleComplete = () => {
        setIsComplete(true)
    }

    return (
        <>
            <div className="flex justify-center gap-5 mt-10">
                <PinInput
                    value={token}
                    onChange={handleChange}
                    onComplete={handleComplete}
                >
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 shadow rounded-lg placeholder-white text-center' />
                </PinInput>
            </div>
        </>
    )
}