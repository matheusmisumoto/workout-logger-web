import Link from "next/link";
import { text } from "stream/consumers";

export default function Button(props: { link?:string, title: string, destructive?: boolean }) {
    
    let style; 
    props.destructive == true ? style = "text-destructive font-bold" : style = "text-white/90"
    
    return(<Link href={props.link!} className={`rounded-xl bg-white/10 ${style} text-center py-3 my-4 block w-full max-w-screen-md mx-auto`}>{props.title}</Link>)
}