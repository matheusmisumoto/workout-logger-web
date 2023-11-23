import { ReactNode } from "react"

type MainProps = {
    children: ReactNode;
}

export default function MainContent({ children }: MainProps) {
    return (
        <div className="p-6 flex-1">
            {children}
        </div>
    )
}