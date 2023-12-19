'use client'

import ErrorMessage from "@/components/Error";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import RemoveIcon from "@/components/icons/RemoveIcon";
import { apiWithAuth } from "@/lib/api";
import { getToken, getUser } from "@/lib/auth";
import { UserList, UserListAutorities } from "@/lib/interface";
import { useEffect, useState } from "react";

export default function UserManagement() {

    const [userList, setUserList] = useState<UserList[]>([]);
    const [checkPermission, setCheckPermission] = useState<boolean>(false);

    const getUserList = () => {
        apiWithAuth(getToken()).get('/users').then(response => {
            setUserList(response.data);
        });
    }

    const removeUser = (id: string) => {
        if(getUser()?.sub !== id) {
            apiWithAuth(getToken()).delete(`/users/${id}`).then(response => {
                getUserList();
            });
        }
    }

    const getRole = (roles: UserListAutorities[]) => {
        if(roles[0].authority === 'ROLE_ADMIN') return 'Administrador';
        if(roles[0].authority === 'ROLE_MEMBER') return 'Usuário';
        return 'Demonstração'
    }

    useEffect(() => {
        if (getUser()?.roles == 'ROLE_ADMIN') {
            setCheckPermission(true)
            getUserList();
        }
    }, [])

    return (
        <div className="h-full flex flex-col">
            <Header navigationTitle="Perfil" />
            <Main>
                <MainContent>
                    {
                        checkPermission ?
                            <>
                                <h2 className="my-4 text-3xl font-bold max-w-screen-md mx-auto">Lista de Membros</h2>
                                <ul className="mt-6 max-w-screen-md mx-auto">
                                    {
                                        userList.map((member, index) => {
                                            return (
                                                <li key={index} className="py-4 flex items-center border-b border-white/50">
                                                    <div className="flex-1">
                                                        <p className="font-bold">{member.name}</p>
                                                        <p className="text-[.75rem]"><strong>Username: </strong>{member.login}</p>
                                                        <p className="text-[.75rem]"><strong>Nível: </strong>{getRole(member.authorities)}</p>
                                                    </div>
                                                    <div>
                                                        {
                                                            (getUser()?.sub !== member.id && member.authorities[0].authority !== 'ROLE_ADMIN') ?
                                                                <RemoveIcon className="h-6 w-auto fill-destructive/80" onClick={() => removeUser(member.id)} />
                                                            :
                                                                <></>
                                                        }
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        :
                            <ErrorMessage message="Você não tem permissão para acessar essa página." />
                    }
                </MainContent>
            </Main>
            <Footer />
        </div>
    );
}