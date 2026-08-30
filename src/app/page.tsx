import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Work / Projects Grid */}
        <Work />

        {/* 4. Process Workflow */}
        <Process />

        {/* 5. About & Experience */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
