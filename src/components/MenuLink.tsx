import Link from "next/link"
import FowardIcon from "./icons/ForwardIcon"
import link from "next/link"

export default function MenuLink(props: { link: string, title?: string, subtitle?: string, disabled?: boolean }){
    let target;
    let disabledStyle = props.disabled ? " opacity-50 pointer-events-none" : "";

    if(/(http(s?)):\/\//i.test(props.link)){
        target = "_blank";
    }

    return(
        <Link href={props.link!} target={target} className={`px-4 py-3 max-w-screen-md text-white/90 flex gap-2 justify-center items-center` + disabledStyle }>
            <div className="flex-1">
                {props.title}
                { props.subtitle ? <span className="block text-xs text-white/50">{props.subtitle}</span> : ''}
            </div>
            <div>
                <FowardIcon className="w-5 fill-white/25 float-right" />
            </div>        
        </Link>
    )
}