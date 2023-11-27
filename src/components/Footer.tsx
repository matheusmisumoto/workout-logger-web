import Link from "next/link";
import HistoryIcon from "./icons/HistoryIcon";
import ProfileIcon from "./icons/ProfileIcon";
import WorkoutIcon from "./icons/WorkoutIcon";
import HomeIcon from "./icons/HomeIcon";

export default function Footer() {
    return (
            <footer className="pb-10 bg-mobile-nav">
                <nav className="flex justify-around pt-2 gap-8 text-white/50 text-[.675rem] text-center max-w-screen-md mx-auto">
                    <div className="flex-1">
                        <Link href="/dashboard">
                            <HomeIcon className="w-7 fill-white/50 block mx-auto" />
                            Início
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="/history">
                            <HistoryIcon className="w-7 fill-white/50 block mx-auto" />
                            Histórico
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="/workout/new">
                            <WorkoutIcon className="w-7 fill-white/50 block mx-auto" />
                            Treino
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="/settings">
                            <ProfileIcon className="w-7 fill-white/50 block mx-auto" />
                            Perfil
                        </Link>
                    </div>
                </nav>
            </footer>
    )
}