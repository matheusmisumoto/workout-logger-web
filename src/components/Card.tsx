import { time } from "console";
import Link from "next/link";
import { title } from "process";

export default function Card(props: {link?: string, title?: string, subtitle?:string, exercises?: number, time?: number, weight?: number} ){

    const titleTag = <h3 className="text-xl font-bold">{props.title}</h3>
    const subtitleTag = <p className="text-[.75rem]">{props.subtitle}</p>
    const exercisesTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.exercises}</span> exercícios</div>
    const timeTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.time}</span> tempo</div>
    const weightTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold normal-case">{props.weight} kg</span> carga total</div>

    if(props.link){
        return (
            <Link href={props.link}>
                <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-md mx-auto">
                    { props.title ? titleTag : '' }
                    { props.subtitle ? subtitleTag : '' }

                    { props.time || props.weight || props.exercises ?
                    <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25 text-white/75">
                        { exercisesTag }
                        { timeTag }
                        { weightTag }
                    </div>
                    : '' }
                </div>
            </Link>
        )
    }

    return (
        <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-md mx-auto">
            { props.title ? titleTag : '' }
            { props.subtitle ? subtitleTag : '' }

            { props.time || props.weight || props.exercises ?
            <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25 text-white/75">
                { exercisesTag }
                { timeTag }
                { weightTag }
            </div>
            : '' }
        </div>
    )
}