import Box from "@/components/Box";
import BoxItem from "@/components/BoxItem";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";

export default function Loading() {
    return (
        <>
            <Header />
            <Scrollable>
                <Hero>
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <div className="h-8 w-4/6 mt-2 bg-white/25 rounded-3xl animate-pulse inline-block align-text-top"></div>
                        </span>
                    </h1>
                    <Box>
                        <BoxItem description="treinos registrados" />
                        <BoxItem description="carga total levantada" />
                    </Box>
                </Hero>
                <Main>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    <Card loading />
                    <Card loading />
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}