import Button from "./Button";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Content Section */}
      <div className="w-full space-y-6 text-center md:text-left">
        <div>
          <h5 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-2">
            Tentang Saya
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-500 text-transparent bg-clip-text mb-4">
            Aji Bayu Permadi
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>
            Halo! Saya seorang <span className="text-blue-400 font-semibold">Web Developer</span> yang berdedikasi dengan latar belakang Teknik Informatika dari UIN Sultan Syarif Kasim Riau (GPA 3.51). Saya memiliki passion yang mendalam dalam membangun aplikasi web modern yang tidak hanya fungsional tetapi juga estetis.
          </p>
          <p>
            Spesialisasi saya meliputi pengembangan Frontend dengan ekosistem <span className="text-slate-100 font-medium">React & Vue</span> serta Backend menggunakan <span className="text-slate-100 font-medium">Laravel</span>. Saya selalu antusias untuk mempelajari teknologi baru dan memecahkan masalah kompleks melalui kode yang bersih dan efisien.
          </p>
          <p>
            Saat ini, saya terbuka untuk peluang kolaborasi profesional. Mari diskusikan bagaimana saya dapat membantu mewujudkan ide digital Anda.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a 
            href="document/cv.pdf" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            Download CV
          </a>
          <a 
            href="mailto:ajineo3@gmail.com"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600"
          >
            Hubungi Saya
          </a>
          <a 
            href="https://www.linkedin.com/in/aji-bayu-permadi-11a5a9214/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600"
          >
            LinkedIn
          </a>
        </div>

        <div className="pt-8">
            <TechStack />
        </div>
      </div>
    </div>
  );
};

export default About;
