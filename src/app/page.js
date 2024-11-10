import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import PublicationSection from "./components/PublicationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950">
      <Navbar/>
      <div className="container mt-16 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <PublicationSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
