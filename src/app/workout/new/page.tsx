'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import MenuCard from "@/components/MenuCard";
import MenuLink from "@/components/MenuLink";

export default function NewWorkout() {
    let showDraftLink;
    const workoutStorage = localStorage.getItem('workoutDraft');

    if(workoutStorage){
        const draft = JSON.parse(workoutStorage);
        if(draft.exercises.length > 0) {
            showDraftLink = true;
        }
    }

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Novo Treino</h2>
                    <MenuCard>
                    {
                        showDraftLink ?
                            <MenuLink link="/workout/new/track" title="Continuar treino" subtitle="Continue o registro de onde parou" />
                        :
                            <MenuLink link="/workout/new/track" title="Iniciar treino vazio" subtitle="Adicione exercícios conforme treina" />
                    }
                        <MenuLink link="#" title="Usar treino anterior" subtitle="Use um treino do seu histórico" disabled />
                        <MenuLink link="#" title="Usar rotina" subtitle="Use um template salvo" disabled />
                    </MenuCard>
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}