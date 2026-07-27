import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// education"
          title="Foundations & research"
          subtitle="Formal computer science education through to postgraduate deep-learning research."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal
              key={edu.degree}
              delay={i * 100}
              className={`glass-card p-6 transition-all hover:border-violet-500/25 hover:bg-white/[0.05] ${
                i === 0 ? "ring-1 ring-violet-500/20" : ""
              }`}
            >
              <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400">
                <GraduationCap size={22} />
              </div>
              <span className="font-mono text-xs text-slate-500">{edu.period}</span>
              <h3 className="mt-2 font-bold leading-snug text-white">{edu.degree}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{edu.school}</p>
              {edu.note && (
                <p className="mt-3 rounded-lg border border-violet-500/20 bg-violet-500/5 p-3 text-xs leading-relaxed text-violet-300">
                  {edu.note}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
