import Link from 'next/link';
export default function TopNavigation(){
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                <Link href="/home" className="flex items-center gap-2 text-emerald-600 font-medium hover:underline">
                    ← Back to Home Page
                </Link>
            </div>
        </nav>
    )
}