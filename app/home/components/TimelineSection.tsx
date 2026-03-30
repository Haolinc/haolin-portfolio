import timeline from '@/public/timeline.json'

export default function TimelineSection(){
    return <section id="timeline" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center md:text-left mb-4">Experience</h2>
            <p className="text-center md:text-left text-slate-500 mb-12">Professional history and freelance engagements.</p>
            <div className="flex flex-col mt-12">
                {/* 3 sections */}
                {
                    timeline.map(data => {
                        return (
                            <div key={data.date} className="flex flex-col md:flex-row gap-6 items-stretch">
                                <div className="flex flex-col flex-2 text-center md:text-left md:mb-12 pt-5">
                                    <p className="font-bold text-xl">{data.title}</p>
                                    <p className="font-light">{`${data.comapny} • ${data.location}`}</p>
                                    <p className="font-medium">{data.date}</p>
                                </div>
                                <LineWithDot />
                                <div className="flex-5 bg-white p-6 rounded-3xl shadow mb-12">
                                    <ul className="list-disc list-inside">
                                        {
                                            data.duties.map(duty => 
                                                <li key={duty} className="pb-4">{duty}</li>
                                            )
                                        }
                                    </ul>
                                    {
                                        data.skillSet.map(skill =>
                                            <span key={skill} className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mt-4">{skill}</span>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </section>
}

function LineWithDot(){
    return (
        <div className="md:flex flex-col items-center shrink-0 hidden">
            <div className="w-0.5 flex-1 bg-emerald-600"></div>
            <div className="w-4 h-4 rounded-full border-emerald-600 border-2 shrink-0"></div>
            <div className="w-0.5 flex-10 bg-emerald-600"></div>
        </div>
    )
}