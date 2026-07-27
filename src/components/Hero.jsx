import { ArrowRight, Mail, MapPin, Sparkles, Code2, Brain } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, stats } from "../data/portfolio";
import Reveal from "./Reveal";
import heroArt from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="section-container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: copy */}
        <div>
          <Reveal
            as="div"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm {profile.firstName}.
            <br />
            <span className="text-gradient">{profile.title}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </Reveal>

          <Reveal
            as="div"
            delay={240}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} /> Get in touch
            </a>
          </Reveal>

          <Reveal
            as="div"
            delay={320}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-violet-400" /> {profile.location}
            </span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <FaLinkedin size={15} className="text-violet-400" /> LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <FaGithub size={15} className="text-violet-400" /> GitHub
            </a>
          </Reveal>
        </div>

        {/* Right: visual card */}
        <Reveal as="div" delay={200} className="relative hidden lg:block">
          <div className="glass-card relative overflow-hidden p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <img
              src={heroArt}
              alt="Software engineering illustration"
              loading="eager"
              className="mx-auto w-64 drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]"
            />
            <div className="mt-6 space-y-3 font-mono text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Sparkles size={14} className="text-violet-400" />
                <span className="text-slate-500">const</span> engineer = {"{"}
              </div>
              <div className="pl-6 text-slate-400">
                stack: [<span className="text-cyan-300">"React"</span>,{" "}
                <span className="text-cyan-300">"Node"</span>,{" "}
                <span className="text-cyan-300">"TypeScript"</span>],
              </div>
              <div className="pl-6 text-slate-400">
                aiTools: [<span className="text-violet-300">"LLMs"</span>,{" "}
                <span className="text-violet-300">"RAG"</span>,{" "}
                <span className="text-violet-300">"LangGraph"</span>],
              </div>
              <div className="pl-6 text-slate-400">
                realtime: [<span className="text-emerald-300">"Kafka"</span>,{" "}
                <span className="text-emerald-300">"Socket.io"</span>],
              </div>
              <div className="text-slate-400">{"}"}</div>
            </div>

            {/* Mini badges */}
            <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              <Code2 size={12} /> Full-Stack
            </div>
            <div className="absolute bottom-28 left-6 inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <Brain size={12} /> AI-Driven
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats strip */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="section-container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-3xl font-extrabold text-white md:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
