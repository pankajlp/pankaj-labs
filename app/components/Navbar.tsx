import Link from "next/link";

const NAV_ITEMS = [
  { label: "Tools", href: "/#tools" },
  { label: "Writing", href: "/insights" },
  { label: "NordNeuron", href: "https://nordneuron.com" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b]" />
          <span className="text-[17px] font-bold tracking-tight font-syne text-[#f2ede3]">Pankaj Kumar</span>
        </Link>
        <div className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-widest text-[#a89f8f]">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#c8a86b] transition-colors duration-300">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
