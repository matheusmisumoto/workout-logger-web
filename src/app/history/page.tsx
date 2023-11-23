import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Histórico de treinos</h2>
                    <Card title="Treino Saiyajin 1 - Dia D" subtitle="Posterior, Quadríceps" exercises={7} time={90} weight={8000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia C" subtitle="Dorsais, Bíceps, Ombros, Peitoral" exercises={6} time={90} weight={12000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia B" subtitle="Posterior, Quadríceps, Adutor, Abdutor" exercises={8} time={100} weight={5390} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia A" subtitle="Peito, Tríceps, Ombros, Dorsais" exercises={7} time={60} weight={9000} link="/workout" />
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}