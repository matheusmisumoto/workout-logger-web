import Link from "next/link"
import FowardIcon from "./icons/ForwardIcon"
import link from "next/link"

export default function MenuLink(props: { link: string, title?: string }){
    let target;

    if(/(http(s?)):\/\//i.test(props.link)){
        target = "_blank";
    }

    return(
        <Link href={props.link!} target={target} className="px-4 py-3 max-w-screen-md text-white/90">
            {props.title}
            <FowardIcon className="w-5 fill-white/25 float-right" />
        </Link>
    )
}