import { BrainCircuit, Layers, Zap, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, focusAreas } from "../data/portfolio";

const iconMap = { BrainCircuit, Layers, Zap, Workflow };

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// about"
          title="A bit about me"
          subtitle="Full-stack engineering with a growing focus on building intelligent, AI-powered product features."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-5 leading-relaxed text-slate-400">
            <p className="text-lg">{profile.summary}</p>
            <p>
              On the <span className="font-medium text-cyan-300">full-stack side</span>, I've
              architected real-time notification platforms handling high daily volumes,
              published PCI-compliant payment SDKs on npm, and built complex visual
              workflow designers used in production by enterprise clients.
            </p>
            <p>
              I also bring <span className="font-medium text-violet-300">AI-powered features</span> into
              production applications — RAG pipelines, tool-using agents, and LLM
              integrations with LangChain & LangGraph — backed by formal research through
              my M.Tech thesis on multimodal deep learning.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = iconMap[area.icon];
              return (
                <Reveal key={area.title} delay={i * 80} className="glass-card group p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-bold text-white">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{area.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
