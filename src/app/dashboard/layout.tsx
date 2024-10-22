import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
    if(!(await cookies()).has('token')) redirect('/');

    return (
        <div className="h-full flex flex-col">
            {children}
        </div>
    );
}