export default function WorkoutExercise(props: { exercise: string, target: string, equipment: string, sets: { id?: string, type: string, weight: number, reps: number }[] }){
    return(
        <div className="max-w-screen-md mx-auto pb-8 mb-8 border-b last:border-0 border-white/50">
            <div className="mb-6">
                <h3 className="my-1 text-xl font-bold">{props.exercise}</h3>
                <p className="text-[.75rem]"><strong>Alvo: </strong>{props.target}</p>
                <p className="text-[.75rem]"><strong>Equipamento: </strong>{props.equipment}</p>
            </div>
            <table className="w-full text-sm">
                <tbody>
                    {
                        props.sets.map((set, index) => (
                            <tr key={index}>
                                <td className="w-1/12 py-2 pr-2"><span className="rounded-full bg-primary/75 py-1 px-2 text-[.75rem]">{index+1}</span></td>
                                <td className="w-6/12">{set.type}</td>
                                <td className="w-2/12 text-right">{set.weight} kg</td>
                                <td className="w-1/12 text-center">X</td>
                                <td className="w-2/12">{set.reps} reps</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}