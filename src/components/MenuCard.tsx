import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
}

export default function MenuCard({children}: MainProps){
    return(<nav className="mt-2 mb-6 bg-card/75 divide-y divide-white/25 rounded-2xl flex flex-col max-w-screen-md mx-auto">{children}</nav>)
}