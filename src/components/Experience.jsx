import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// experience"
          title="Where I've shipped"
          subtitle="Production systems used by real customers — from enterprise notification platforms to automated testing at scale."
        />

        <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-violet-500/50 before:via-cyan-500/30 before:to-transparent md:before:left-[23px]">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              as="article"
              delay={i * 100}
              className="relative pl-14 md:pl-16"
            >
              {/* Timeline dot */}
              <span
                className={`absolute left-2.5 top-8 flex h-4 w-4 items-center justify-center rounded-full border-2 md:left-3.5 ${
                  job.current
                    ? "border-emerald-400 bg-emerald-400/20 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                    : "border-violet-500/60 bg-surface-950"
                }`}
              >
                {job.current && (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                )}
              </span>

              <div className="glass-card group p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-violet-300">
                      {job.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span className="inline-flex items-center gap-1.5 font-medium text-cyan-300">
                        <Briefcase size={14} /> {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs ${
                      job.current
                        ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : "border border-white/10 bg-white/5 text-slate-400"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
