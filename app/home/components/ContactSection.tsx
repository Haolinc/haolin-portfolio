import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../siteLinks';

export default function ContactSection(){
    return <section id="contact" className="py-16 md:py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/15 blur-[90px] rounded-full pointer-events-none"></div>
                <div className="relative max-w-xl">
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-ink mb-2">Let&apos;s Connect</h2>
                    <p className="text-sm text-ink-soft">
                        Email me at <a href={`mailto:${EMAIL}`} className="font-mono text-accent hover:underline">{EMAIL}</a>, or find me on GitHub and LinkedIn.
                    </p>
                </div>
                <div className="relative flex flex-col sm:flex-row gap-4">
                    <a href={`mailto:${EMAIL}`} className="button-primary">
                        <FiMail size={18}/>
                        Email Me
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        <FaGithub size={18}/>
                        GitHub
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        <FaLinkedin size={18}/>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>
}
