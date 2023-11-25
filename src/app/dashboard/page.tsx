import Box from "@/components/Box";
import BoxItem from "@/components/BoxItem";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <Hero>
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <strong className="font-bold text-4xl">
                                Matheus!
                            </strong>
                        </span>
                    </h1>
                    <Box>
                        <BoxItem data="0" description="treinos registrados" />                        
                        <BoxItem data="0" description="carga total levantada" />                        
                    </Box>
                </Hero>
                <MainContent>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    <Card title="Treino Saiyajin 1 - Dia D" subtitle="Posterior, Quadríceps" exercises={7} time={90} weight={8000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia C" subtitle="Dorsais, Bíceps, Ombros, Peitoral" exercises={6} time={90} weight={12000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia B" subtitle="Quadríceps, Posterior, Adutor, Abdutor" exercises={6} time={90} weight={12000} link="/workout" />
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}