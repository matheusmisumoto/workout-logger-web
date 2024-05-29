import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import AdminListItem from "@/components/AdminListItem";

export default function Loading() {
    return (
        <>
            <Header navigationTitle="Perfil" />
            <Scrollable>
                <Main>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Lista de Exercícios</h2>
                    <div className="flex flex-col max-w-screen-md h-64 mx-auto bg-white/10 rounded-lg animate-pulse"></div>
                    <ul className="mt-6 max-w-screen-md mx-auto">
                        <AdminListItem loading />
                        <AdminListItem loading />
                        <AdminListItem loading />
                    </ul>
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}