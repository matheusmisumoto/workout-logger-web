import Box from "@/components/Box";
import BoxItem from "@/components/BoxItem";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import { apiWithAuth } from "@/lib/api";
import { User, LastWorkouts } from "@/lib/interface";
import dictionary from "@/dictionaries/pt-BR.json";
import { formatDate, formatTotalLifted } from "@/lib/util";
import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Loading from "./loading";

export default async function Dashboard() {
    const token: string = (await cookies()).get('token')?.value!;
    
    const fetchUser = await apiWithAuth(token).get('users/' + getUser(token)?.sub );
    const user: User = fetchUser.data;
    const fetchLastWorkouts = await apiWithAuth(token).get('workouts/user/' + getUser(token)?.sub + '/last');
    const lastWorkouts: LastWorkouts[] = fetchLastWorkouts.data;

    return (
        <Suspense fallback={<Loading />} >
            <Header />
            <Scrollable>
                <Hero>
                    <h1 className="text-3xl text-white max-w-screen-md mx-auto">
                        Let&apos;s go, 
                        <span className="block">
                            <strong className="font-bold text-4xl">
                                { user.name.split(' ', 1) }!
                            </strong>
                        </span>
                    </h1>
                    <Box>
                        <BoxItem data={user.totalWorkouts} description="treinos registrados" />
                        <BoxItem data={formatTotalLifted(user.totalLifted) + ' kg'} description="carga total levantada" />
                    </Box>
                </Hero>
                <Main>
                    <h2 className="mb-3 text-2xl font-bold max-w-screen-md mx-auto">Últimos treinos</h2>
                        {
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
                                            link={`/dashboard/workout/` + workout.id}
                                        />
                                    )
                                })
                            :
                            <p className="text-sm mt-4 text-white/25 max-w-screen-md mx-auto">Você não possui treinos registrados.</p>
                        }
                </Main>
            </Scrollable>
            <Footer />
        </Suspense>
    );
}