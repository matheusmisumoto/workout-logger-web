import { time } from "console";
import Link from "next/link";
import { title } from "process";

export default function Card(props: {link?: string, title?: string, subtitle?:string, time?: number, weight?: number} ){

    const titleTag = <h3 className="text-lg font-bold">{props.title}</h3>
    const subtitleTag = <p className="text-[.75rem]">{props.subtitle}</p>
    const timeTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.time}</span> tempo</div>
    const weightTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.weight}</span> carga levantada</div>

    if(props.link){
        return (
            <Link href={props.link}>
                <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
                    { props.title ? titleTag : '' }
                    { props.subtitle ? subtitleTag : '' }

                    { props.time || props.weight ?
                    <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                        { timeTag }
                        { weightTag }
                    </div>
                    : '' }
                </div>
            </Link>
        )
    }

    return (
        <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-lg mx-auto">
            { props.title ? titleTag : '' }
            { props.subtitle ? subtitleTag : '' }

            { props.time || props.weight ?
            <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                { timeTag }
                { weightTag }
            </div>
            : '' }
        </div>
    )
}