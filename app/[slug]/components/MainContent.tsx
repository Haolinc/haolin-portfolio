import { MainContentJson } from "@/types/projectJsonTypes";

export default function MainContent({ mainContentJson }: { mainContentJson: MainContentJson}){
    return (
        <div className="md:col-span-7 space-y-16">
            {/* Overview */}
            <section>
                <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-emerald-600">Overview</h2>
                <p className="text-slate-600 leading-relaxed">{mainContentJson.overview}</p>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold mb-6 underline underline-offset-8 decoration-emerald-600">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {
                        mainContentJson.keyFeature.map(section => {
                            return (
                                <div className="bg-white border border-slate-200 rounded-3xl p-6" key={section.header}>
                                    <h4 className="font-semibold">{section.header}</h4>
                                    <p className="text-slate-600 mt-1">{section.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* walkthrough */}
            <section className="pt-8">
                {/* Header */}
                <div className="flex items-baseline justify-between mb-8">
                    <h2 className="text-3xl font-bold mb-4 underline underline-offset-8 decoration-emerald-600">Project Walkthrough</h2>
                </div>

                {/* Walkthrough sections */}
                <div className="space-y-20">
                    {
                        mainContentJson.walkthrough.map((section, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={section.header} className="grid lg:grid-cols-12 gap-10 items-start">
                                    {/* Image */}
                                    <div className={"lg:col-span-7 order-1" + (isEven ? " lg:order-2" : " lg:order-1")}>
                                        <div className="relative group rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                                            <img 
                                                src={section.imagePath} 
                                                alt={section.header}
                                                className="w-full h-auto object-fill transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={"lg:col-span-5 pt-4 order-2 " + (isEven ? "lg:order-1" : "lg:order-2")}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-5xl font-bold text-slate-400 leading-none">{('0' + (index + 1)).slice(-2)}</div>
                                            <div>
                                                <h3 className="text-2xl font-semibold tracking-tight">{section.header}</h3>
                                                <p className="text-emerald-600 text-sm font-medium">{section.subheader}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">{section.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {
                                                section.keyTerms.map(term =>
                                                    <span key={term} className="inline-flex items-center px-4 py-2 bg-slate-200 rounded-2xl text-sm font-medium">{term}</span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}