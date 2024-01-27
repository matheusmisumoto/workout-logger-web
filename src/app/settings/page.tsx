import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";
import { UserToken } from "@/lib/interface";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import Image from 'next/image'
import { redirect } from "next/navigation";

export default async function SettingsPage() {
    
    const token = cookies().get('token')?.value;
    if(!token) redirect('/');
    const profile: UserToken = jwtDecode(token);

    return (
        <div className="h-full flex flex-col">
            <Header />
            <Main>
                <Hero>
                    <div className="flex max-w-screen-md mx-auto gap-4">
                        {
                            profile?.picture &&
                                <Image src={ profile.picture } width={60} height={60} className="rounded-full" alt="Profile picture" />
                        }
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="mt-0 mb-1 text-xl font-bold max-w-screen-md">{ profile?.name }</h2>
                            <p className="text-[.675rem]">ID: { profile?.sub }</p>
                        </div>
                    </div>
                </Hero>
                <MainContent>
                    {
                        profile.roles == "ROLE_ADMIN" &&
                            <MenuCard>
                                <MenuLink link="/settings/exercise-database" title="Gerenciar exercícios" />
                                <MenuLink link="/settings/manage-users" title="Gerenciar usuários" />
                            </MenuCard>
                    }
                    {
                        profile.roles !== "ROLE_DEMO" &&
    	                    <MenuCard>
                                <MenuLink link="/settings/delete-account/" title="Excluir conta" />
                            </MenuCard>
                    }
                    <MenuCard>
                        <MenuLink link="https://github.com/matheusmisumoto/workout-logger-web" title="Repositório da aplicação no GitHub" />
                        <MenuLink link="https://github.com/matheusmisumoto/workout-logger-api" title="Repositório da API no GitHub" />
                        <MenuLink link="https://matheusmisumoto.dev" title="Visite meu site" />
                    </MenuCard>
                    <p className="max-w-screen-md mx-auto text-center text-sm text-white/50">Desenvolvido por Matheus Misumoto</p>
                </MainContent>
                <div className="px-6 mb-6">
                    <a href="/api/auth/logout" className="rounded-xl bg-white/5 text-destructive text-md text-center py-3 my-4 block w-full max-w-screen-md mx-auto">Sair</a>
                </div>
            </Main>
            <Footer />
        </div>
    );
}