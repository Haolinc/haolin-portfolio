import { HeroSectionJson } from '../../../types/projectJsonTypes'
import ImageWithFallback from '../../components/ImageWithFallback'
function formatDate(isoDate: string): string {
    const [year, month, day] = isoDate.split('-').map(Number);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (!year || !month || !day || month < 1 || month > 12)
        return isoDate;
    return `${monthNames[month - 1]} ${day}, ${year}`;
}

export default function HeroSection({heroSectionJson, coverImagePath, inDevelopment, lastEdited, lastCommit}: {heroSectionJson: HeroSectionJson, coverImagePath: string, inDevelopment?: boolean, lastEdited?: string, lastCommit?: string}){
    return (
        <header className="pt-20 bg-linear-to-br from-slate-50 to-white border-b">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <h1 className="text-6xl font-bold tracking-tighter leading-none">{heroSectionJson.title}</h1>
                        {inDevelopment && (
                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 self-end mb-1">In Development</span>
                        )}
                    </div>
                    <p className="text-3xl text-emerald-600 mt-3">{heroSectionJson.subTitle}</p>
                    <p className="mt-6 max-w-md text-lg text-slate-600">
                        {heroSectionJson.description}
                    </p>
                    <div className="mt-8 flex gap-4">
                        {
                            heroSectionJson.liveWebsite ? 
                            <a href={heroSectionJson.liveWebsite} target="_blank"
                            className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-emerald-700">
                                See Live Website
                            </a> : <></>
                        }

                        {
                            heroSectionJson.githubWebsite ? 
                            <a href={heroSectionJson.githubWebsite} target="_blank"
                            className="border border-emerald-600 px-7 py-4 rounded-full flex items-center gap-2 font-medium">
                                Github Source Code
                            </a> : <></>
                        }
                    </div>
                    {
                        (lastEdited || lastCommit) &&
                        <div className="mt-6 text-sm text-slate-400">
                            {lastEdited && <p>Last page edit: {formatDate(lastEdited)}</p>}
                            {lastCommit && <p>Last github commit: {formatDate(lastCommit)}</p>}
                        </div>
                    }
                </div>
                <ImageWithFallback src={coverImagePath} className="rounded-3xl shadow-2xl order-first md:order-last" alt={heroSectionJson.title} />
            </div>
        </header>
    )
}