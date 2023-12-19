import ErrorIcon from "./icons/ErrorIcon";

export default function ErrorMessage(props: { message: string }) {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <ErrorIcon className="h-16 mb-3 w-auto fill-white/25" />
            <p className="text-center text-white/25 align-middle text-sm"><strong>Erro: </strong>{props.message}</p>
        </div>
    )
}