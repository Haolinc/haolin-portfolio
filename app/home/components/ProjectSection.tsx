import { motion } from 'framer-motion';

export default function ProjectSection(){
    return <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center md:text-left mb-4">Things I’ve built</h2>
            <p className="text-center md:text-left text-slate-500 mb-12">Hover them. They bite back with coolness.</p>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                    <div className="relative">
                        <img src="https://picsum.photos/id/201/700/340" className="w-full" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                            <a href="https://lilybloom-showcase.com" target="_blank" className="text-white font-bold">→ Visit the actual bakery site</a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-xl flex items-center gap-2">Lily Bloom Bakery SaaS <span className="text-xs bg-emerald-600 text-white px-3 py-0.5 rounded">LIVE + MULTILINGUAL</span></h3>
                        <p className="text-slate-600">Next.js 15 • Spring Boot • MongoDB • Full AWS + bulk import magic</p>
                    </div>
                </motion.div>

                {/* Other cards similar but shorter */}
                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                    <div className="relative h-52 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl">📱</div>
                    <div className="p-6">
                        <h3 className="font-bold text-xl">Homecare Clocking + Android App</h3>
                        <p className="text-slate-600">Zero manual entry • React + Kotlin Compose</p>
                        <a href="https://haolinc.github.io/Homecare-Clocking-Dial-Uri-Generator/" className="text-emerald-600">Open Live Tool →</a>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                    <div className="relative h-52 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl">🎮</div>
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