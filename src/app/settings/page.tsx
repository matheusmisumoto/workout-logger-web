import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
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
                <MainContent>
                    <MenuCard>
                        <MenuLink link="https://github.com/matheusmisumoto/workout-logger-web" title="Repositório da aplicação no GitHub" />
                        <MenuLink link="https://github.com/matheusmisumoto/workout-logger-api" title="Repositório da API no GitHub" />
                        <MenuLink link="https://matheusmisumoto.dev" title="Website do desenvolvedor" />
                    </MenuCard>
                    <p className="max-w-screen-md mx-auto text-center text-sm text-white/50">Desenvolvido por Matheus Misumoto</p>
                </MainContent>
                <div className="px-6 mb-6">
                    <Button link="/login" title="Sair" destructive />
                </div>
            </Main>
            <Footer />
        </div>
    );
}