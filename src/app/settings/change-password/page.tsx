import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";

export default function PasswordChangePage() {
    let show = true;
    return (
        <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/settings" />
        <Main>
            <MainContent>
                <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Alterar senha</h2>
                <form className="max-w-screen-md mx-auto">
                    <div className="mb-3">
                        <label htmlFor="current-password" className="block mb-1">Senha atual</label>
                        <input type="password" id="current-password" className="w-full rounded-md bg-white/60 text-white/90 py-2 px-4" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="new-password" className="block mb-1">Nova senha</label>
                        <input type="password" id="new-password" className="w-full rounded-md bg-white/60 text-white/90 py-2 px-4" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="block  mb-1">Confirmar nova senha</label>
                        <input type="password" id="confirm-password" className="w-full rounded-md bg-white/60 text-white/90 py-2 px-4" />
                    </div>
                    <button className="rounded-xl bg-secondary text-center py-3 my-4 w-full max-w-screen-md mx-auto">Alterar senha</button>
                </form>
            </MainContent>
        </Main>
        <Footer />
    </div>
    );
}