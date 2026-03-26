'use client';
import { motion } from 'framer-motion';

export default function HeroSection(){
    return <section className="hero-bg pt-5 md:pt-0 md:min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl font-bold leading-none tracking-tighter"
                >
                    Hao Lin Chen
                </motion.h1>
                
                <p className="text-4xl text-emerald-600 mt-3 font-medium">Full-Stack & Test Engineer</p>
                
                <p className="mt-6 text-lg text-slate-600 max-w-lg">
                    Building reliable software, one test at a time.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#projects" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:bg-emerald-700">
                        Explore My Work
                    </a>
                    <a href="#timeline" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl border-emerald-600 border-2 hover:bg-white">
                        View My Journey
                    </a>
                    
                </div>
            </div>

            {/* Profile */}
            <div className="md:col-span-5 relative flex md:justify-center mb-5">
                <motion.div className="relative">
                    <img src="selfie.png" className="rounded-3xl shadow-2xl border-8 border-white" alt="selfie" />
                </motion.div>
            </div>
        </div>
    </section>
}