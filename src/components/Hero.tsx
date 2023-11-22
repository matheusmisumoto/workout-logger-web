import { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
}

export default function Hero({ children }: MainProps){
    return (
        <section className="p-6 bg-secondary">
            {children}
        </section>
    )
}