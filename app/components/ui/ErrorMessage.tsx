

export default function ErrorMessage({children} : {children: React.ReactNode}) {
    return (
        <p className="text-red-500 text-sm font-bold bg-red-100 p-3 rounded-lg mt-5 text-center">
            {children}
        </p>
    )
}
