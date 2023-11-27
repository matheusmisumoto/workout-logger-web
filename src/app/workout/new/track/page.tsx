'use client'

import Button from "@/components/Button"
import ExerciseHeader from "@/components/ExerciseHeader"
import Header from "@/components/Header"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import SetRow from "@/components/SetRow"
import Link from "next/link"
import { useState, useEffect, Fragment } from "react"

interface Sets {
    type: string,
    weight: number | undefined,
    reps: number | undefined
}
interface Exercise {
    id: string | undefined,
    name: string,
    target: string,
    equipment: string,
    sets: Sets[]
}
interface Workout {
    id: string | undefined,
    name: string,
    exercises: Exercise[]
}

export default function Track(){

    const [workout, setWorkout] = useState<Workout>()

    useEffect(() => {
        localStorage.setItem('workout', JSON.stringify(workout));
    }, [workout]);

    useEffect(() => {
       
        const initial: Workout = {
            id: '3da69246-f18f-4303-b438-cc22863fb17e',
            name: '',
            exercises: [
                {
                    id: 'aeuhraurhur',
                    name: 'Teste',
                    target: 'Bíceps',
                    equipment: 'Máquina',
                    sets: [
                        {
                            type: 'STANDARD',
                            weight: 50,
                            reps: 10
                        },
                        {
                            type: 'STANDARD',
                            weight: 60,
                            reps: 10
                        },
                        {
                            type: 'STANDARD',
                            weight: 70,
                            reps: 10
                        },
                        {
                            type: 'STANDARD',
                            weight: 80,
                            reps: 10
                        },
                        {
                            type: 'REST_PAUSE',
                            weight: 50,
                            reps: 10
                        }
                    ]
                }
            ]
        }

        setWorkout(initial);
    }, []);

    function deleteSet(indexExercise: number, indexSet: number) {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            const newWorkout = { ...workout };
            newWorkout.exercises[indexExercise].sets.splice(indexSet, 1);

            if(newWorkout.exercises[indexExercise].sets.length === 0) {
                newWorkout.exercises.splice(indexExercise, 1);
            }

            setWorkout(newWorkout);
        }
    }

    function addSet(indexExercise: number) {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            const newWorkout = { ...workout };
            newWorkout.exercises[indexExercise].sets.push({
                type: 'Standard',
                weight: 0,
                reps: 0
            });
            setWorkout(newWorkout);
        }
    }

    function addExercise() {
        if (workout) {
            const newWorkout = { ...workout };
            newWorkout.exercises.push({
                id: '',
                name: 'Teste 2',
                target: 'Tríceps',
                equipment: 'Dumbbells',
                sets: [
                    {
                        type: 'STANDARD',
                        weight: 0,
                        reps: 0
                    }
                ]
            });
            setWorkout(newWorkout);
        }
    }

    return (
    <div className="h-screen flex flex-col">
        <Header navigationTitle="Voltar" navigationURL="/workout/new" actionTitle="Finalizar" actionURL="#" />
        <Main>
            <MainContent>
            { workout?.exercises?.map((exercise, indexExercise) => {
                    return (
                        <div key={indexExercise} className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                            <ExerciseHeader exercise={exercise.name} target={exercise.target} equipment={exercise.equipment} />
                            <table className="w-full text-sm">
                                <tbody>
                                    { exercise.sets?.map((set, indexSet) => {
                                        return (
                                            <Fragment key={indexSet}>
                                                <SetRow order={indexSet} type={set.type} weight={set.weight!} reps={set.reps!} action={(e) => deleteSet(indexExercise, indexSet)} />
                                            </Fragment>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                            <div className="text-xs mt-4 mb-2 py-3 px-2 rounded-md bg-white/20 block text-center" onClick={(e) => addSet(indexExercise)}>Adicionar set</div>
                            <div className="flex justify-between gap-2 text-center">
                                <div className="flex-1 text-xs py-3 px-2 rounded-md bg-white/20">Estatísticas anteriores</div>
                            </div>
                        </div>
                    )
                })
            }

            </MainContent>
        </Main>
            <div className="px-6 mb-8">
                <Button link="#" action={(e) => addExercise()} title="Adicionar Exercício" primary />
            </div>
    </div>
    )
}