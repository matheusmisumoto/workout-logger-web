'use client';

import { useState, useEffect } from "react";
import MenuLink from "./MenuLink";

export default function StartWorkout() {

    const[draftLink, setDraftLink] = useState(false);

    useEffect(() => {
        if(typeof localStorage !== 'undefined') {
            const workoutStorage = localStorage.getItem('workoutDraft');
            if(workoutStorage){
                const draft = JSON.parse(workoutStorage);
                if(draft.exercises.length > 0) {
                    setDraftLink(true);
                }
            }    
        }
    }, [])

    if(draftLink) { return <MenuLink link="/dashboard/workout/new/track" title="Continuar treino" subtitle="Continue o registro de onde parou" /> }

    return <MenuLink link="/dashboard/workout/new/track" title="Iniciar treino vazio" subtitle="Adicione exercícios conforme treina" />
}