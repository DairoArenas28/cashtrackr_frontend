
import ForgotPasswordForm from "@/app/components/auth/ForgotPasswordForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
    title: "CashTrackr - Olvidaste tu contraseña?", 
    description: "Inicia sesión para controlar tus finanzas personales",
};

export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
            <p className="text-3xl font-bold">aquí puedes <span className="text-amber-500">reestablecerla</span></p>

            
            <ForgotPasswordForm/>

            <nav className="mt-10 flex flex-col space-y-4">
                <Link 
                    href="/auth/login"
                    className="text-center"
                >
                    ¿Ya tienes cuenta? Iniciar Sesión
                </Link>

                <Link 
                    href="/auth/register"
                    className="text-center"
                >
                    ¿No tienes una cuenta? Crea una cuenta
                </Link>
            </nav>
        </>
    );
}