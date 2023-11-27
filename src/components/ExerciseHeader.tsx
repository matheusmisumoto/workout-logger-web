export default function ExerciseHeader(props: { exercise: string, target: string, equipment: string}) {
    return(
        <div className="mb-6">
            <h3 className="my-1 text-xl font-bold">{props.exercise}</h3>
            <p className="text-[.75rem]"><strong>Alvo: </strong>{props.target}</p>
            <p className="text-[.75rem]"><strong>Equipamento: </strong>{props.equipment}</p>
        </div>
    )
}