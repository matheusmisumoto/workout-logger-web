'use client';

import { addExercise } from "@/lib/actions";
import { createRef } from "react";
import dictionary from "@/dictionaries/pt-BR.json";

export default function newExerciseForm({ token }: { token: string }) {
    const ref = createRef<HTMLFormElement>();

    return (
        <form ref={ref} action={async (formData) => {
            await addExercise(formData, token)
            ref.current?.reset()
        }}>
            <div className="flex flex-col p-4 pb-0 max-w-screen-md mx-auto bg-white/10 rounded-lg">
                <input type="text" className="bg-transparent bg-black rounded-md mb-3 p-3 text-white text-sm" placeholder="Novo exercício" name="name"/>
                <select className="bg-black rounded-md mb-3 p-3 text-white text-sm" name="target" defaultValue="">
                    <option value="" hidden disabled>Selecione um músculo</option>
                    {
                        Object.keys(dictionary.muscles)
                            .sort((a, b) => dictionary.muscles[a as keyof typeof dictionary.muscles].localeCompare(dictionary.muscles[b as keyof typeof dictionary.muscles]))
                            .map((muscle, index) => {
                                return <option key={index} value={muscle}>{dictionary.muscles[muscle as keyof typeof dictionary.muscles]}</option>
                            })
                    }
                </select>
                <select className="bg-black rounded-md p-3 text-white text-sm" name="equipment" defaultValue="">
                    <option value="" hidden disabled>Selecione um equipamento</option>
                    {
                        Object.keys(dictionary.equipment)
                            .sort((a, b) => dictionary.equipment[a as keyof typeof dictionary.equipment].localeCompare(dictionary.equipment[b as keyof typeof dictionary.equipment]))
                            .map((equipment, index) => {
                                return <option key={index} value={equipment}>{dictionary.equipment[equipment as keyof typeof dictionary.equipment]}</option>
                            })
                    }
                </select>
                <button className="rounded-xl text-md text-center py-3 my-4 block w-full max-w-screen-md mx-auto bg-primary text-white/90 font-bold">Adicionar Exercício</button>
            </div>
        </form>
    );
}