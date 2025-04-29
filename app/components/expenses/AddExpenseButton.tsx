"use client"

import { useRouter } from "next/navigation"

export default function AddExpenseButton() {

    const router = useRouter()

    return (
        <button
            type="button"
            className="bg-amber-500 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center cursor-pointer"
            onClick={() => router.push(`?addExpense=true&showModal=true`)}
        >
            Agregar Gasto
        </button>
    )
}