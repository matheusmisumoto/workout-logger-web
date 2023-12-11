'use client'

import { Sets } from "@/lib/interface"

// Calculate One Rep Max using Brzycki formula    
function calculate1RM(sets: Sets[]) {
    let oneRM = 0;
    sets.map((set) => {
        if((set.weight && set.reps) && set.weight! > 0 && set.reps! > 0 ){
            let calculate = set.weight! * (36 / (37 - set.reps!));
            if (calculate > oneRM) oneRM = calculate;
        }
    });
  return oneRM;
}

// Format date
function formatDate(date: Date, short?: boolean) {
    if(short) {
        return new Date(date).toLocaleString('pt-BR',
                                            {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            }) 
                + ', ' + 
                new Date(date).toLocaleTimeString('pt-BR',
                                            {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            });
    }

    return new Date(date).toLocaleString('pt-BR',
                                            {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) 
            + ', ' + 
            new Date(date).toLocaleTimeString('pt-BR',
                                            {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            });
}

export { calculate1RM, formatDate }