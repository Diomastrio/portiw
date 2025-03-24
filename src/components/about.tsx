import Image from "next/image";
import { Button } from "@/components/ui/button";
import PassionateDeveloper from "./why";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "HTML5",
    "Styled Components",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <PassionateDeveloper />

            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Button asChild>
              <a
                href="/CVMACE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CVMACE.pdf"
              >
                Download Resume
              </a>
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/me.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
