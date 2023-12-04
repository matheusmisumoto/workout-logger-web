"use client"

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
import { apiWithAuth } from "../../lib/api"
import { Workout, Exercise } from "@/app/lib/interface"

export default function Workout({ params }: { params: { workoutid: string } }){
    const [workoutView, setWorkoutView] = useState<Workout>();
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        apiWithAuth.get('workout/' + params.workoutid).then(response => {
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
                muscles.push(exercise.target);
            }
        });
        return muscles.join(', ');
    }

    const deleteWorkout = () => {
        if (workoutView) {
            apiWithAuth.delete('workout/' + params.workoutid).then(response => {
                window.location.href = '/dashboard';
            });
        }
    }

    return (
    <div className="h-screen flex flex-col">
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
                    <h2 className="mt-0 mb-1 text-2xl font-bold max-w-screen-md mx-auto">{workoutView?.name}</h2>
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
                            return (
                                <Fragment key={exercise.id}>
                                    <WorkoutExercise 
                                        exercise={exercise.name} 
                                        target={exercise.target} 
                                        equipment={exercise.equipment} 
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
                    <Button link={'/workout/' + workoutView.id + '/edit'} title="Editar registro de treino" primary />
                    <Button link="#" title="Remover registro de treino" action={() => deleteWorkout()} destructive />
                </MainContent>
                </>
            }
        </Main>
        <Footer />
    </div>
    )
}