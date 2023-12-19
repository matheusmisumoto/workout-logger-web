import Link from "next/link";

export default function Card(props: {link?: string, title?: string, subtitle?:string, exercises?: number, time?: number, weight?: number, loading?: boolean} ){

    const titleTag = <h3 className="text-xl font-bold">{props.title}</h3>
    const subtitleTag = <p className="text-[.75rem]">{props.subtitle}</p>
    const exercisesTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.exercises}</span> exercícios</div>
    const timeTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold">{props.time}</span> tempo</div>
    const weightTag = <div className="basis-2/4 text-[.625rem] uppercase"><span className="block text-lg font-bold normal-case">{props.weight} kg</span> carga total</div>

    if(props.loading){
        return (
            <div className="mt-2 mb-4 p-4 bg-card rounded-2xl max-w-screen-md mx-auto">
                <div className="h-5 w-5/6 mt-1 block bg-white/25 rounded-full animate-pulse"></div>
                <div className="h-3 w-2/4 mt-2 block bg-white/25 rounded-full animate-pulse"></div>
    
                <div className="flex gap-4 mt-3 pt-3 text-center border-t border-white/25">
                    <div className="basis-2/4 h-11 bg-white/25 rounded-md animate-pulse"></div>
                    <div className="basis-2/4 h-11 bg-white/25 rounded-md animate-pulse"></div>
                    <div className="basis-2/4 h-11 bg-white/25 rounded-md animate-pulse"></div>
                </div>
            </div>
        )
    }

    return (
        <Link href={props.link ? props.link : '#'}>
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