import { EMAIL, GITHUB_URL, LINKEDIN_URL } from './siteLinks';

export default function Footer(){
    return <footer className="bg-canvas-alt border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-ink-muted">© 2026 Hao Lin Chen</p>
            <div className="flex items-center gap-6 font-mono text-xs">
                <a href={`mailto:${EMAIL}`} className="text-ink-soft hover:text-accent transition-colors">Email</a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-accent transition-colors">GitHub</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-accent transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
}
