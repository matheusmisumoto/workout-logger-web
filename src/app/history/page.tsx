'use client'

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import { useEffect, useState } from "react";
import { apiWithAuth } from "@/lib/api";
import { LastWorkouts } from "@/lib/interface";
import { formatDate } from "@/lib/util";
import dictionary from "@/dictionaries/pt-BR.json";
import { getUser, getToken } from "@/lib/auth";

export default function WorkoutHistoryPage(props: any) {
    
    const [workoutHistory, setWorkoutHistory] = useState<LastWorkouts[]>();
    
    useEffect(() => {
        apiWithAuth(getToken()).get('workouts/user/' + getUser()?.sub + '/all').then(response => {
            setWorkoutHistory(response.data);
        })
    }, []);

    return (
        <div className="h-full flex flex-col">
            {
                (props.templateType === 'previous') ?
                    <Header navigationTitle="Voltar" />
                :
                    <Header />
            }
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Histórico de treinos</h2>
                    {
                        workoutHistory ?
                            workoutHistory.length > 0 ?
                                workoutHistory.map((workout: LastWorkouts) => {
                                    let link;
                                    let musclesList = workout.target?.map((target: string) => {
                                        return dictionary.muscles[target as keyof typeof dictionary.muscles];
                                    }).join(', ');
                                    if (props.templateType === 'previous') {
                                        link = `/workout/new/from-history/${workout.id}`
                                    } else {
                                        link = `/workout/${workout.id}`
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
                        :
                        <>
                            <Card loading />
                            <Card loading />
                            <Card loading />
                        </>
                    }
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}