'use client'

import { apiWithAuth } from "@/lib/api"
import { ExerciseData, Modal, PreviousStats, Sets, Workout } from "@/lib/interface"
import Button from "@/components/Button"
import ExerciseHeader from "@/components/ExerciseHeader"
import Header from "@/components/Header"
import Main from "@/components/Main"
import MainContent from "@/components/MainContent"
import RemoveIcon from "@/components/icons/RemoveIcon"
import { useState, useEffect, Fragment, ChangeEvent } from "react"
import dictionary from "@/dictionaries/pt-BR.json";
import { calculate1RM, formatDate } from "@/lib/util"
import { getUser, getToken } from "@/lib/auth"

export default function TrackWorkout({ params, template } : { params?: { workoutid: string }, template? : boolean }){

    const [workout, setWorkout] = useState<Workout>()
    const [modals, setModals] = useState<Modal>()
    const [exercises, setExercises] = useState<ExerciseData[]>([])
    const [previousStats, setPreviousStats] = useState<PreviousStats>()
    
    useEffect(() => {
        apiWithAuth(getToken()).get('exercises').then(response => {
            setExercises(response.data);
        }).catch(error => {
            console.log(error);
        });

        const workoutStorage = localStorage.getItem('workoutDraft');

        if(params?.workoutid) {
            apiWithAuth(getToken()).get('workouts/user/' + getUser()?.sub + '/' + params.workoutid).then(response => {
                const createWorkout: Workout = response.data
                
                // remove weight and reps if the new workout is from template or history
                if(template) {
                    createWorkout.user = getUser()?.sub!,
                    createWorkout.name = '';
                    createWorkout.duration = undefined;
                    createWorkout.comment = '';
                    createWorkout.status = 'IN_PROGRESS';
                    createWorkout.exercises.forEach((exercise) => {
                        exercise.sets.forEach((set) => {
                            set.weight = 0;
                            set.reps = 0;
                        })
                    })
                }
                setWorkout(createWorkout);
            });
        } else if(workoutStorage && workoutStorage !== "undefined") {
            const workoutStorageParsed: Workout = JSON.parse(workoutStorage!);
            if(workoutStorageParsed.status === "IN_PROGRESS") {
                setWorkout(JSON.parse(workoutStorage));
            }
        } else {
            const initial: Workout = {
                user: getUser()?.sub!,
                status: "IN_PROGRESS",
                exercises: []
            }
            setWorkout(initial);
        }
        
    }, [params?.workoutid, template]);

    useEffect(() => {
        if(workout) {
            if(!params?.workoutid){
                localStorage.setItem('workoutDraft', JSON.stringify(workout));
            }
        }
    }, [workout, params?.workoutid]);

    const closeModal = () => {
        setModals({type: null, data: null});
    }

    const deleteSet = (indexExercise: number, indexSet: number) => {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            const newWorkout = { ...workout };
            newWorkout.exercises[indexExercise].sets.splice(indexSet, 1);

            if(newWorkout.exercises[indexExercise].sets.length === 0) {
                newWorkout.exercises.splice(indexExercise, 1);
            }

            setWorkout(newWorkout);
        }
    }

    const updateSet = (indexExercise: number, indexSet: number, field: keyof Sets, value: number | string, event?: ChangeEvent<HTMLInputElement>) => {
        if (workout && workout.exercises && workout.exercises[indexExercise].sets) {
            if(field === 'weight' && typeof value == 'number' && (value < 0  || value > 999)) {
                event!.target.value = '';
                value = 0;
                alert('O peso deve ser maior que 0kg e menor que 1000kg')
            }
            else if(field === 'reps' && typeof value == 'number' && (value < 0 || value > 99)) {
                event!.target.value = '';
                value = 0;
                alert('O número de repetições deve ser maior que 0 e menor que 100')
            }
            const newWorkout = { ...workout };

            newWorkout.exercises[indexExercise].sets[indexSet] = {
                ...newWorkout.exercises[indexExercise].sets[indexSet],
                [field]: value
            };

            const oneRM = calculate1RM(newWorkout.exercises[indexExercise].sets);
            newWorkout.exercises[indexExercise].oneRepMax = oneRM;

            setWorkout(newWorkout);
        }
    }

    const addSet = (indexExercise: number) => {
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

    const addMetaData = (field: keyof Workout, value: number | string) => {
        if(workout) {
            const newWorkout = { 
                ...workout,
                [field]: value
            };
            setWorkout(newWorkout);
        }
    }

    const addExercise = (id: string, name: string, target: string, equipment: string) => {
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
            setModals({type: null});
        }
    }

    const getPreviousStats = (userid: string, exerciseid: string, type: string) => {
            apiWithAuth(getToken()).get('workouts/user/' + userid + '/exercise/' + exerciseid).then(response => {
                setPreviousStats(response.data);
                setModals({type: type, data: exerciseid}); 
            });
        
    }

    let disableSubmit = false;

    const finishWorkout = () => {
        if(disableSubmit) return;
        if (workout && 
                (workout.exercises.length > 0 
                    && workout?.exercises[0].sets[0].reps 
                    && workout?.exercises[0].sets[0].reps > 0)
            ) {
            disableSubmit = true;
            if(params?.workoutid && !template) {
                apiWithAuth(getToken()).put('workouts/' + params.workoutid, workout).then(response => {
                    localStorage.removeItem('workoutDraft');
                    window.location.href = '/dashboard';
                })
            } else {
                workout.status = "COMPLETED";
                apiWithAuth(getToken()).post('workouts', workout).then(response => {
                    localStorage.removeItem('workoutDraft');
                    window.location.href = '/dashboard';
                })
            }
        }
    }

    return (
    <div className="h-full flex flex-col relative">
        <Header navigationTitle="Voltar" actionTitle="Finalizar" action={(e) => { setModals({type: 'finishWorkout'}) } } />
        <Main>
            <MainContent>
            {
                workout?.exercises?.length === 0 ? 
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-center text-white/25 align-middle">Vamos começar?</p> 
                    </div>
                :
                workout?.exercises?.map((exercise, indexExercise) => {
                    let targetFormat = dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]
                    let equipmentFormat = dictionary.equipment[exercise.equipment as keyof typeof dictionary.equipment]
                    return (
                        <div key={indexExercise} className="max-w-screen-md mx-auto pb-8 mb-8 border-b border-white/50">
                            <ExerciseHeader exercise={exercise.name} target={targetFormat} equipment={equipmentFormat} />
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
                                                                Object.keys(dictionary.setType).map((type, index) => {
                                                                    let typeFormat = dictionary.setType[type as keyof typeof dictionary.setType];
                                                                    return <option key={index} value={type}>{typeFormat}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                    <td className="w-4/12 text-right pb-2 text-white/50"><input type="number" min={0} max={999} name="weight" inputMode="decimal" className="text-sm text-right bg-white/10 text-white mr-2 py-1 px-2 w-12 inline align-middle" defaultValue={weight} onChange={(e) => updateSet(indexExercise, indexSet, 'weight', Number(e.target.value), e)} />kg</td>
                                                    <td className="w-1/12 text-center pb-2 text-white/50">X</td>
                                                    <td className="w-4/12 text-center pb-2 text-white/50"><input type="number" min={0} max={99} name="reps" inputMode="numeric" className="text-sm bg-white/10 text-white mr-2 py-1 px-2 w-8 align-middle" defaultValue={reps} onChange={(e) => updateSet(indexExercise, indexSet, 'reps', Number(e.target.value), e)} />reps</td>
                                                    <td className="w-1/12 text-center pb-2 pl-2"><RemoveIcon className="h-4 w-auto fill-destructive/80" onClick={() => deleteSet(indexExercise, indexSet)} /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="text-xs mt-4 mb-2 py-3 px-2 rounded-md bg-white/20 block text-center" onClick={(e) => addSet(indexExercise)}>Adicionar set</div>
                            <div className="flex justify-between gap-2 text-center">
                                <div className="flex-1 text-xs py-3 px-2 rounded-md bg-white/20" onClick={(e) => { getPreviousStats(workout.user, exercise.id, 'previousSets') }}>Estatísticas anteriores</div>
                                <div className="flex-1 text-xs py-3 px-2 rounded-md bg-white/20" onClick={(e) => { getPreviousStats(workout.user, exercise.id, '1RM') }}>One Rep Max</div>
                            </div>
                        </div>
                    )
                })
            }
            </MainContent>
            {
            (modals?.type) &&
            <div className="modal-background absolute m-auto right-0 bottom-0 left-0 w-full h-full bg-black/80">
                {
                (modals.type == "addExercise") && 
                <div className="modal absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-5/6 bg-secondary rounded-t-3xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Selecionar exercício</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => closeModal()} />
                    </div>
                    <ul className="text-sm flex-1 overflow-y-scroll mb-12">
                        {
                            exercises.map((exercise, indexSet) => {
                                let targetFormat = dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]
                                let equipmentFormat = dictionary.equipment[exercise.equipment as keyof typeof dictionary.equipment]
                                return (
                                    <li key={indexSet} className="border-b border-white/50 mx-6 py-4" onClick={(e) => addExercise(exercise.id!, exercise.name, exercise.target, exercise.equipment)}>
                                        <h3 className="text-lg font-bold">{exercise.name}</h3>
                                        <p><strong>Alvo: </strong>{targetFormat}</p>
                                        <p><strong>Equipamento: </strong>{equipmentFormat}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                }
                {
                (modals.type == "previousSets") &&
                <div className="modal absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-3/6 bg-secondary rounded-t-3xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Estatísticas Anteriores</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => closeModal()} />
                    </div>
                    <h3 className="mx-6 mt-3 text-lg font-bold">{previousStats?.exercise}</h3>
                    <div className="text-sm flex-1 mt-3 mb-12 px-6 flex flex-col overflow-y-auto">
                        {
                            (previousStats && previousStats.workouts.length < 1) ? 
                                <div className="flex flex-col justify-center items-center h-full">
                                    <p className="text-center text-white/50 align-middle">Nenhum treino registrado</p> 
                                </div>
                            :
                            previousStats?.workouts.map((workout, index) => {
                                return (
                                    <Fragment key={index}>
                                        <h4 className="text-md font-bold">{ formatDate(workout.date) }</h4>
                                        <table className="w-full text-sm mt-2 mb-6">
                                            <tbody>
                                                {
                                                    workout.sets.map((set, index) => {
                                                        let type= dictionary.setType[set.type as keyof typeof dictionary.setType];
                                                        return (
                                                            <tr key={index}>
                                                                <td className="w-1/12 py-2 pr-2"><span className="rounded-full bg-primary/75 py-1 px-2 text-[.75rem]">{index+1}</span></td>
                                                                <td className="w-6/12">{type}</td>
                                                                <td className="text-right">{set.weight} kg</td>
                                                                <td className="w-1/12 text-center text-white/50">X</td>
                                                                <td>{set.reps} reps</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>                
                }
                {
                (modals.type == "1RM") &&
                <div className="modal absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-3/6 bg-secondary rounded-t-3xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">One Repetition Max</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => closeModal()} />
                    </div>
                    <h3 className="mx-6 mt-3 text-lg font-bold">{previousStats?.exercise}</h3>
                    {
                        (workout?.exercises.find((exercise) => exercise.id === modals.data)?.oneRepMax) ?
                            <div className="rounded-full bg-black/75 mx-6 mt-4 p-2 text-center text-white">
                                One Rep Max atual: { workout?.exercises.find((exercise) => exercise.id === modals.data)?.oneRepMax?.toFixed(2) } kg
                            </div>
                        :
                        ''
                    }
                    <div className="text-sm flex-1 mt-2 mb-12 px-6 flex flex-col overflow-y-auto">
                        {
                            (previousStats && previousStats.workouts.length < 1) ? 
                                <div className="flex flex-col justify-center items-center h-full">
                                    <p className="text-center text-white/50 align-middle">Nenhum treino registrado</p> 
                                </div>
                            :
                                <table className="w-full text-sm mt-2 mb-6">
                                    <tbody>
                                {
                                    previousStats?.workouts.map((workout, index) => {
                                        return (
                                            <tr key={index} className="border-b border-white/25">
                                                <td className="w-9/12 py-2">{formatDate(workout.date)}</td>
                                                <td className="text-right py-2"><strong>{calculate1RM(workout.sets).toFixed(2)} kg</strong></td>
                                            </tr>
                                        )
                                    })
                                }
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>                
                }
                {
                (modals.type == "finishWorkout") && 
                <div className="modal absolute flex flex-col m-auto right-0 bottom-0 left-0 w-full max-w-screen-md mx-auto h-3/6 bg-secondary rounded-t-3xl">
                    {
                        (workout && workout.exercises.length > 0
                            && workout?.exercises[0].sets[0].reps 
                            && workout?.exercises[0].sets[0].reps > 0) ?
                    <>
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Dados do treino</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => closeModal()} />
                    </div>
                    
                    <div className="flex-1 mt-6 mb-12 mx-6 flex flex-col">
                        <input type="text" name="workoutName" className="text-lg px-2 py-1 rounded-lg bg-black/50 w-full mb-3" placeholder="Título (opcional)" defaultValue={workout?.name} onChange={(e) => addMetaData("name", e.target.value)} />
                        <div className="flex justify-between gap-2 text-center mb-3 mx-1">
                            <div className="flex-1 text-sm">
                                <input type="number" min={0} name="workoutDuration" inputMode="numeric" className="text-md bg-white/10 text-white mr-2 py-1 px-2 w-12 align-middle" placeholder="0" defaultValue={workout?.duration} onChange={(e) => addMetaData("duration", Number(e.target.value))} /> minutos
                            </div>                            
                        </div>
                        <textarea name="workoutComment" className="text-md px-2 py-1 rounded-lg bg-black/50 w-full h-24 resize-none" placeholder="Comentário (opcional)" defaultValue={workout?.comment} onChange={(e) => addMetaData("comment", e.target.value)}></textarea>
                        <Button link="#" title="Finalizar treino" action={() => finishWorkout()} primary />
                    </div>
                    </>
                    :
                    <>
                    <div className="flex">
                        <h2 className="text-2xl font-bold m-6 mb-2 flex-1">Dados do treino</h2>
                        <RemoveIcon className="m-6 mb-2 fill-white" onClick={() => closeModal()} />
                    </div>
                    <div className="flex flex-col justify-center items-center h-full">
                        <p className="text-center text-white/25 align-middle">Adicione pelo menos um set</p> 
                    </div>
                    </>
                    }
                </div>
                }
            </div>
            }
        </Main>
        <div className="px-6 mb-8 static">
                <Button link="#" action={() => setModals({type: 'addExercise'})} title="Adicionar Exercício" primary />
        </div>
    </div>
    )
}