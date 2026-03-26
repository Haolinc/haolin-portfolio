import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
export default function TopNavigation(){
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-emerald-600 font-medium hover:underline">
                ← Back to Home Page
            </Link>
            <div className="flex gap-6 text-sm font-medium">
                <a href="https://lilybloom-showcase.com" target="_blank" className="flex items-center gap-1">
                Visit Live Site <ExternalLink className="w-4 h-4" />
                </a>
            </div>
            </div>
        </nav>
    )
}