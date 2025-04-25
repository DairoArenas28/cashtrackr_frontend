import type { Metadata } from "next";
import RegisterForm from "@/app/components/auth/RegisterForm";
import Link from "next/link";

export const metadata : Metadata = {
    title: "CashTrackr - Crear Cuenta", 
    description: "Crea una cuenta para controlar tus finanzas personales",
};

export default function RegisterPage() {

    // const { data: session } = useSession();
    // const router = useRouter();

    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crea una Cuenta</h1>
            <p className="text-3xl font-bold">controla tus <span className="text-amber-500">Finanzas</span></p>

            <RegisterForm/>

            <nav className="mt-10 flex flex-col space-y-4">
                <Link 
                    href="/auth/login"
                    className="text-center"
                >
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>
            </nav>
        </>
    );
}