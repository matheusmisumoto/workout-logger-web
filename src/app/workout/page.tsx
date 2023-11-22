import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"

export default function Workout(){
    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/history" />
        <Main>
            <Hero>
                <h2 className="mt-0 mb-1 text-2xl font-bold max-w-screen-md mx-auto">Treino Saiyajin 1 - Dia B</h2>
                <p className="text-[.875rem] max-w-screen-md mx-auto">Posterior, Quadríceps, Adutor, Abdutor</p>
            </Hero>
            <div className="p-6 max-w-screen-md mx-auto">
                <h3 className="mb-3 text-xl font-bold">Alternate Bicep Curl</h3>
                <table className="w-full text-sm">
                    <tbody>
                        <tr>
                            <td className="w-1/12 py-2">1</td>
                            <td className="w-4/12">Standard set</td>
                            <td className="w-3/12 text-center">50 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">2</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">60 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">3</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">70 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">4</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">80 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">5</td>
                            <td className="w-5/12">Rest-Pause set</td>
                            <td className="w-3/12 text-center">50 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="p-6 max-w-screen-md mx-auto">
                <h3 className="mb-3 text-xl font-bold">Gravitron</h3>
                <table className="w-full text-sm">
                    <tbody>
                        <tr>
                            <td className="w-1/12 py-2">1</td>
                            <td className="w-4/12">Standard set</td>
                            <td className="w-3/12 text-center">50 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">2</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">60 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">3</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">70 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">4</td>
                            <td className="w-5/12">Standard set</td>
                            <td className="w-3/12 text-center">80 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                        <tr>
                            <td className="w-1/12 py-2">5</td>
                            <td className="w-5/12">Rest-Pause set</td>
                            <td className="w-3/12 text-center">50 kg</td>
                            <td className="w-1/12 text-center">X</td>
                            <td className="w-3/12 text-center">10 reps</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Main>
        <Footer />
    </div>
    )
}