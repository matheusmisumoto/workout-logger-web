import { getUser } from "@/lib/auth";
import { ExerciseData, UserList, UserListAutorities } from "@/lib/interface";
import RemoveIcon from "./icons/RemoveIcon";
import { deleteExercise, deleteUser } from "@/lib/actions";
import dictionary from "@/dictionaries/pt-BR.json";

export function RemoveButton({action, id}: {action: () => Promise<void>, id: string}) {
    return <form action={action}><button><RemoveIcon className="h-6 w-auto fill-destructive/80" /></button></form>
}

export default function AdminListItem({member, exercise, token, loading}: {member?: UserList, exercise?: ExerciseData, token?: string, loading?: boolean}) {

    if(loading) return (
        <li className="animate-pulse py-3 flex items-center border-b border-white/50">
            <div className="flex-1">
                <div className="h-4 my-1 bg-white/20 rounded-full w-2/4"></div>
                <div className="h-3 my-2 bg-white/20 rounded-full w-1/4"></div>
                <div className="h-3 my-2 bg-white/20 rounded-full w-1/4"></div>
            </div>
        </li>
    )
    
    const getRole = (roles: UserListAutorities[]) => {
        if(roles[0].authority === 'ROLE_ADMIN') return 'Administrador';
        if(roles[0].authority === 'ROLE_MEMBER') return 'Usuário';
        return 'Demonstração'
    }

    let itemHeader: string = '';
    let itemDetails: {label: string, value: string}[] = [];

    if(member) {
        itemHeader = member.name;
        itemDetails = [
            {label: 'Username', value: member.login},
            {label: 'Nível', value: getRole(member.authorities)}
        ];
    }

    if(exercise) {
        itemHeader = exercise.name;
        itemDetails = [
            {label: 'Músculo', value: dictionary.muscles[exercise.target as keyof typeof dictionary.muscles]},
            {label: 'Equipamento', value: dictionary.equipment[exercise.equipment as keyof typeof dictionary.equipment]}
        ];
    }

    return (
        <li className="py-4 flex items-center border-b border-white/50">
            <div className="flex-1">
                <p className="font-bold">{itemHeader}</p>
                {
                    itemDetails.map((detail, index) => {
                        return <p key={index} className="text-[.75rem]"><strong>{detail.label}: </strong>{detail.value}</p>
                    })
                }
            </div>
            <div>
                {
                    (member && getUser(token!)?.sub !== member.id && member.authorities[0].authority !== 'ROLE_ADMIN') ?
                        <RemoveButton action={deleteUser.bind(null, member.id, token!)} id={member.id} />
                    :
                    (exercise) &&
                        <RemoveButton action={deleteExercise.bind(null, exercise.id!, token!)} id={exercise.id!} />
                }
            </div>
        </li>    
    )
}