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
                    <h1 className="text-3xl text-white max-w-screen-lg mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <strong className="font-bold text-4xl">
                                Matheus!
                            </strong>
                        </span>
                    </h1>
                    <div className="flex gap-4 mt-8 text-center max-w-screen-lg mx-auto">
                        <div className="bg-black/60 p-2 rounded-md basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-xl font-bold">500</span>
                            treinos registrados
                        </div>
                        <div className="bg-black/60 p-2 rounded-md basis-2/4 text-[.625rem] uppercase">
                        <span className="block text-xl font-bold">6.7m</span>
                            total de carga levantada
                        </div>
                    </div>
                </div>
                <div className="p-6 flex-1">
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-lg mx-auto">Últimos treinos</h2>
                    <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
                        <h3 className="text-lg font-bold">Treino Saiyajin 1 - Dia C</h3>
                        <p className="text-[.75rem]">Dorsais, Ombros, Bíceps, Peitoral</p>
                        <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                            <div className="basis-2/4 text-[.625rem] uppercase">
                                <span className="block text-lg font-bold">1:30</span>
                                tempo
                            </div>
                            <div className="basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-lg font-bold">7944</span>
                                carga levantada
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
                        <h3 className="text-lg font-bold">Treino Saiyajin 1 - Dia C</h3>
                        <p className="text-[.75rem]">Dorsais, Ombros, Bíceps, Peitoral</p>
                        <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                            <div className="basis-2/4 text-[.625rem] uppercase">
                                <span className="block text-lg font-bold">1:30</span>
                                tempo
                            </div>
                            <div className="basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-lg font-bold">7944</span>
                                carga levantada
                            </div>
                        </div>
                    </div>


                    <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
                        <h3 className="text-lg font-bold">Treino Saiyajin 1 - Dia C</h3>
                        <p className="text-[.75rem]">Dorsais, Ombros, Bíceps, Peitoral</p>
                        <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                            <div className="basis-2/4 text-[.625rem] uppercase">
                                <span className="block text-lg font-bold">1:30</span>
                                tempo
                            </div>
                            <div className="basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-lg font-bold">7944</span>
                                carga levantada
                            </div>
                        </div>
                    </div>


                    <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
                        <h3 className="text-lg font-bold">Treino Saiyajin 1 - Dia C</h3>
                        <p className="text-[.75rem]">Dorsais, Ombros, Bíceps, Peitoral</p>
                        <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                            <div className="basis-2/4 text-[.625rem] uppercase">
                                <span className="block text-lg font-bold">1:30</span>
                                tempo
                            </div>
                            <div className="basis-2/4 text-[.625rem] uppercase">
                            <span className="block text-lg font-bold">7944</span>
                                carga levantada
                            </div>
                        </div>
                    </div>


                </div>
            </Main>
            <Footer />
        </div>
    );
}