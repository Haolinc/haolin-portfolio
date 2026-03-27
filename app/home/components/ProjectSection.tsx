'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectBrief } from '@/types/projectJsonTypes';

export default function ProjectSection({projectBriefs} : {projectBriefs: ProjectBrief[]}){
    return <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center md:text-left mb-4">Things I’ve built</h2>
            <p className="text-center md:text-left text-slate-500 mb-12">Hover them. They bite back with coolness.</p>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    projectBriefs.map(projectBrief => {
                        return (
                            <Link key={projectBrief.jsonName} href={`/${projectBrief.jsonName}`}>
                                <motion.div whileHover={{ scale: 1.03 }} className="card-hover bg-white border border-slate-200 rounded-3xl overflow-hidden group">
                                    <div className="relative">
                                        <img 
                                            src={projectBrief.imageLink} 
                                            alt="coverImage"
                                            className="h-80 w-full"
                                            // style={{objectFit: "contain", maxHeight: 400, }} 
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl flex items-center gap-2">{projectBrief.title}</h3>
                                        <p className="text-slate-600">{projectBrief.description}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
}