'use client'

import Link from "next/link";
import { Logo } from "./icons/Logo";
import BackIcon from "./icons/BackIcon";
import { useRouter } from "next/navigation";

export default function Header(props: { navigationTitle?: string, actionTitle?: string, action?: (e: React.MouseEvent<HTMLElement>) => void }) {

    const routerNav = useRouter();
    
    return (
        <header className="px-1 h-12 bg-brand text-white">
            <div className="flex justify-between max-w-screen-md mx-auto gap-8">
                <div className="flex flex-1 flex-col justify-center h-12">
                { props.navigationTitle ?
                    <div>
                        <Link href="#" className="pr-4 py-4" onClick={() => routerNav.back()}>
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
                <div className="flex flex-1 flex-col justify-center h-12 text-right">
                { props.actionTitle ?
                    <div>
                        <Link href="#" onClick={props.action} className="pr-4 py-4">
                            {props.actionTitle}
                        </Link>
                    </div>
                : ''  }
                </div>
            </div>
        </header>
    )
}