import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DeleteAccountPage() {
    const token = (await cookies()).get('token')?.value!;

    const profile = getUser(token);
    if(profile.roles == "ROLE_DEMO") redirect('/')

    return (
        <>
            <Header navigationTitle="Perfil" />
            <Scrollable>
                <Main>
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="font-bold text-2xl">Você tem certeza?</h1>
                        <p className="text-center text-sm mt-4">Ao remover sua conta, você perderá todos os registros de treino de forma definitiva.</p>
                        <p className="text-center text-sm mt-4">Os dados não poderão ser recuperados.</p>
                    </div>
                </Main>
                <div className="px-6 mb-6">
                    <a href="/api/auth/delete-account" className="rounded-xl bg-white/5 text-destructive text-md font-bold text-center py-3 mt-4 mb-2 block w-full max-w-screen-md mx-auto">Excluir conta</a>
                    <Link href="/dashboard/settings" className="rounded-xl text-center py-3 block w-full max-w-screen-md mx-auto">Agora não</Link>
                </div>
            </Scrollable>
            <Footer />
        </>
    );
}