'use client'

import Box from "@/components/Box"
import BoxItem from "@/components/BoxItem"
import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import WorkoutExercise from "@/components/WorkoutExercise"

import { Fragment, useEffect, useState } from "react"
import { apiWithAuth } from "@/lib/api"
import type { Workout, Exercise } from "@/lib/interface"
import dictionary from "@/dictionaries/pt-BR.json";
import { formatDate } from "@/lib/util"
import { getToken, getUser } from "@/lib/auth"

export default function Workout({ params }: { params: { workoutid: string } }){
    
    const [workoutView, setWorkoutView] = useState<Workout>();
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        apiWithAuth(getToken()).get('workouts/user/' + getUser()?.sub + '/' + params.workoutid).then(response => {
          setWorkoutView(response.data);
        }).catch(error => {
            setShowError(true);
            console.log(error);
        });
    }, [params.workoutid]);

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

    const deleteWorkout = () => {
        if (workoutView) {
            apiWithAuth(getToken()).delete('workouts/' + params.workoutid).then(response => {
                window.location.href = '/dashboard';
            });
        }
    }

    return (
    <div className="h-full flex flex-col">
        <Header navigationTitle="Voltar" />
        <Main>
            { (showError && !workoutView) &&
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-center text-white/25 align-middle">Erro!</p>
                    </div>
            }
            { (!showError && !workoutView) &&
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-center text-white/25 align-middle">Carregando</p>
                </div>
            }
            { workoutView &&
                <>
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
                <MainContent>
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
                    <Button link={'/workout/' + workoutView.id + '/edit'} title="Editar treino" />
                    <Button link="#" title="Remover treino" action={() => deleteWorkout()} destructive />
                </MainContent>
                </>
            }
        </Main>
        <Footer />
    </div>
    )
}