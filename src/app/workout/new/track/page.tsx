import Button from "@/components/Button"
import Footer from "@/components/Footer"
import FooterTracking from "@/components/FooterTracking"
import Header from "@/components/Header"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import RemoveIcon from "@/components/icons/RemoveIcon"
import Link from "next/link"

export default function Track(){
    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/workout/new" actionTitle="Finalizar" actionURL="#" />
        <Main>
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
                                <td><span className="rounded-full bg-primary/75 py-1 px-2 text-[.75rem]">1</span></td>
                                <td className="w-3/12">
                                    <select className="text-sm bg-black py-1 px-2 w-28 inline-block rounded-none">
                                        <option>Standard</option>
                                        <option>Drop</option>
                                        <option>Rest-Pause</option>
                                        <option>Standard</option>
                                    </select>
                                </td>
                                <td className="w-4/12 text-right"><input type="number" name="test" inputMode="decimal" className="text-sm text-right bg-white/10 mr-2 py-1 px-2 w-12 inline align-middle" />kg</td>
                                <td className="w-1/12 text-center text-white/50">X</td>
                                <td className="w-4/12 text-center"><input type="number" inputMode="numeric" className="text-sm bg-white/10 mr-2 py-1 px-1 w-8 align-middle" />reps</td>
                                <td className="w-1/12 text-center pl-2"><RemoveIcon className="h-4 w-auto fill-destructive" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link href="#" className="text-xs mt-4 mb-2 py-3 px-2 rounded-md bg-white/20 block text-center">Adicionar set</Link>
                    <div className="flex justify-between gap-2 text-center">
                        <Link href="#" className="flex-1 text-xs py-3 px-2 rounded-md bg-white/20">Estatísticas anteriores</Link>
                        
                    </div>
                </div>

                <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                    <div className="mb-6">
                        <h3 className="my-1 text-xl font-bold">Alternate Bicep Curl</h3>
                        <p className="text-[.75rem]"><strong>Alvo: </strong>Tríceps</p>
                        <p className="text-[.75rem]"><strong>Equipamento: </strong>Dumbbell</p>
                    </div>
                    <div className="flex justify-between gap-2 text-center mb-4 py-2 px-4 rounded-lg bg-secondary text-sm">
                        <div>
                            <select className="text-sm text-right bg-black py-1 px-2 w-28 inline-block rounded-none">
                                <option>Standard</option>
                                <option>Drop</option>
                                <option>Rest-Pause</option>
                                <option>Standard</option>
                            </select>
                        </div>
                        <div>
                            <input type="number" name="test" inputMode="decimal" className="text-sm text-right bg-black mr-2 py-1 px-2 w-16 inline border border-white/25 align-middle" />kg
                        </div>
                        <div>
                            <input type="number" inputMode="numeric" className="text-sm bg-black mr-2 py-1 px-1 w-9 inline-block border border-white/25 align-middle" />reps
                        </div>
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
                    <Link href="#" className="text-xs mt-4 mb-2 py-3 px-2 rounded-md bg-white/10 block text-center">Adicionar set</Link>
                    <div className="flex justify-between gap-2 text-center">
                        <Link href="#" className="flex-1 text-xs py-3 px-2 rounded-md bg-white/10">Estatísticas anteriores</Link>
                        <Link href="#" className="flex-1 text-xs py-3 px-2 rounded-md bg-white/10">One Rep Max</Link>
                    </div>
                </div>


            </MainContent>
        </Main>
            <div className="px-6 mb-8">
                <Button link="#" title="Adicionar Exercício" primary />
            </div>
    </div>
    )
}