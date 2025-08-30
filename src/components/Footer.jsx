import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#1a1333] text-gray-200 py-8 px-4 border-t border-white/10 mt-auto flex flex-col items-center justify-center relative overflow-hidden">
      {/* Glassy effect and animated gradient blob */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-br from-fuchsia-600 via-violet-600 to-blue-600 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />
      <div className="relative z-10 flex gap-8 mb-3">
        <a href="https://www.instagram.com/mitra_arpan25?igsh=MWVndjJkOGc5ejJkcQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition text-3xl hover:scale-125 hover:text-pink-400 duration-200"><FaInstagram /></a>
        <a href="https://x.com/ArpanMitra42171?t=PqcYtEpNh25uN_7ByAy5Fg&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition text-3xl hover:scale-125 hover:text-blue-400 duration-200"><FaXTwitter /></a>
        <a href="https://github.com/mitrastarpan1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition text-3xl hover:scale-125 hover:text-gray-100 duration-200"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/arpan-mitra-00033b240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition text-3xl hover:scale-125 hover:text-blue-300 duration-200"><FaLinkedin /></a>
      </div>
      <div className="relative z-10 text-base font-medium bg-white/10 px-6 py-2 rounded-2xl border border-white/10 shadow backdrop-blur-lg">
        © {new Date().getFullYear()} <span className="text-fuchsia-400 font-bold">Arpan Mitra</span>. All rights reserved.
      </div>
    </footer>
  );
}
