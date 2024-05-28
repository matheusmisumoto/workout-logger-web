import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";

export default function Loading(props: any) {
    return (
        <>
            {
                (props.templateType === 'previous') ?
                    <Header navigationTitle="Voltar" />
                :
                    <Header />
            }
            <Scrollable>
                <Main>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Histórico de treinos</h2>
                    <Card loading />
                    <Card loading />
                    <Card loading />
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}