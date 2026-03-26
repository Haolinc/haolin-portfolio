import Header from './components/Header'
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import { getProjects } from './fileHelper';

export default async function Portfolio() {
    const projectBreifs = await getProjects();
    projectBreifs.sort((a, b) => b.lastUpdate.localeCompare(a.lastUpdate));
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header/>
            <HeroSection/>
            <ProjectSection projectBriefs={projectBreifs}/>
            <TimelineSection/>
            <Footer/>  
        </div>
    );
}