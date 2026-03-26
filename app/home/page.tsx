'use client';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
        <Header/>
        <HeroSection/>
        <ProjectSection/>
        <TimelineSection/>
        <Footer/>  
    </div>
  );
}