'use client';

import { useState, useEffect } from "react";
import MenuLink from "./MenuLink";
import { UserToken } from "@/lib/interface";
import { jwtDecode } from "jwt-decode";

export default function StartWorkout() {
    const token = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
    const user: UserToken = jwtDecode(token!);

    const[draftLink, setDraftLink] = useState(false);

    useEffect(() => {
        if(typeof localStorage !== 'undefined') {
            const workoutStorage = localStorage.getItem('workoutDraft');
            if(workoutStorage){
                const draft = JSON.parse(workoutStorage);
                if(draft.exercises.length > 0 && draft.user == user.sub) {
                    setDraftLink(true);
                }
            }    
        }
    }, [user.sub])

    if(draftLink) { return <MenuLink link="/dashboard/workout/new/track" title="Continuar treino" subtitle="Continue o registro de onde parou" /> }

    return <MenuLink link="/dashboard/workout/new/track" title="Iniciar treino vazio" subtitle="Adicione exercícios conforme treina" />
}