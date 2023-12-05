'use client'

import Box from "@/components/Box";
import BoxItem from "@/components/BoxItem";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import { apiWithAuth } from "@/lib/api";
import { useState, useEffect } from "react";
import { User, LastWorkouts } from "../../lib/interface";
import dictionary from "@/dictionaries/pt-BR.json";

export default function Dashboard() {

    const [user, setUser] = useState<User>()
    const [lastWorkouts, setLastWorkouts] = useState<LastWorkouts[]>([])

    useEffect(() => {
          apiWithAuth.get('user/3da69246-f18f-4303-b438-cc22863fb17e').then(response => {
            setUser(response.data);
          })
          
          apiWithAuth.get('workout/user/3da69246-f18f-4303-b438-cc22863fb17e/last').then(response => {
            setLastWorkouts(response.data);
          })

    }, []);

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Main>
                <Hero>
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <strong className="font-bold text-4xl">
                                {user?.name.split(' ').slice(0, 1)}!
                            </strong>
                        </span>
                    </h1>
                    <Box>
                        <BoxItem data={user?.totalWorkouts} description="treinos registrados" />                        
                        <BoxItem data={user?.totalLifted + ` kg`} description="carga total levantada" />                        
                    </Box>
                </Hero>
                <MainContent>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    {
                        lastWorkouts.map((workout: LastWorkouts) => {
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
                            let musclesList = workout.target?.map((target: string) => {
                                return dictionary.muscles[target as keyof typeof dictionary.muscles];
                            }).join(', ');
                            return (
                                <Card 
                                    key={workout.id} 
                                    title={workout.name} 
                                    subtitle={musclesList} 
                                    exercises={workout.totalExercises} 
                                    time={workout.duration} 
                                    weight={workout.totalLifted} 
                                    link={`/workout/` + workout.id}
                                />
                            )
                        })
                    }
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}