import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { achievements } from "../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// achievements"
          title="Recognition & impact"
          subtitle="Milestones earned while delivering results and supporting teammates."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="glass-card group relative overflow-hidden p-6 transition-all hover:border-amber-500/25 hover:bg-white/[0.05] md:p-8"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition-opacity group-hover:opacity-75" />
              <div className="mb-5 inline-flex rounded-xl bg-amber-500/10 p-3 text-amber-400">
                <Award size={22} />
              </div>
              <span className="font-mono text-xs text-slate-500">{item.period}</span>
              <h3 className="mt-2 text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-slate-400">{item.organization}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
