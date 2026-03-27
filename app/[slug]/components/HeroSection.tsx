import { HeroSectionJson } from '../../../types/projectJsonTypes'
export default function HeroSection({heroSectionJson, coverImagePath}: {heroSectionJson: HeroSectionJson, coverImagePath: string}){
    return (
        <header className="pt-20 bg-linear-to-br from-slate-50 to-white border-b">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-6xl font-bold tracking-tighter mt-6 leading-none">{heroSectionJson.title}</h1>
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
                </div>
                <img src={coverImagePath} className="rounded-3xl shadow-2xl order-first md:order-last" alt="Lily Bloom Bakery" />
            </div>
        </header>
    )
}