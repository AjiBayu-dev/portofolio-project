import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright & Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-slate-200 mb-1">Aji Bayu Permadi</h3>
          <p className="text-slate-500 text-sm">
            © {currentYear} All rights reserved. Built with React & Tailwind.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/MrFunnyide" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="Github"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aji-bayu-permadi-11a5a9214/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/ajibayuper/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-500 transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a 
            href="mailto:ajineo3@gmail.com" 
            className="text-slate-400 hover:text-red-500 transition-colors hover:-translate-y-1 transform duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
