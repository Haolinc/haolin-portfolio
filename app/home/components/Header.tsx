import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GITHUB_URL, LINKEDIN_URL } from '../../siteLinks';

const navLinkClass = "px-3 py-1.5 rounded-lg text-sm text-ink-soft hover:bg-chip hover:text-ink transition-colors";
const iconLinkClass = "p-2 rounded-lg text-ink-soft hover:bg-chip hover:text-ink transition-colors";

export default function Header(){
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur-xl border-b border-line">
            <div className="h-16 max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-lg bg-chip flex items-center justify-center font-mono text-xs font-bold text-accent">HC</span>
                    <span className="font-display font-semibold text-ink tracking-tight hidden sm:inline">Hao Lin Chen</span>
                </a>
                <div className="flex items-center gap-1">
                    <a href="#projects" className={navLinkClass}>Featured Work</a>
                    <a href="#timeline" className={navLinkClass}>Experience</a>
                    <a href="#contact" className={navLinkClass + " hidden sm:inline"}>Contact</a>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLinkClass + " hidden md:inline-flex ml-2"}>
                        <FaGithub size={18}/>
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLinkClass + " hidden md:inline-flex"}>
                        <FaLinkedin size={18}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}
