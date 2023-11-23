import Link from "next/link";
import HistoryIcon from "./icons/HistoryIcon";
import ProfileIcon from "./icons/ProfileIcon";
import WorkoutIcon from "./icons/WorkoutIcon";

export default function FooterTracking(exercise?: any) {
    return (
            <footer className="pb-10 bg-mobile-nav">
                <nav className="flex justify-around pt-2 gap-8 text-white/50 text-[.675rem] text-center max-w-screen-md mx-auto">
                    <div className="flex-1">
                        <Link href="#">
                            <HistoryIcon className="w-7 fill-white/50 block mx-auto" />
                            Estatísticas anteriores
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="#">
                            <WorkoutIcon className="w-7 fill-white/50 block mx-auto" />
                            Adicionar exercício
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="/settings">
                            <ProfileIcon className="w-7 fill-white/50 block mx-auto" />
                            1RM
                        </Link>
                    </div>
                </nav>
            </footer>
    )
}