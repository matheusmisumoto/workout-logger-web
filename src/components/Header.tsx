import Link from "next/link";
import { Logo } from "./Logo";
import BackIcon from "./icons/BackIcon";

export default function Header(props: { navigationURL?: string, navigationTitle?: string }) {
    return (
        <header className="px-1 h-12 bg-primary text-white">
            <div className="flex justify-between max-w-screen-md mx-auto gap-8">
                <div className="flex flex-1 flex-col justify-center h-12">
                { props.navigationURL ?
                    <div>
                        <Link href={props.navigationURL} className="pr-4 py-4">
                            <BackIcon className="h-5 w-auto my-0 mr-1 fill-white/80 inline align-text-top" />
                            {props.navigationTitle}
                        </Link>
                    </div>
                : ''  }
                </div>
                <div className="flex flex-1 flex-col justify-center items-center h-12">
                <Link href="/dashboard" className="p-4">
                    <Logo className="w-auto h-4 fill-[white]" />
                </Link>
                </div>
                <div className="flex flex-1 flex-col justify-center h-12">

                </div>
            </div>
        </header>
    )
}