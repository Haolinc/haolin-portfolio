import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectSection(){
    return <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center md:text-left mb-4">Things I’ve built</h2>
            <p className="text-center md:text-left text-slate-500 mb-12">Hover them. They bite back with coolness.</p>

            <div className="grid md:grid-cols-2 gap-8">
                <Link href="/lilybloom">
                    <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                        <div className="relative">
                            <img src="https://picsum.photos/id/201/700/340" className="w-full" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-xl flex items-center gap-2">Lily Bloom Bakery Website</h3>
                            <p className="text-slate-600">Next.js 15 • Spring Boot • MongoDB • Full AWS + bulk import magic</p>
                        </div>
                    </motion.div>
                </Link>
                

                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                    <div className="relative h-52 bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl">📱</div>
                    <div className="p-6">
                        <h3 className="font-bold text-xl">Homecare Clocking + Android App</h3>
                        <p className="text-slate-600">Zero manual entry • React + Kotlin Compose</p>
                        <a href="https://haolinc.github.io/Homecare-Clocking-Dial-Uri-Generator/" className="text-emerald-600">Open Live Tool →</a>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                    <div className="relative h-52 bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl">🎮</div>
                    <div className="p-6">
                        <h3 className="font-bold text-xl">Epic Seven Automation Bot</h3>
                        <p className="text-slate-600">Python + OpenCV • Image recognition • GUI + .exe released</p>
                        <a href="https://github.com/Haolinc/Epic-Seven-Automation" className="text-emerald-600">⭐ Star + Download</a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
}