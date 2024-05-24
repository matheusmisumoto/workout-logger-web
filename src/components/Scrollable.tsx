import { ReactNode } from "react"

export default function Scrollable({ children }: { children: ReactNode}) {
    return (
        <main className="bg-black text-white flex-1 flex flex-col overflow-x-hidden">
            {children}
        </main>
    )
}