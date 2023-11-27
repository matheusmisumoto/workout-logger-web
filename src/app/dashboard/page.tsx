'use client'

import Box from "@/components/Box";
import BoxItem from "@/components/BoxItem";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import { api } from "../lib/api";
import { useState, useEffect } from "react";

interface User {
    id: string
    name: string
    login: string
    oAuthId: number
    avatarUrl: string
    totalWorkouts: number
    totalLifted: number
}

export default function Dashboard() {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        /*
          api.get('v1/user/3da69246-f18f-4303-b438-cc22863fb17e').then(response => {
            setUser(response.data);
          });
        */

        const templateUser: User = {
            id: '3da69246-f18f-4303-b438-cc22863fb17e',
            name: 'Goku',
            login: 'goku',
            oAuthId: 1,
            avatarUrl: 'https://i.pinimg.com/originals/5b/8e/5d/5b8e5d6f6c9b2e3d0d5f0f8c8d6c0e8c.jpg',
            totalWorkouts: 3,
            totalLifted: 32000
        }

        setUser(templateUser);
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
                                {user?.name}!
                            </strong>
                        </span>
                    </h1>
                    <Box>
                        <BoxItem data={user?.totalWorkouts} description="treinos registrados" />                        
                        <BoxItem data={user?.totalLifted} description="carga total levantada" />                        
                    </Box>
                </Hero>
                <MainContent>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                    <Card title="Treino Saiyajin 1 - Dia D" subtitle="Posterior, Quadríceps" exercises={7} time={90} weight={8000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia C" subtitle="Dorsais, Bíceps, Ombros, Peitoral" exercises={6} time={90} weight={12000} link="/workout" />
                    <Card title="Treino Saiyajin 1 - Dia B" subtitle="Quadríceps, Posterior, Adutor, Abdutor" exercises={6} time={90} weight={12000} link="/workout" />
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}