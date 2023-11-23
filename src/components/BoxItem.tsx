export default function Box(props: { data?: string, description?: string }) {
    return (
        <div className="bg-black/60 p-2 rounded-md flex-1 text-[.625rem] uppercase">
            <span className="block text-xl font-bold normal-case">{props.data}</span>
            {props.description}
        </div>
    )
}