import Box from "@/components/Box"
import BoxItem from "@/components/BoxItem"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Scrollable from "@/components/Scrollable"
import Main from "@/components/Main"

export default function Loading() {
    return (
        <>
            <Header navigationTitle="Voltar" />
            <Scrollable>
                <Hero>
                    <div className="max-w-screen-md mx-auto">
                        <div className="h-6 my-1 bg-white/20 rounded-full w-6/12"></div>
                        <div className="h-4 mt-2 bg-white/20 rounded-full w-3/12"></div>
                        <div className="h-4 mt-6 bg-white/20 rounded-full w-3/12"></div>
                    </div>
                    <Box>
                        <BoxItem description="exercícios" />
                        <BoxItem description="minutos" />
                        <BoxItem description="carga total" />
                    </Box>
                </Hero>
                <Main>
                    <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b last:border-0 border-white/50 animate-pulse">
                        <div className="mb-6">
                            <div className="h-5 my-2 bg-white/20 rounded-full w-6/12"></div>
                            <div className="h-3 mt-2 bg-white/20 rounded-full w-3/12"></div>
                            <div className="h-3 mt-2 bg-white/20 rounded-full w-3/12"></div>
                        </div>
                        <table className="w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="py-2 pr-2"><div className="rounded-full bg-white/50 h-6 w-6 text-[.75rem]"></div></td>
                                    <td className="w-7/12"><div className="h-4 my-2 bg-white/20 rounded-full w-3/12"></div></td>
                                    <td className="w-5/12"><div className="h-4 my-2 bg-white/20 rounded-full"></div></td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-2"><div className="rounded-full bg-white/50 h-6 w-6 text-[.75rem]"></div></td>
                                    <td className="w-7/12"><div className="h-4 my-2 bg-white/20 rounded-full w-3/12"></div></td>
                                    <td className="w-5/12"><div className="h-4 my-2 bg-white/20 rounded-full"></div></td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-2"><div className="rounded-full bg-white/50 h-6 w-6 text-[.75rem]"></div></td>
                                    <td className="w-7/12"><div className="h-4 my-2 bg-white/20 rounded-full w-3/12"></div></td>
                                    <td className="w-5/12"><div className="h-4 my-2 bg-white/20 rounded-full"></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bg-white/10 h-9 mt-4 rounded-full"></div>
                    </div>
                </Main>
            </Scrollable>
            <Footer />
        </>
    )
}