'use client'

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";
import { getUser } from "@/lib/auth";
import Image from 'next/image'

export default function SettingsPage() {

    return (
        <div className="h-full flex flex-col">
            <Header />
            <Main>
                <Hero>
                    <div className="flex max-w-screen-md mx-auto gap-4">
                        {
                            getUser()?.picture &&
                                <Image src={ getUser()?.picture! } width={60} height={60} className="rounded-full" alt="Profile picture" />
                        }
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="mt-0 mb-1 text-xl font-bold max-w-screen-md">{ getUser()?.name }</h2>
                            <p className="text-[.675rem]">ID: { getUser() && getUser()?.sub }</p>
                        </div>
                    </div>
                </Hero>
                <MainContent>
                    {
                        getUser()?.roles == "ROLE_ADMIN" &&
                            <MenuCard>
                                <MenuLink link="/settings/exercise-database" title="Gerenciar exercícios" />
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
                    <Button link="/api/auth/logout" title="Sair" destructive />
                </div>
            </Main>
            <Footer />
        </div>
    );
}