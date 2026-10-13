import { MainContentJson } from "@/types/projectJsonTypes";
import ImageWithFallback from "../../components/ImageWithFallback";

const sectionHeadingClass = "font-display text-2xl font-semibold tracking-tight text-ink mb-6";

export default function MainContent({ mainContentJson }: { mainContentJson: MainContentJson}){
    return (
        <div className="md:col-span-7 space-y-16">
            {/* Overview */}
            <section>
                <h2 className={sectionHeadingClass}>Overview</h2>
                <p className="leading-relaxed text-ink-soft">{mainContentJson.overview}</p>
            </section>

            {/* Features */}
            <section>
                <h2 className={sectionHeadingClass}>Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {
                        mainContentJson.keyFeature.map(section => {
                            return (
                                <div className="glass-card rounded-2xl p-6" key={section.header}>
                                    <h4 className="font-display font-semibold text-ink">{section.header}</h4>
                                    <p className="text-sm leading-relaxed text-ink-soft mt-2">{section.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* walkthrough */}
            <section className="pt-8">
                <h2 className={sectionHeadingClass}>Project Walkthrough</h2>

                {/* Walkthrough sections */}
                <div className="divide-y divide-line">
                    {
                        mainContentJson.walkthrough.map((section, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={section.header} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start py-12 lg:py-16 first:pt-0 last:pb-0">
                                    {/* Image */}
                                    <div className={"lg:col-span-7 order-1" + (isEven ? " lg:order-2" : " lg:order-1")}>
                                        <div className="group glass-card rounded-2xl overflow-hidden">
                                            <ImageWithFallback
                                                src={section.imagePath}
                                                alt={section.header}
                                                className="w-full h-auto object-fill transition-transform duration-700 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={"lg:col-span-5 pt-4 order-2 " + (isEven ? "lg:order-1" : "lg:order-2")}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="font-mono text-4xl font-bold text-ink-muted/60 leading-none">{('0' + (index + 1)).slice(-2)}</div>
                                            <div>
                                                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{section.header}</h3>
                                                <p className="text-accent text-sm font-medium">{section.subheader}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed text-ink-soft">{section.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {
                                                section.keyTerms.map(term =>
                                                    <span key={term} className="tech-chip">{term}</span>
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
