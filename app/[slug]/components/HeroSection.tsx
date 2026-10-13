import { HeroSectionJson } from '../../../types/projectJsonTypes'
import ImageWithFallback from '../../components/ImageWithFallback'
import ProjectDates from './ProjectDates'

export default function HeroSection({heroSectionJson, coverImagePath, slug, inDevelopment, lastEdited, lastCommit}: {heroSectionJson: HeroSectionJson, coverImagePath: string, slug: string, inDevelopment?: boolean, lastEdited?: string, lastCommit?: string}){
    return (
        <header className="relative overflow-hidden pt-16 border-b border-line">
            <div className="absolute inset-0 grid-backdrop pointer-events-none"></div>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-180 h-85 bg-accent/10 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent mb-3">{heroSectionJson.subTitle}</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink">{heroSectionJson.title}</h1>
                        {inDevelopment && (
                            <span className="font-mono text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">In Development</span>
                        )}
                    </div>
                    <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                        {heroSectionJson.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        {
                            heroSectionJson.liveWebsite ?
                            <a href={heroSectionJson.liveWebsite} target="_blank" rel="noopener noreferrer"
                            className="button-primary">
                                See Live Website
                            </a> : <></>
                        }

                        {
                            heroSectionJson.githubWebsite ?
                            <a href={heroSectionJson.githubWebsite} target="_blank" rel="noopener noreferrer"
                            className="button-secondary">
                                Github Source Code
                            </a> : <></>
                        }
                    </div>
                    <ProjectDates slug={slug} githubWebsite={heroSectionJson.githubWebsite} lastEdited={lastEdited} lastCommit={lastCommit}/>
                </div>
                <div className="glass-card rounded-2xl p-2 order-first md:order-last">
                    <ImageWithFallback src={coverImagePath} className="rounded-xl w-full" alt={heroSectionJson.title} />
                </div>
            </div>
        </header>
    )
}
