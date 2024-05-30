'use server';

import Box from "@/components/Box"
import BoxItem from "@/components/BoxItem"
import Button from "@/components/Button"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Scrollable from "@/components/Scrollable"
import Main from "@/components/Main"
import WorkoutExercise from "@/components/WorkoutExercise"

import { Fragment, Suspense } from "react"
import { apiWithAuth } from "@/lib/api"
import type { Workout, Exercise } from "@/lib/interface"
import dictionary from "@/dictionaries/pt-BR.json";
import { formatDate } from "@/lib/util"
import { getUser } from "@/lib/auth"
import { cookies } from "next/headers"
import { deleteWorkout } from "@/lib/actions"
import Footer from "@/components/Footer";
import Loading from "./loading";

export default async function Workout({ params }: { params: { workoutid: string } }){
    const token: string = cookies().get('token')?.value!;

    const fetchWorkout = await apiWithAuth(token).get('workouts/user/' + getUser(token).sub + '/' + params.workoutid);
    const workoutView: Workout = fetchWorkout.data;

    const listMuscles = (exercises: Exercise[]) => {
        let muscles: string[] = [];
        if(!exercises) return;
        exercises.forEach(exercise => {
            if(!muscles.includes(exercise.target)){
                muscles.push(dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]);
            }
        });
        muscles = Array.from(new Set(muscles));
        return muscles.join(', ');
    }

    return (
        <>
            <Header navigationTitle="Voltar" />
            <Scrollable>
                <Suspense fallback={<Loading />}>
                    <Hero>
                        {
                            workoutView?.name ?
                                <>
                                    <h2 className="mt-0 text-2xl font-bold max-w-screen-md mx-auto">{workoutView?.name}</h2>
                                    <p className="text-[.875rem] mb-4 font-bold max-w-screen-md mx-auto">{formatDate(workoutView?.date!, true)}</p>
                                </>
                            :
                                <h2 className="mt-0 mb-2 text-2xl font-bold max-w-screen-md mx-auto">{formatDate(workoutView?.date!, true)}</h2>
                        }
                        <p className="text-[.875rem] max-w-screen-md mx-auto">{listMuscles(workoutView?.exercises!)}</p>
                        <Box>
                            <BoxItem data={workoutView?.exercises.length} description="exercícios" />
                            <BoxItem data={workoutView?.duration} description="minutos" />
                            <BoxItem data={workoutView?.totalLifted + ` kg`} description="carga total" />
                        </Box>
                    </Hero>
                    <Main>
                        {
                            workoutView?.exercises.map((exercise: Exercise) => {
                                let targetFormat = dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]
                                let equipmentFormat = dictionary.equipment[exercise.equipment as keyof typeof dictionary.equipment]
                                return (
                                    <Fragment key={exercise.id}>
                                        <WorkoutExercise 
                                            exercise={exercise.name} 
                                            target={targetFormat} 
                                            equipment={equipmentFormat} 
                                            sets={exercise.sets}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                        {
                            workoutView?.comment &&
                            <div className="max-w-screen-md mx-auto mb-8">
                                <h3 className="text-lg font-bold mb-2">Observações</h3>
                                <p className="text-sm max-w-screen-md mx-auto">{workoutView?.comment}</p>
                            </div>
                        }                    
                        <Button link={'/dashboard/workout/' + workoutView.id + '/edit'} title="Editar treino" />
                        <form action={deleteWorkout.bind(null, workoutView.id!, token)}>
                            <button className="rounded-xl bg-white/5 text-destructive text-md text-center py-3 my-4 block w-full max-w-screen-md mx-auto" id={workoutView.id!}>Remover treino</button>
                        </form>
                    </Main>
                </Suspense>
            </Scrollable>
            <Footer />
        </>
    )
}