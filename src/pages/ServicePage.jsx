import { FaBullhorn, FaWhatsapp } from "react-icons/fa6";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import PricingSection from "@/components/PricingSection";

const ServicePage = () => {
  return (
    <div className="min-h-screen pt-20 px-5 md:px-20 flex flex-col gap-10 justify-center items-center animate__animated animate__fadeInUp animate__faster relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text mb-6">
          Web Development
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
          Building fast, responsive, and scalable web applications tailored to your business needs. 
          From simple landing pages to complex enterprise solutions, I bring your vision to life with modern technology.
        </p>
        
        <a 
          href="https://wa.me/6282369417898"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all shadow-lg shadow-green-500/25 hover:-translate-y-1"
        >
          <FaWhatsapp className="text-xl" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Service Details Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10">
        
        {/* Features */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <FaBullhorn className="text-2xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-200">What I Offer</h3>
          </div>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full" />
              <span><strong className="text-slate-300">Responsive Design:</strong> Mobile-first approach ensuring your site looks perfect on all devices.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full" />
              <span><strong className="text-slate-300">Modern Frontend:</strong> Built with React or Vue, Vite, and Tailwind CSS for lightning-fast performance.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full" />
              <span><strong className="text-slate-300">SEO Optimized:</strong> Clean code structure and best practices to help you rank higher.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full" />
              <span><strong className="text-slate-300">Interactive UI:</strong> Engaging user experiences with smooth animations and transitions.</span>
            </li>
          </ul>
        </div>

        {/* Tech Stack Preview */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors flex flex-col justify-center">
           <h3 className="text-2xl font-bold text-slate-200 mb-6">Technologies</h3>
           <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Laravel</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Vue</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">React</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Vite</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Tailwind CSS</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">JavaScript (ES6+)</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">HTML5 & CSS3</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Framer Motion</span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium border border-slate-700">Git</span>
           </div>
           <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-slate-400 italic">
                "I don't just write code; I build solutions that solve real-world problems."
              </p>
           </div>
        </div>

      </div>

      {/* Pricing Section */}
      <PricingSection />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

export default ServicePage;
