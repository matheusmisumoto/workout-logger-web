export default function Box({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-2 mt-6 text-center max-w-screen-md mx-auto">
            {children}
        </div>
    )
}