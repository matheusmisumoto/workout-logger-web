'use client'

import { apiWithAuth } from "@/app/lib/api"
import { ExerciseData, Sets, Workout } from "@/app/lib/interface"
import Button from "@/components/Button"
import ExerciseHeader from "@/components/ExerciseHeader"
import Header from "@/components/Header"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import RemoveIcon from "@/components/icons/RemoveIcon"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"

export default function TrackWorkout({ params } : { params?: { workoutid: string }}){

    const [workout, setWorkout] = useState<Workout>()
    const [modals, setModals] = useState<String | null>()
    const [exercises, setExercises] = useState<ExerciseData[]>([])
    
    useEffect(() => {
        apiWithAuth.get('exercises').then(response => {
            setExercises(response.data);
        }).catch(error => {
            console.log(error);
        });

        if(params?.workoutid) {
            apiWithAuth.get('workout/' + params.workoutid).then(response => {
                setWorkout(response.data);
            });
        } else if(localStorage.getItem('workoutDraft') && localStorage.getItem('workoutDraft') !== "undefined") {
            const workoutStorage = localStorage.getItem('workoutDraft');
            if(workoutStorage) {
                setWorkout(JSON.parse(workoutStorage));
            }
        } else {
            const initial: Workout = {
                user: '3da69246-f18f-4303-b438-cc22863fb17e',
                status: "IN_PROGRESS",
                exercises: []
            }
    
            setWorkout(initial);
        }
        
    }, [params?.workoutid]);

    useEffect(() => {
        if(workout) {
            if(!params?.workoutid){
                localStorage.setItem('workoutDraft', JSON.stringify(workout));
            }
        }
    }, [workout, params?.workoutid]);

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

    function updateSet(indexExercise: number, indexSet: number, field: keyof Sets, value: number | string) {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            const newWorkout = { ...workout };
            newWorkout.exercises[indexExercise].sets[indexSet] = {
                ...newWorkout.exercises[indexExercise].sets[indexSet],
                [field]: value
            };
            setWorkout(newWorkout);
        }
    }

    function addSet(indexExercise: number) {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            const newWorkout = { ...workout };
            newWorkout.exercises[indexExercise].sets.push({
                type: 'STANDARD',
                weight: 0,
                reps: 0
            });
            setWorkout(newWorkout);
        }
    }

    function addMetaData(field: keyof Workout, value: number | string){
        if(workout) {
            const newWorkout = { 
                ...workout,
                [field]: value
            };
            setWorkout(newWorkout);
        }
    }

    function addExercise(id: string, name: string, target: string, equipment: string) {
        if (workout) {
            const newWorkout = { ...workout };
            newWorkout.exercises.push({
                id: id,
                name: name,
                target: target,
                equipment: equipment,
                sets: [
                    {
                        type: 'STANDARD',
                        weight: 0,
                        reps: 0
                    }
                ]
            });
            setWorkout(newWorkout);
            setModals(null);
        }
    }

    function finishWorkout() {
        if (workout) {
            if(params?.workoutid) {
                apiWithAuth.put('workout/' + params.workoutid, workout).then(response => {
                    window.location.href = '/dashboard';
                })
            } else {
                workout.status = "COMPLETED";
                apiWithAuth.post('workout', workout).then(response => {
                    window.location.href = '/dashboard';
                })
            }
        }
    }

    const setType = ['STANDARD', 'DROP', 'NEGATIVE', 'REST_PAUSE'];

    return (
    <div className="h-full flex flex-col relative">
        <Header navigationTitle="Voltar" actionTitle="Finalizar" action={(e) => setModals('finishWorkout')} />
        <Main>
            <MainContent>
            {
                workout?.exercises?.length === 0 ? 
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-center text-white/25 align-middle">Vamos começar?</p> 
                    </div>
                :
                workout?.exercises?.map((exercise, indexExercise) => {
                    return (
                        <div key={indexExercise} className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                            <ExerciseHeader exercise={exercise.name} target={exercise.target} equipment={exercise.equipment} />
                            <table className="w-full text-sm">
                                <tbody>
                                    { 
                                        exercise.sets?.map((set, indexSet) => {
                                            let weight, reps;
                                            if(set.weight == 0) { weight = ''} else { weight = set.weight}
                                            if(set.reps == 0) { reps = '' } else { reps = set.reps }
                                            return (
                                                <tr key={indexSet}>
                                                    <td className="mr-1 pb-2"><span className="rounded-full bg-primary/75 text-[.75rem] w-5 h-5 inline-block text-center">{indexSet+1}</span></td>
                                                    <td className="w-3/12 pb-2">
                                                        <select className="text-sm bg-black py-1 px-2 w-29 inline-block rounded-none" defaultValue={set.type} onChange={(e) => updateSet(indexExercise, indexSet, 'type', e.target.value)}>
                                                            {
                                                                setType.map((type, index) => {
                                                                    let typeFormat = (type.charAt(0) + type.slice(1).toLowerCase()).replace('_p', '-P');
                                                                    return <option key={index} value={type}>{typeFormat}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                    <td className="w-4/12 text-right pb-2 text-white/50"><input type="number" min={0} name="weight" inputMode="decimal" className="text-sm text-right bg-white/10 text-white mr-2 py-1 px-2 w-12 inline align-middle" defaultValue={weight} onChange={(e) => updateSet(indexExercise, indexSet, 'weight', Number(e.target.value))} />kg</td>
                                                    <td className="w-1/12 text-center pb-2 text-white/50">X</td>
                                                    <td className="w-4/12 text-center pb-2 text-white/50"><input type="number" min={0} name="reps" inputMode="numeric" className="text-sm bg-white/10 text-white mr-2 py-1 px-2 w-8 align-middle" defaultValue={reps} onChange={(e) => updateSet(indexExercise, indexSet, 'reps', Number(e.target.value))} />reps</td>
                                                    <td className="w-1/12 text-center pb-2 pl-2"><RemoveIcon className="h-4 w-auto fill-destructive/80" onClick={() => deleteSet(indexExercise, indexSet)} /></td>
                                                </tr>
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
            { 
            (modals == "addExercise") && 
            <div className="absolute m-auto right-0 bottom-0 left-0 w-full h-full bg-black/80">
                <div className="absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-4/6 bg-secondary rounded-t-3xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Selecionar exercício</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => setModals(null)} />
                    </div>
                    <ul className="text-sm flex-1 overflow-y-scroll mb-12">
                        {
                            exercises.map((exercise, indexSet) => {
                                        return (
                                            <li key={indexSet} className="border-b border-white/50 mx-6 py-4" onClick={(e) => addExercise(exercise.id, exercise.name, exercise.target, exercise.equipment)}>
                                                <h3 className="text-lg font-bold">{exercise.name}</h3>
                                                <p><strong>Alvo: </strong>{exercise.target}</p>
                                                <p><strong>Equipamento: </strong>{exercise.equipment}</p>
                                            </li>
                                        )
                            })
                        }
                    </ul>
                </div>
            </div>
            }
            { 
            (modals == "finishWorkout") && 
            <div className="absolute m-auto right-0 bottom-0 left-0 w-full h-full bg-black/80">
                <div className="absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-3/6 bg-secondary rounded-t-3xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Dados do treino</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => setModals(null)} />
                    </div>
                    
                    <div className="text-sm flex-1 mt-6 mb-12 mx-6 flex flex-col">
                        <input type="text" name="workoutName" className="text-lg px-2 py-1 rounded-lg bg-black/50 w-full mb-3" placeholder="Título (opcional)" defaultValue={workout?.name} onChange={(e) => addMetaData("name", e.target.value)} />
                        <div className="flex justify-between gap-2 text-center mb-3 mx-1">
                            <div className="flex-1">
                                <input type="number" min={0} name="workoutDuration" inputMode="numeric" className="text-md bg-white/10 text-white mr-2 py-1 px-2 w-12 align-middle" placeholder="0" defaultValue={workout?.duration} onChange={(e) => addMetaData("duration", Number(e.target.value))} /> minutos
                            </div>                            
                        </div>
                        <textarea name="workoutComment" className="text-md px-2 py-1 rounded-lg bg-black/50 w-full h-24 resize-none" placeholder="Comentário (opcional)" defaultValue={workout?.comment} onChange={(e) => addMetaData("comment", e.target.value)}></textarea>
                        <Button link="#" title="Finalizar treino" action={() => finishWorkout()} />
                    </div>
                </div>
            </div>
            }
            <div className="px-6 mb-8 static">
                <Button link="#" action={() => setModals('addExercise')} title="Adicionar Exercício" primary />
            </div>
        </Main>
    </div>
    )
}