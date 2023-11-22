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
                <div className="p-6 bg-secondary">
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <strong className="font-bold text-4xl">
                                Matheus!
                            </strong>
                        </span>
                    </h1>
                    <div className="flex gap-4 mt-8 text-center max-w-screen-md mx-auto">
                        <div className="bg-black/60 p-2 rounded-md basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-xl font-bold">500</span>
                            treinos registrados
                        </div>
                        <div className="bg-black/60 p-2 rounded-md basis-2/4 text-[.625rem] uppercase">
                        <span className="block text-xl font-bold normal-case">5.700.000 kg</span>
                            carga total levantada
                        </div>
                    </div>
                </div>
                <div className="p-6 flex-1">
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    <Card title="Treino Saiyajin 1 - Dia D" subtitle="Posterior, Quadríceps" exercises={7} time={90} weight={8000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia C" subtitle="Dorsais, Bíceps, Ombros, Peitoral" exercises={6} time={90} weight={12000} />

                </div>
            </Main>
            <Footer />
        </div>
    );
}