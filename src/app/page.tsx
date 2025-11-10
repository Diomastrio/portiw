import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import MediaGallery from "@/components/media-gallery";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <MediaGallery />
      <Contact />
    </main>
  );
}
