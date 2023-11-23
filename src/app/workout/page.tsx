import Box from "@/components/Box"
import BoxItem from "@/components/BoxItem"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"

export default function Workout(){
    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/history" />
        <Main>
            <Hero>
                <h2 className="mt-0 mb-1 text-2xl font-bold max-w-screen-md mx-auto">Treino Saiyajin 1 - Dia B</h2>
                <p className="text-[.875rem] max-w-screen-md mx-auto">Posterior, Quadríceps, Adutor, Abdutor</p>
                <Box>
                    <BoxItem data="8" description="exercícios" />
                    <BoxItem data="1:00" description="tempo" />
                    <BoxItem data="5.390 kg" description="carga total" />
                </Box>
            </Hero>
            <MainContent>
                <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                    <div className="mb-6">
                        <h3 className="my-1 text-xl font-bold">Alternate Bicep Curl</h3>
                        <p className="text-[.75rem]"><strong>Alvo: </strong>Tríceps</p>
                        <p className="text-[.75rem]"><strong>Equipamento: </strong>Dumbbell</p>
                    </div>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr>
                                <td className="w-1/12 py-2">1</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">50 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">2</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">60 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">3</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">70 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">4</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">80 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">5</td>
                                <td className="w-6/12">Rest-Pause set</td>
                                <td className="w-2/12 text-center">50 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>


                <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                    <div className="mb-6">
                        <h3 className="my-1 text-xl font-bold">Alternate Bicep Curl</h3>
                        <p className="text-[.75rem]"><strong>Alvo: </strong>Tríceps</p>
                        <p className="text-[.75rem]"><strong>Equipamento: </strong>Dumbbell</p>
                    </div>
                    <table className="w-full text-sm">
                        <tbody>
                            <tr>
                                <td className="w-1/12 py-2">1</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">50 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">2</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">60 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">3</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">70 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">4</td>
                                <td className="w-6/12">Standard set</td>
                                <td className="w-2/12 text-center">80 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                            <tr>
                                <td className="w-1/12 py-2">5</td>
                                <td className="w-6/12">Rest-Pause set</td>
                                <td className="w-2/12 text-center">50 kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12 text-center">10 reps</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

            </MainContent>
        </Main>
        <Footer />
    </div>
    )
}