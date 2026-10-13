import Link from 'next/link';
export default function TopNavigation(){
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur-xl border-b border-line">
            <div className="h-16 max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link href="/home" className="flex items-center gap-2 font-mono text-sm text-accent hover:underline">
                    ← Back to Home Page
                </Link>
            </div>
        </nav>
    )
}
