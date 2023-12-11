import Link from "next/link";

export default function Button(props: { link?:string, title: string, destructive?: boolean, primary?: boolean, action?: (e: React.MouseEvent<HTMLElement>) => void }) {
    
    let style; 
    if(props.destructive == true){
        style = "bg-white/5 text-destructive"
    } else if (props.primary == true){
        style = "bg-primary text-white/90 font-bold"
    } else {
        style = "bg-secondary text-white/90 text-white/90"
    }
    
    return(<Link href={props.link!} className={`rounded-xl ${style} text-md text-center py-3 my-4 block w-full max-w-screen-md mx-auto`} onClick={props.action}>{props.title}</Link>)
}