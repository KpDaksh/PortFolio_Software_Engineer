import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the visitor's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something"
          subtitle="Whether it's a MERN platform, an AI-powered product, or both — my inbox is open."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <Reveal className="space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="glass-card flex items-center gap-4 p-5">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-medium text-white transition-colors hover:text-violet-300">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium text-white">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card flex items-center gap-4 p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <FaLinkedin size={20} />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Socials</div>
                  <div className="font-medium text-white">Connect with me</div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal as="form" delay={150} onSubmit={handleSubmit} className="glass-card space-y-5 p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or role…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 outline-none transition-all focus:border-violet-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-violet-500/40 sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} className="text-emerald-300" /> Opening your mail client…
                </>
              ) : (
                <>
                  <Send size={18} /> Send message
                </>
              )}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
