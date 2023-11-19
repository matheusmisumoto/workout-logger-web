import Link from "next/link";
import { Logo } from "./Logo";
import BackIcon from "./icons/BackIcon";

export default function Header(props: { navigationURL?: string, navigationTitle?: string }) {
    return (
        <header className="px-1 py-3 h-12 bg-primary text-white">
            <div className="flex justify-evenly max-w-screen-lg mx-auto">
                <div className="flex-1">
                { props.navigationURL ?
                    <Link href={props.navigationURL} className="leading-5">
                        <BackIcon className="h-5 w-auto my-0 mr-1 fill-white/80 inline align-text-top" />
                        {props.navigationTitle}
                    </Link>
                : ''  }
                </div>
                <Link href="/dashboard" className="h-4">
                    <Logo className="w-auto h-4 fill-[white] leading-4 my-1" />
                </Link>
                <div className="flex-1">

                </div>
            </div>
        </header>
    )
}