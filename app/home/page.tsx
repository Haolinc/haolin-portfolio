import Header from './components/Header'
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import { getProjects } from './fileHelper';

export default async function Portfolio() {
    const projectBreifs = await getProjects();
    return (
        <div className="min-h-screen">
            <Header/>
            <HeroSection/>
            <ProjectSection projectBriefs={projectBreifs}/>
            <TimelineSection/>
            <ContactSection/>
        </div>
    );
}
