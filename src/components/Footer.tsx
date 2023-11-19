import Link from "next/link";
import HistoryIcon from "./icons/HistoryIcon";
import ProfileIcon from "./icons/ProfileIcon";
import WorkoutIcon from "./icons/WorkoutIcon";

export default function Footer() {
    return (
            <footer className="pt-2 pb-8 bg-mobile-nav">
                <nav className="flex justify-around gap-8 text-white/50 text-[.675rem] text-center max-w-screen-lg mx-auto">
                    <div>
                        <Link href="/history">
                            <HistoryIcon className="w-7 mb-1 fill-white/50 block mx-auto" />
                            Histórico
                        </Link>
                    </div>
                    <div>
                        <WorkoutIcon className="w-7 mb-1 fill-white/50 block mx-auto" />
                        Treino
                    </div>
                    <div>
                        <Link href="/login">
                            <ProfileIcon className="w-7 mb-1 fill-white/50 block mx-auto" />
                            Perfil
                        </Link>
                    </div>
                </nav>
            </footer>
    )
}