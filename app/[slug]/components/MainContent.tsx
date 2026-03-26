import { MainContentJson } from "../jsonTypes";

export default function MainContent({ mainContentJson }: { mainContentJson: MainContentJson}){
    return (
        <div className="md:col-span-7 space-y-16">

            {/* Overview */}
            <section>
                <h2 className="text-3xl font-bold mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed">{mainContentJson.overview}</p>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
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
        </div>
    )
}