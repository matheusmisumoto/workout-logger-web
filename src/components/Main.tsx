import { ReactNode } from "react"

export default function Main({ children }: { children: ReactNode }) {
    return (
        <div className="p-6 flex-1">
            {children}
        </div>
    )
}