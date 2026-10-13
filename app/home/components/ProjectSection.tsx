import Link from 'next/link';
import { ProjectBrief } from '@/types/projectJsonTypes';
import ImageWithFallback from '../../components/ImageWithFallback';

// The first two cards share a row, the rest sit three per row.
function cardColumnSpan(index: number): string {
    if (index === 0)
        return "lg:col-span-7";
    if (index === 1)
        return "lg:col-span-5";
    return "lg:col-span-4";
}

export default function ProjectSection({projectBriefs} : {projectBriefs: ProjectBrief[]}){
    return <section id="projects" className="py-16 md:py-20 bg-canvas-alt/60 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-2">Featured Work</h2>
            <p className="text-sm text-ink-soft mb-10">Full-stack web and mobile applications, built and deployed from the ground up.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                {
                    projectBriefs.map((projectBrief, index) => {
                        const isLargeCard = index < 2;
                        return (
                            <Link key={projectBrief.jsonName} href={`/${projectBrief.jsonName}`} className={"group flex " + cardColumnSpan(index)}>
                                <article className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col w-full">
                                    <div className="overflow-hidden border-b border-line bg-panel">
                                        <ImageWithFallback
                                            src={projectBrief.imageLink}
                                            alt={projectBrief.title}
                                            className={"w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] " + (isLargeCard ? "h-64" : "h-48")}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1 gap-4">
                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-wider text-accent mb-2">{projectBrief.subTitle}</p>
                                            <h3 className="font-display text-xl font-semibold text-ink flex flex-wrap items-center gap-2">
                                                {projectBrief.title}
                                                {projectBrief.inDevelopment && (
                                                    <span className="font-mono text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">In Development</span>
                                                )}
                                            </h3>
                                        </div>
                                        <p className="text-sm leading-relaxed text-ink-soft">{projectBrief.description}</p>
                                        <div className="mt-auto flex flex-col gap-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {
                                                    projectBrief.techStack.slice(0, isLargeCard ? 6 : 4).map(tech =>
                                                        <span key={tech} className="px-2 py-0.5 rounded bg-chip font-mono text-xs text-ink-soft">{tech}</span>
                                                    )
                                                }
                                            </div>
                                            <span className="font-mono text-xs text-accent">View project →</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
}
