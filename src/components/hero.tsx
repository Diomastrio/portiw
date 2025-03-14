import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">M.A.C.E.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl">
            I build modern, responsive web applications with a focus on user
            experience and clean code. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link
          href="#about"
          className="inline-block animate-bounce"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
