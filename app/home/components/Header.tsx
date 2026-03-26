'use client';
import { motion } from 'framer-motion';
import { redirect } from 'next/navigation';

export default function Header(){
    return (
        <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-lg border-b z-50 transform translate-z-0">
            <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tighter cursor-pointer" onClick={() => redirect('home')}>H<span className="text-emerald-600">L</span></h1>
                </div>
                <div className="flex gap-7 text-sm font-medium items-center">
                    <a href="#projects" className="hover:text-emerald-600">Work</a>
                    <a href="#timeline" className="hover:text-emerald-600">Journey</a>
                    {/* <motion.button 
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open('#', '_blank')} 
                        className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2">
                        ↓ Resume PDF
                    </motion.button> */}
                    {/* <a href="mailto:haolin5175@gmail.com" className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold">Contact</a> */}
                </div>
            </div>
        </nav>
    )
}