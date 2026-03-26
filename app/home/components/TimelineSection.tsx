import timeline from '@/public/timeline.json'

export default function TimelineSection(){
    return <section id="timeline" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center md:text-left">My Story in Lights</h2>
            <div className="flex flex-col mt-12 space-y-12">
                {/* 3 sections */}
                {
                    timeline.map(data => {
                        return (
                            <div key={data.date} className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex flex-col flex-2 text-center md:text-left">
                                    <p className="font-bold text-xl">{data.title}</p>
                                    <p className="font-light">{`${data.comapny} • ${data.location}`}</p>
                                    <p className="font-medium">{data.date}</p>
                                </div>
                                <div className="w-50 h-0.5 bg-emerald-600 md:w-0.5 md:h-100"></div>
                                <div className="flex-5 bg-white p-6 rounded-3xl shadow">
                                    {
                                        data.duties.map(duty => 
                                            <p key={duty} className="py-2">{"• " + duty}</p>
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