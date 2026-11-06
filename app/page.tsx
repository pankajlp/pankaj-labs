import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { articles } from "./lib/insights";

type Tool = {
  title: string;
  status: string;
  description: string;
  href?: string;
  githubUrl?: string;
};

const tools: Tool[] = [
  {
    title: "Job Application Tailor",
    status: "Live",
    description:
      "Paste a resume and job description for an instant ATS match score, a role-tailored resume, and a ready-to-send cover letter.",
    href: "/labs/job-tailor",
    githubUrl: "https://github.com/NordNeuron/job-cockpit",
  },
  {
    title: "Work-Visa Fit Report",
    status: "Live",
    description:
      "Paste a resume for a personalised non-EU work-visa guide across 27 countries — each fit-rated with route, salary floor, and path to PR.",
    href: "/labs/visa-report",
    githubUrl: "https://github.com/NordNeuron/job-cockpit",
  },
  {
    title: "Algo Arsenal",
    status: "Live",
    description:
      "A gamified way to learn data structures and algorithms: 20 patterns with animated visualizers, 33 guided problems and a pattern-recognition trainer. Runs entirely in the browser.",
    href: "https://pankajlp.github.io/algo-arsenal/",
    githubUrl: "https://github.com/pankajlp/algo-arsenal",
  },
  {
    title: "LedgerBench",
    status: "Research",
    description:
      "A pre-registered benchmark for how AI coding agents remember requirements across sessions. Five memory strategies, 24 tasks, 60 frozen runs.",
    href: "/insights/when-agents-cant-forget",
    githubUrl: "https://github.com/NordNeuron/ledgerbench",
  },
  {
    title: "NexConvert",
    status: "Utility",
    description:
      "Converts Clash proxy settings (.yaml) into Sing-box compatible formats (.json) with a web dashboard.",
    href: "https://convert.nordneuron.com",
    githubUrl: "https://github.com/NordNeuron/nexconvert-tool",
  },
  {
    title: "Folder Flow",
    status: "Utility",
    description:
      "A client-side app for organising local file directories, with a visual tree preview of the new hierarchy before anything moves.",
    href: "https://flow.nordneuron.com",
    githubUrl: "https://github.com/NordNeuron/folder-organizer",
  },
];

const isExternal = (href: string) => href.startsWith("http");

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df] overflow-hidden">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-40 pb-28">
        {/* Intro */}
        <section className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-syne tracking-tight text-[#f2ede3] leading-[1.02]">
            Tools, side projects
            <br />
            <span className="text-[#c8a86b]">and writing.</span>
          </h1>
          <p className="mt-8 text-[#a89f8f] text-base md:text-lg leading-relaxed font-light max-w-2xl">
            I&apos;m Pankaj, a data scientist working on freight and supply-chain AI. My company work
            lives at{" "}
            <a href="https://nordneuron.com" className="text-[#c8a86b] hover:text-[#d8bd86]">
              NordNeuron
            </a>
            . This is everything else: free tools I&apos;ve built, research experiments, and essays on
            AI agents and how they get used.
          </p>
        </section>

        {/* Tools */}
        <section id="tools" className="mt-28 scroll-mt-28">
          <h2 className="text-[11px] font-syne uppercase tracking-[0.3em] text-[#8a8175] mb-8">Tools &amp; projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#c8a86b] font-syne text-[10px] uppercase tracking-widest">{tool.status}</div>
                  <h3 className="mt-4 text-2xl font-bold font-syne tracking-tight text-[#f2ede3]">{tool.title}</h3>
                  <p className="mt-3 text-[#8a8175] text-sm font-light leading-relaxed">{tool.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
                  {tool.href && (
                    <Link
                      href={tool.href}
                      target={isExternal(tool.href) ? "_blank" : undefined}
                      rel={isExternal(tool.href) ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-[#f2ede3] hover:text-[#c8a86b]"
                    >
                      Open <ArrowUpRight size={14} />
                    </Link>
                  )}
                  {tool.githubUrl && (
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#8a8175] hover:text-[#f2ede3]"
                    >
                      <FaGithub size={13} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section className="mt-28">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[11px] font-syne uppercase tracking-[0.3em] text-[#8a8175]">Latest writing</h2>
            <Link href="/insights" className="font-mono text-[11px] uppercase tracking-widest text-[#a89f8f] hover:text-[#c8a86b]">
              All {articles.length} essays →
            </Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {articles.slice(0, 5).map((article) => (
              <Link key={article.href} href={article.href} className="group block py-6">
                <div className="text-[12px] text-[#8a8175]">
                  {article.category} · {article.meta}
                </div>
                <h3 className="mt-1.5 text-lg md:text-xl font-syne font-bold tracking-tight text-[#f2ede3] group-hover:text-[#c8a86b] transition-colors duration-300">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
