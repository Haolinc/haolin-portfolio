import { FiCheckCircle } from 'react-icons/fi';
import timeline from '@/public/timeline.json'

export default function TimelineSection(){
    return <section id="timeline" className="py-16 md:py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-2">Experience</h2>
            <p className="text-sm text-ink-soft mb-10">Professional history and independent works.</p>
            <div className="relative flex flex-col gap-10 pl-8 sm:pl-10">
                {/* spine */}
                <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 bg-line"></div>
                {
                    timeline.map(data => {
                        return (
                            <div key={data.date} className="relative">
                                <div className="absolute -left-8 sm:-left-10 top-6 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                </div>
                                <div className="glass-card rounded-2xl p-6 flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <div>
                                            <h3 className="font-display text-xl font-semibold text-ink">{data.title}</h3>
                                            <p className="text-sm font-medium text-accent">{`${data.comapny} • ${data.location}`}</p>
                                        </div>
                                        <span className="w-fit px-3 py-1 rounded-full bg-chip font-mono text-xs text-ink-soft">{data.date}</span>
                                    </div>
                                    <ul className="flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                                        {
                                            data.duties.map(duty =>
                                                <li key={duty} className="flex items-start gap-3">
                                                    <FiCheckCircle className="text-accent shrink-0 mt-1" size={16}/>
                                                    <span>{duty}</span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div className="flex flex-wrap gap-1.5">
                                        {
                                            data.skillSet.map(skill =>
                                                <span key={skill} className="tech-chip">{skill}</span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </section>
}
