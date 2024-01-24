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
import { formatDate } from "@/lib/util";
import { getToken, getUser } from "@/lib/auth";

export default function Dashboard() {
    
    const [user, setUser] = useState<User>()
    const [lastWorkouts, setLastWorkouts] = useState<LastWorkouts[]>()

    useEffect(() => {
    
        apiWithAuth(getToken()).get('users/' + getUser()?.sub ).then(response => {
            setUser(response.data);
        })
          
        apiWithAuth(getToken()).get('workouts/user/' + getUser()?.sub + '/last').then(response => {
            setLastWorkouts(response.data);
        })

    }, []);

    return (
        <div className="h-full flex flex-col">
            <Header />
            <Main>
                <Hero>
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            {
                            user ?
                                <strong className="font-bold text-4xl">
                                    { user.name.split(' ').slice(0, 1) }!
                                </strong>
                            :
                                <strong className="font-bold text-4xl"><div className="h-7 w-4/6 mt-2 bg-white/25 rounded-3xl animate-pulse inline-block align-text-top"></div>!</strong>
                            }
                        </span>
                    </h1>
                    <Box>
                        <BoxItem data={user ? user.totalWorkouts : undefined} description="treinos registrados" />
                        <BoxItem data={user ? user.totalLifted + ' kg' : undefined} description="carga total levantada" />
                    </Box>
                </Hero>
                <MainContent>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    {
                        lastWorkouts ?
                            lastWorkouts.length > 0 ?
                                lastWorkouts.map((workout: LastWorkouts) => {
                                    let musclesList = workout.target?.map((target: string) => {
                                        return dictionary.muscles[target as keyof typeof dictionary.muscles];
                                    }).join(', ');
                                    return (
                                        <Card 
                                            key={workout.id} 
                                            title={workout.name ? workout.name : formatDate(workout.date, true)}
                                            subtitle={musclesList} 
                                            exercises={workout.totalExercises} 
                                            time={workout.duration} 
                                            weight={workout.totalLifted} 
                                            link={`/workout/` + workout.id}
                                        />
                                    )
                                })
                            :
                            <p className="text-sm mt-4 text-white/25 max-w-screen-md mx-auto">Você não possui treinos registrados.</p>
                        :
                        <>
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