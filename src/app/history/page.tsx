"use client"

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import { useEffect, useState } from "react";
import { apiWithAuth } from "../lib/api";
import { WorkoutCard } from "../lib/interface";

export default function Dashboard() {
    const [workoutHistory, setWorkoutHistory] = useState<WorkoutCard[]>([]);

    useEffect(() => {
        apiWithAuth.get('workout/user/3da69246-f18f-4303-b438-cc22863fb17e').then(response => {
            setWorkoutHistory(response.data);
        })
    }, []);
    
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Histórico de treinos</h2>
                    {
                        workoutHistory.map((workout: WorkoutCard) => {
                            let formatDate = new Date(workout.date).toLocaleString('pt-BR',
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) + ', ' + new Date(workout.date).toLocaleTimeString('pt-BR',
                                {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                });
                            return (
                                <Card key={workout.id} title={workout.name} subtitle={formatDate} exercises={workout.totalExercises} time={workout.duration} weight={workout.totalLifted} link={`/workout/${workout.id}`} />
                            )
                        })
                    }
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}