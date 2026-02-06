import Layout from "@/components/Layout";
import { Sparkles, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern men’s fashion website with a dark, elegant aesthetic Focused on visual presentation, clarity, and a smooth browsing experience.",
    
    tags: ["React", "Tailwind CSS", ],
  
    image: "/zaki1.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A sleek and modern interface designed for an AI platform. Emphasizes simplicity, clarity, and an intuitive user experience.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/zaki2.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A calm and well-structured Islamic web experience for daily spiritual use. Designed to provide easy access to essential religious content.",
    tags: ["React", "API", "Tailwind CSS"],
    image: "/zaki3.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Calculator App",
    description: "A clean product showcase focused on visual balance and presentation. Highlights items in a clear, attractive, and organized layout.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/zaki4.jpg",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              My Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Projects
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Here are some of the projects I've been working on as I learn web development.
            </p>
          </div>

          {/* Projects - Alternating Layout */}
          <div className="space-y-20">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={project.id}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Project Image */}
                  <div className="w-full md:w-1/2 group">
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      
                      {/* Image */}
                      <div className="aspect-video bg-secondary overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground/30">0${project.id}</div>`;
                            }
                          }}
                        />
                      </div>

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full md:w-1/2 space-y-4">
                    {/* Project Number */}
                    <div className="text-primary/50 text-sm font-bold tracking-widest">
                      PROJECT {String(project.id).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-secondary text-foreground border border-border hover:border-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stylish Blue Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {/* Just a Design Button */}
                      <button className="group/btn relative px-6 py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                        
                        {/* Decorative shapes */}
                        <div className="absolute top-1 right-2 w-3 h-3 border-2 border-white/40 rounded-full group-hover/btn:scale-150 transition-transform duration-500"></div>
                        <div className="absolute bottom-2 left-3 w-2 h-2 bg-white/30 rotate-45 group-hover/btn:rotate-90 transition-transform duration-500"></div>
                        
                        {/* Content */}
                        <span className="relative flex items-center gap-2 text-white">
                          <Sparkles className="w-4 h-4" />
                          Just a Design
                        </span>
                      </button>

                      {/* Prototype Only Button */}
                      <button className="group/btn relative px-6 py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-90 group-hover/btn:opacity-100 transition-opacity"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                        
                        {/* Decorative shapes */}
                        <div className="absolute top-2 left-2 w-2 h-2 border-2 border-white/40 group-hover/btn:scale-150 transition-transform duration-500"></div>
                        <div className="absolute bottom-1 right-3 w-3 h-3 bg-white/30 rounded-sm group-hover/btn:rotate-45 transition-transform duration-500"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/50 rounded-full group-hover/btn:scale-[20] transition-transform duration-500 opacity-0 group-hover/btn:opacity-30"></div>
                        
                        {/* Content */}
                        <span className="relative flex items-center gap-2 text-white">
                          <Zap className="w-4 h-4" />
                          Prototype Only
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;