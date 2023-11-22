import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";

export default function SettingsPage() {
    let show = true;
    return (
        <div className="h-screen flex flex-col">
        <Header />
        <Main>
            { show ? 
            <Hero>
                <div className="flex max-w-screen-md mx-auto gap-4">
                    
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="mt-0 mb-1 text-xl font-bold max-w-screen-md">matheusmisumoto</h2>
                        <p className="text-[.675rem]">Logged with GitHub</p>
                    </div>
                </div>
            </Hero>
            : '' }
            <div className="p-6 flex-1">
                <MenuCard>
                    <MenuLink link="/settings/change-password" title="Alterar senha" />
                    <MenuLink link="https://github.com/matheusmisumoto/workout-logger-web" title="Repositório da aplicação" />
                    <MenuLink link="https://github.com/matheusmisumoto/workout-logger-api" title="Repositório da API" />
                    <MenuLink link="https://matheusmisumoto.dev/" title="Política de Privacidade" />
                </MenuCard>
                <Button link="/login" title="Sair" destructive />
            </div>
        </Main>
        <Footer />
    </div>
    );
}