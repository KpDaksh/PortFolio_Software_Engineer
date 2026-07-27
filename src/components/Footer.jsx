import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#top" className="font-mono text-lg font-bold text-white">
              &lt;{profile.firstName} <span className="text-gradient">/&gt;</span>
            </a>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Software Engineer building scalable web applications and
              AI-powered product features.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-600 sm:flex-row">
          <span>
            © {year} {profile.name}. Built with React & Tailwind CSS.
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-slate-400 transition-all hover:border-violet-500/40 hover:text-violet-300"
          >
            <ArrowUp size={15} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
