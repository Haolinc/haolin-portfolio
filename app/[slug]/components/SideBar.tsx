export default function SideBar({techStackArray} : {techStackArray: string[]}){
    return (
        <div className="md:col-span-5">
            <div className="top-24 space-y-10">
                <div>
                    <h3 className="text-3xl font-bold mb-6 underline underline-offset-8 decoration-emerald-600">Full Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStackArray.map((tech) => (
                            <span key={tech} className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}