export default function Box(props: { data?: number | string | undefined, description?: string }) {
    if(props.data === undefined)
    return (
        <div className="bg-black/60 p-2 rounded-md flex-1 flex flex-col items-center gap-1">
            <div className="h-5 w-3/4 mt-1 mb-1 block bg-white/25 rounded-full animate-pulse"></div>
            <p className="text-[.625rem] uppercase">{props.description}</p>
        </div>
    )
    
    return (
        <div className="bg-black/60 p-2 rounded-md flex-1 flex flex-col items-center gap-1">
            <span className="block text-xl font-bold normal-case">{props.data}</span>
            <p className="text-[.625rem] uppercase">{props.description}</p>
        </div>
    )
    
}