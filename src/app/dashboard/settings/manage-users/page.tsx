import Header from "@/components/Header";
import Scrollable from "@/components/Scrollable";
import Main from "@/components/Main";
import AdminListItem from "@/components/AdminListItem";
import { apiWithAuth } from "@/lib/api";
import { getUser } from "@/lib/auth";
import { UserList, UserListAutorities } from "@/lib/interface";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export default async function UserManagement() {
    const token: string = cookies().get('token')?.value!;
    if(getUser(token).roles !== 'ROLE_ADMIN') redirect('/');

    const fetchUserList = await apiWithAuth(token).get('/users');
    const userList: UserList[] = fetchUserList.data;
    
    return (
        <>
            <Header navigationTitle="Perfil" />
            <Scrollable>
                <Main>
                    <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Lista de Membros</h2>
                    <Suspense fallback={<Loading />}>
                        <ul className="mt-6 max-w-screen-md mx-auto">
                            {
                                userList.map((member, index) => {
                                    return (
                                        <AdminListItem key={index} member={member} token={token} />
                                    )
                                })
                            }
                        </ul>
                    </Suspense>
                </Main>
            </Scrollable>
            <Footer />
        </>
    );
}