import { Sets } from "@/lib/interface"
import ExerciseHeader from "./ExerciseHeader"
import dictionary from "@/dictionaries/pt-BR.json";
import { calculate1RM } from "@/lib/util";

export default function WorkoutExercise(props: { exercise: string, target: string, equipment: string, sets: Sets[] }){
    return(
        <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b last:border-0 border-white/50">
            <ExerciseHeader exercise={props.exercise} target={props.target} equipment={props.equipment} />
            <table className="w-full text-sm">
                <tbody>
                    {
                        props.sets.map((set, index) => {
                            let type= dictionary.setType[set.type as keyof typeof dictionary.setType];
                            return (
                                <tr key={index}>
                                    <td className="py-2 pr-2"><span className="rounded-full bg-primary/75 py-1 px-2 text-[.75rem]">{index+1}</span></td>
                                    <td className="w-6/12">{type}</td>
                                    <td className="w-3/12 text-right">{set.weight} kg</td>
                                    <td className="w-1/12 text-center text-white/50">X</td>
                                    <td className="w-3/12">{set.reps} reps</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="bg-white/10 p-2 mt-4 rounded-full">
                <p className="text-sm text-center text-white/80"><strong>One Rep Max: </strong>{calculate1RM(props.sets).toFixed(2)} kg</p>
            </div>
        </div>
    )
}