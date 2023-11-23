import { ReactNode } from "react"

type MainProps = {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main className="bg-black text-white flex-1 flex flex-col overflow-x-hidden">
            {children}
        </main>
    )
}