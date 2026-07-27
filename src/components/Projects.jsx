import { useState } from "react";
import { ExternalLink, FlaskConical, Rocket, Wrench } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

const filters = ["All", "Web Apps", "AI & ML"];

const statusIcon = {
  "In Progress": Wrench,
  Research: FlaskConical,
  "Shipped to npm": Rocket,
  Production: Rocket,
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// projects"
          title="Things I've built"
          subtitle="Production platforms, published SDKs, and AI-powered systems — filter by category."
        />

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => {
            const StatusIcon = statusIcon[project.status] ?? Rocket;
            return (
              <Reveal
                key={project.title}
                as="article"
                delay={(i % 3) * 80}
                className={`glass-card group flex flex-col p-6 ${
                  project.featured ? "lg:col-span-1 ring-1 ring-violet-500/20" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      project.category === "AI & ML"
                        ? "bg-violet-500/10 text-violet-300"
                        : "bg-cyan-500/10 text-cyan-300"
                    }`}
                  >
                    <StatusIcon size={12} /> {project.status}
                  </span>
                  <div className="flex gap-2 text-slate-500">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                        aria-label="GitHub"
                      >
                        <FaGithub size={17} />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-violet-300">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/5 px-2 py-1 font-mono text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
