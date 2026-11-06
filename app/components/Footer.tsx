import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0b0a]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[13px] text-[#8a8175]">
        <p>
          © {new Date().getFullYear()} Pankaj Kumar · Freight AI work lives at{" "}
          <a href="https://nordneuron.com" className="text-[#c8a86b] hover:text-[#d8bd86]">
            nordneuron.com
          </a>
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/pankajlp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#c8a86b]">
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
