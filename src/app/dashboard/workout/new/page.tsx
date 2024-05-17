import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";
import StartWorkout from "@/components/StartWorkout";

export default function NewWorkout() {

    return (
        <>
            <Header />
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Novo Treino</h2>
                    <MenuCard>
                        <StartWorkout />
                        <MenuLink link="/dashboard/workout/new/from-history" title="Usar treino anterior" subtitle="Use um treino do seu histórico" />
                    </MenuCard>
                </MainContent>
            </Main>
            <Footer />
        </>
    );
}