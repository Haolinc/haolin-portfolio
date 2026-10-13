export default function SideBar({techStackArray} : {techStackArray: string[]}){
    return (
        <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink mb-6">Full Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
                {techStackArray.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 font-mono text-xs text-accent">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}
