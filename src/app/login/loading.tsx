import Image from 'next/image'
import { Logo } from "@/components/icons/Logo"
import bgLogo from '@/../public/bgLogin.webp'

export default function Loading() {
    return (
        <main className="flex flex-col items-center justify-center min-h-full relative bg-brand gap-y-12 px-6 py-12 overflow-hidden login">
            <Image src={bgLogo} alt="Workout Logger" fill className="object-cover absolute top-0 left-0 object-center opacity-20" />
            <div className="flex-1 flex flex-col items-center justify-end z-10">
                <Logo fill="white" className="w-2/3 h-auto" />
            </div>
            <div className="w-full flex flex-col flex-1 items-center py-9">
                <p className="text-white font-bold animate-pulse text">Iniciando API...</p>
            </div>
        </main>
    )
  }