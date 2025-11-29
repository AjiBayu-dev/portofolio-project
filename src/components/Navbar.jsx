import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold transition-all duration-300"
      : "text-slate-300 hover:text-white transition-all duration-300";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold text-lg block py-2"
      : "text-slate-300 hover:text-white text-lg block py-2";

  return (
    <>
      {/* Desktop & Mobile Navbar Container */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
          scrolled || isOpen
            ? "bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-lg shadow-blue-500/10"
            : "bg-slate-900/50 backdrop-blur-sm border border-slate-800"
        } rounded-full px-6 py-3`}
      >
        <div className="flex items-center justify-between md:justify-center gap-8">
          
          {/* Mobile Logo / Brand (Visible only on mobile) */}
          <div className="md:hidden font-bold text-slate-200">
            Aji Bayu
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-200 text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/projects" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/services" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
          Services
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
