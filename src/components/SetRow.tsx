import { Key } from "react";
import RemoveIcon from "./icons/RemoveIcon";

export default function SetRow (props: { order: number, type: string, weight: number, reps: number, action: (e: React.MouseEvent<HTMLElement>) => void }) {
    let setType = ['STANDARD', 'DROP', 'NEGATIVE', 'REST_PAUSE'];
    let weight;
    let reps;
    
    props.weight > 0 ? weight = props.weight : ''
    props.reps > 0 ? reps = props.reps : ''

    return (
        <tr>
            <td className="mr-1 pb-2"><span className="rounded-full bg-primary/75 py-1 px-2 text-[.75rem]">{props.order+1}</span></td>
            <td className="w-3/12 pb-2">
                <select className="text-sm bg-black py-1 px-2 w-29 inline-block rounded-none" defaultValue={props.type}>
                    {
                        setType.map((type, index) => {
                            let typeFormat = (type.charAt(0) + type.slice(1).toLowerCase()).replace('_p', '-P');
                            return <option key={index} value={type}>{typeFormat}</option>
                        })
                    }
                </select>
            </td>
            <td className="w-4/12 text-right pb-2 text-white/50"><input type="number" name="test" inputMode="decimal" className="text-sm text-right bg-white/10 text-white mr-2 py-1 px-2 w-12 inline align-middle" defaultValue={weight} />kg</td>
            <td className="w-1/12 text-center pb-2 text-white/50">X</td>
            <td className="w-4/12 text-center pb-2 text-white/50"><input type="number" inputMode="numeric" className="text-sm bg-white/10 text-white mr-2 py-1 px-2 w-8 align-middle" defaultValue={reps} />reps</td>
            <td className="w-1/12 text-center pb-2 pl-2"><RemoveIcon className="h-4 w-auto fill-destructive/80" onClick={props.action} /></td>
        </tr>
    )
}