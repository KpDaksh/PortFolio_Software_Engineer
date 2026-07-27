import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

const accentStyles = {
  violet: "border-violet-500/20 hover:border-violet-500/50",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50",
  amber: "border-amber-500/20 hover:border-amber-500/50",
  rose: "border-rose-500/20 hover:border-rose-500/50",
};

const accentBadge = {
  violet: "bg-violet-500/10 text-violet-300",
  cyan: "bg-cyan-500/10 text-cyan-300",
  emerald: "bg-emerald-500/10 text-emerald-300",
  amber: "bg-amber-500/10 text-amber-300",
  rose: "bg-rose-500/10 text-rose-300",
};

const accentDot = {
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// skills"
          title="The full toolkit"
          subtitle="Everything needed to design, build, deploy, and scale modern web applications — with AI-powered features layered on top."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              className={`glass-card border p-6 ${accentStyles[group.accent]} ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full ${accentDot[group.accent]}`} />
                <h3 className="font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium ${accentBadge[group.accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
