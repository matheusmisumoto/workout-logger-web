import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Logo } from "@/components/Logo";
import Main from "@/components/Main";
import HistoryIcon from "@/components/icons/HistoryIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import WorkoutIcon from "@/components/icons/WorkoutIcon";

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <div className="p-6 flex-1">
                    <h2 className="my-4 text-3xl font-bold max-w-screen-lg mx-auto">Últimos treinos</h2>
                    <Card title="Treino Saiyajin 1 - Dia D" subtitle="Posterior, Quadríceps" time={90} weight={8000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia C" subtitle="Dorsais, Bíceps, Ombros, Peitoral" time={90} weight={12000} />
                    <Card title="Treino Saiyajin 1 - Dia B" subtitle="Posterior, Quadríceps, Adutor, Abdutor" time={100} weight={5390} />
                    <Card title="Treino Saiyajin 1 - Dia A" subtitle="Peito, Tríceps, Ombros, Dorsais" time={60} weight={9000} />
                </div>
            </Main>
            <Footer />
        </div>
    );
}