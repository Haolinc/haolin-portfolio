import ImageWithFallback from '../../components/ImageWithFallback';

export default function HeroSection(){
    return <section id="top" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 grid-backdrop pointer-events-none"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-180 h-85 bg-accent/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-48 right-10 w-95 h-65 bg-teal/10 blur-[110px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 flex flex-col gap-5">
                <span className="w-fit px-3 py-1 rounded-full bg-chip font-mono text-xs text-accent">Full-Stack & Test Engineer</span>
                <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-ink">Hao Lin Chen</h1>
                <p className="font-display text-2xl md:text-3xl font-semibold text-accent">Building reliable software, one at a time.</p>

                <div className="mt-4 flex flex-wrap gap-4">
                    <a href="#projects" className="button-primary">
                        Explore My Work
                    </a>
                    <a href="#timeline" className="button-secondary">
                        View My Journey
                    </a>
                </div>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
                <div className="glass-card rounded-2xl p-2 max-w-sm">
                    <ImageWithFallback src="selfie.png" className="rounded-xl" alt="Hao Lin Chen" />
                </div>
            </div>
        </div>
    </section>
}
