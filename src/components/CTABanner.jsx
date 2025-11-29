import { FaWhatsapp } from "react-icons/fa6";

const CTABanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-3xl rounded-full -z-10" />

        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Ready to start your project?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
          Let's collaborate to turn your ideas into reality. I'm available for freelance projects and open to new opportunities.
        </p>

        <a
          href="https://wa.me/6282369417898"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-green-500/20 hover:-translate-y-1 hover:shadow-green-500/30"
        >
          <FaWhatsapp className="text-2xl" />
          Let's Chat
        </a>
      </div>
    </div>
  );
};

export default CTABanner;
