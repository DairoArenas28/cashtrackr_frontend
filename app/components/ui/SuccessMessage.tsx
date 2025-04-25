export default function SuccessMessage({children} : {children: React.ReactNode}) {
    return (
        <p className="text-green-500 text-sm font-bold bg-green-100 p-3 rounded-lg mt-5 text-center">
            {children}
        </p>
    )
}