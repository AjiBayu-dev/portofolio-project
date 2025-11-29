import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Button from "@/components/Button";
import { FaReact, FaLaravel, FaVuejs, FaUbuntu, FaGitAlt } from "react-icons/fa6";
import Foto from "@/assets/image/foto.webp";

const HomePages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left space-y-6 animate__animated animate__fadeInLeft">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-200 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-slate-200 text-transparent bg-clip-text">
              Aji Bayu Permadi
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            A passionate <span className="text-slate-200 font-semibold">Full Stack Developer</span> crafting modern, responsive, and user-friendly web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <NavLink to="/projects">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1">
                View Projects
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-8 py-3 rounded-full transition-all hover:-translate-y-1">
                About Me
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="relative flex justify-center items-center animate__animated animate__fadeInRight">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <img 
                src={Foto} 
                alt="Aji Bayu Permadi" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tech Icons (Optional: Keep them orbiting the photo?) */}
            {/* Let's keep a few subtle ones or remove them for a cleaner look. 
                The user asked to replace the animation with the photo, so I'll keep it simple first. 
                But a few floating icons around the headshot usually looks cool. 
                I'll add back a couple of small ones. */}
            
            <div className="absolute top-0 right-4 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-[float_4s_ease-in-out_infinite_1s] z-30">
              <FaReact className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="absolute bottom-10 left-0 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-[float_5s_ease-in-out_infinite_2s] z-30">
              <FaLaravel className="w-6 h-6 text-red-500" />
            </div>

            <div className="absolute top-10 -left-4 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-[float_6s_ease-in-out_infinite_0.5s] z-30">
              <FaVuejs className="w-6 h-6 text-green-500" />
            </div>

            <div className="absolute bottom-20 -right-6 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-xl animate-[float_7s_ease-in-out_infinite_1.5s] z-30">
              <FaUbuntu className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-50"
        )}
      />
      
      {/* Custom Keyframe for Float Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default HomePages;
