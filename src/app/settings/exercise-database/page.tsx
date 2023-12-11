'use client'

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import RemoveIcon from "@/components/icons/RemoveIcon";
import dictionary from "@/dictionaries/pt-BR.json";
import { apiWithAuth } from "@/lib/api";
import { getToken } from "@/lib/auth";
import { ExerciseData } from "@/lib/interface";
import { useEffect, useState } from "react";

export default function ExerciseDatabase() {

    const initial: ExerciseData = {
        name: '',
        target: '',
        equipment: ''
    }

    const [exercisesLib, setExercisesLib] = useState<ExerciseData[]>([]);
    const [newExercise, setNewExercise] = useState<ExerciseData>(initial);

    const getExercises = () => {
        apiWithAuth(getToken()).get('/exercises').then(response => {
            setExercisesLib(response.data);
        });
    }

    const removeExercise = (id: string) => {
        apiWithAuth(getToken()).delete(`/exercises/${id}`).then(response => {
            getExercises();
        });
    }

    const updateForm = (field: keyof ExerciseData, value: string) => {
        if(newExercise) {
            setNewExercise({
                ...newExercise,
                [field]: value
            });
        }
    }

    const addExercise = () => {
        apiWithAuth(getToken()).post('/exercises', newExercise).then(response => {
            setNewExercise(initial);
            getExercises();
        });
    }

    useEffect(() => {
        getExercises();
    }, [])

    return (
        <div className="h-full flex flex-col">
            <Header navigationTitle="Perfil" />
            <Main>
                <MainContent>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Biblioteca de exercícios</h2>
                    <div className="flex flex-col p-4 pb-0 max-w-screen-md mx-auto bg-white/10 rounded-lg">
                        <input type="text" className="bg-transparent bg-black rounded-md mb-3 p-3 text-white text-sm" placeholder="Novo exercício" name="name" onChange={(e) => updateForm("name", e.target.value)} />
                        <select className="bg-black rounded-md mb-3 p-3 text-white text-sm" name="target" onChange={(e) => updateForm("target", e.target.value)}>
                            {
                                Object.keys(dictionary.muscles).map((muscle, index) => {
                                    return <option key={index} value={muscle}>{dictionary.muscles[muscle as keyof typeof dictionary.muscles]}</option>
                                })
                            }
                        </select>
                        <select className="bg-black rounded-md p-3 text-white text-sm" name="equipment" onChange={(e) => updateForm("equipment", e.target.value)}>
                            {
                                Object.keys(dictionary.equipment).map((equipment, index) => {
                                    return <option key={index} value={equipment}>{dictionary.equipment[equipment as keyof typeof dictionary.equipment]}</option>
                                })
                            }
                        </select>
                        <Button link="#" title="Adicionar exercício" action={() => addExercise()} primary />
                    </div>

                    <ul className="mt-6 max-w-screen-md mx-auto">
                        {
                            exercisesLib.map((exercise, index) => {
                                return (
                                    <li key={index} className="py-4 flex items-center border-b border-white/50">
                                        <div className="flex-1">
                                            <p className="font-bold">{exercise.name}</p>
                                            <p className="text-[.75rem]"><strong>Alvo: </strong>{dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]}</p>
                                            <p className="text-[.75rem]"><strong>Equipamento: </strong>{dictionary.equipment[exercise.equipment as keyof typeof dictionary.equipment]}</p>
                                        </div>
                                        <div>
                                            <RemoveIcon className="h-6 w-auto fill-destructive/80" onClick={() => removeExercise(exercise.id!)} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}