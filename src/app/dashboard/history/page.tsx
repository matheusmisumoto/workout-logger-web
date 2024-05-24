import Card from "@/components/Card";
import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import { Suspense } from "react";
import { apiWithAuth } from "@/lib/api";
import { LastWorkouts } from "@/lib/interface";
import { formatDate } from "@/lib/util";
import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import dictionary from "@/dictionaries/pt-BR.json";
import Footer from "@/components/Footer";

export default async function WorkoutHistoryPage(props: any) {
    const token: string = cookies().get('token')?.value!;

    const fetchWorkoutHistory = await apiWithAuth(token).get('workouts/user/' + getUser(token).sub + '/all');
    const workoutHistory: LastWorkouts[] = fetchWorkoutHistory.data;

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
                    {
                        <Suspense fallback={
                            <>
                                <Card loading />
                                <Card loading />
                                <Card loading />
                            </>
                        }>
                            {
                                workoutHistory.length > 0 ?
                                    workoutHistory.map((workout: LastWorkouts) => {
                                        let link;
                                        let musclesList = workout.target?.map((target: string) => {
                                            return dictionary.muscles[target as keyof typeof dictionary.muscles];
                                        }).join(', ');
                                        if (props.templateType === 'previous') {
                                            link = `/dashboard/workout/new/from-history/${workout.id}`
                                        } else {
                                            link = `/dashboard/workout/${workout.id}`
                                        }
                                        return (
                                            <Card 
                                                key={workout.id} 
                                                title={workout.name ? workout.name : formatDate(workout.date, true)} 
                                                subtitle={musclesList} 
                                                exercises={workout.totalExercises} 
                                                time={workout.duration} 
                                                weight={workout.totalLifted} 
                                                link={link}
                                            />
                                        )
                                    })
                                : 
                                <p className="text-sm mt-4 text-white/25 max-w-screen-md mx-auto">Você não possui treinos registrados.</p>
                            }
                        </Suspense>
                    }
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}