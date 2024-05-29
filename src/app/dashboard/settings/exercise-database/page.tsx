import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import AdminListItem from "@/components/AdminListItem";
import NewExerciseForm from "@/components/NewExerciseForm";
import { apiWithAuth } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { ExerciseData } from "@/lib/interface";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";

export default async function ExerciseDatabase() {
    const token: string = cookies().get('token')?.value!;
    if(getUser(token).roles !== 'ROLE_ADMIN') redirect('/');

    const getExercises = await apiWithAuth(token).get('/exercises');
    const exercisesLib: ExerciseData[] = getExercises.data;

    return (
        <>
            <Header navigationTitle="Perfil" />
            <Scrollable>
                <Main>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Lista de Exercícios</h2>
                        <NewExerciseForm token={token} />
                    <ul className="mt-6 max-w-screen-md mx-auto">
                        {
                            exercisesLib.map((exercise, index) => {
                                return (
                                    <AdminListItem key={index} exercise={exercise} token={token} />
                                )
                            })
                        }
                    </ul>
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}