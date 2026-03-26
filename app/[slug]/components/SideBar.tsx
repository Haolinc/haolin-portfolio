export default function SideBar({techStackArray} : {techStackArray: string[]}){
    return (
        <div className="md:col-span-5">
            <div className="sticky top-24 space-y-10">
                <div>
                    <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStackArray.map((tech) => (
                            <span key={tech} className="bg-slate-100 hover:bg-emerald-100 transition px-5 py-2 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}