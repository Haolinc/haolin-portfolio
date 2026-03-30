'use client';

export default function Header(){
    return (
        <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-lg border-b z-50 transform translate-z-0">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-end">
                <div className="flex gap-7 text-sm font-medium items-center">
                    <a href="#projects" className="hover:text-emerald-600">Featured Work</a>
                    <a href="#timeline" className="hover:text-emerald-600">Experience</a>
                </div>
            </div>
        </nav>
    )
}