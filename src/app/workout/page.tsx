import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Main"

export default function Workout(){
    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/history" />
        <Main>
            <div className="p-6 flex-1">
                <h2 className="mt-2 mb-1 text-2xl font-bold max-w-screen-lg mx-auto">19/11/2023 - 19:00</h2>
                <p className="text-[.875rem] max-w-screen-lg mx-auto">Posterior, Quadríceps, Adutor, Abdutor</p>
            </div>
        </Main>
        <Footer />
    </div>
    )
}