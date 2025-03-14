"use client";

import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/swapii.png",
      tags: ["React.js", "Supabase", "Recharts", "Styled Components"],
      demoUrl: "https://swapiio.netlify.app/",
      githubUrl: "https://github.com/Diomastrio/swapiiO",
    },
    {
      id: 2,
      title: "Chat App",
      description:
        "A real-time chat application with user authentication and online status indicators.",
      image: "/chat.png",
      tags: ["React", "MongoDB", "Express.js", "Tailwind CSS"],
      demoUrl: "https://airguard.onrender.com/",
      githubUrl: "https://github.com/Diomastrio/reachat",
    },
    {
      id: 3,
      title: "Air Quality Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data for any location.",
      image: "/airg.png",
      tags: ["React", "MongoDB", "Express.js", "Tailwind CSS", "MQTT"],
      demoUrl: "https://airguard.onrender.com/",
      githubUrl: "https://github.com/Diomastrio/AirGuard-web",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A content management system for creating and publishing blog posts with user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">{"Projects"}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
