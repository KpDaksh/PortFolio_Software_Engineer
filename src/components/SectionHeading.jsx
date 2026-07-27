import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12">
      <span className="font-mono text-sm text-violet-400">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />
    </Reveal>
  );
}
