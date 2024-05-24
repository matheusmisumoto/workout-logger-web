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
                                                dateStyle: 'medium',
                                                timeStyle: 'short',
                                                timeZone: 'America/Sao_Paulo'
                                            });
    }

    return new Date(date).toLocaleString('pt-BR',
                                            {
                                                dateStyle: 'long',
                                                timeZone: 'America/Sao_Paulo'
                                            }) 
            + ', ' + 
            new Date(date).toLocaleTimeString('pt-BR',
                                            {
                                                timeStyle: 'short',
                                                timeZone: 'America/Sao_Paulo'
                                            });
}

// Format total lifted number

function formatTotalLifted(num: number) {
    if(num > 1000000000) {
        return (num/1000000000).toFixed(2) + 'B';
    }
    if(num > 1000000) {
        return (num/1000000).toFixed(2) + 'M';
    }
    return num;
}

export { calculate1RM, formatDate, formatTotalLifted }