import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    if(!cookies().has('token')) redirect('/');

    return (
        <div className="h-full flex flex-col">
            {children}
        </div>
    );
}