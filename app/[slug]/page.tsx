import TopNavigation from './components/TopNavigation';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import { ProjectContentJson } from '@/types/projectJsonTypes';
import { getProjectData, getAllProjectNames } from './slugConverter';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const projectJsonNames = await getAllProjectNames();
    return projectJsonNames.map(filename => {
        return {slug: filename};
    });
}

export default async function ProjectPage({params} : {params: Promise<{ slug: string }>}) {
    const { slug } = (await params);
    const pageContent: ProjectContentJson | null = await getProjectData(slug);
    if (!pageContent)
        notFound();

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <TopNavigation/>
            <HeroSection heroSectionJson={pageContent.heroSection}/>
            <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
                <MainContent mainContentJson={pageContent.mainContent}/>
                <SideBar techStackArray={pageContent.techStack}/>
            </div>
        </div>
    );
}