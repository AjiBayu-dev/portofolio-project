import { useLanguage } from "@/context/LanguageContext";
import TechStack from "./TechStack";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="w-full space-y-6 text-center md:text-left">
        <div>
          <h5 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-2">
            {t("about.title")}
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-500 text-transparent bg-clip-text mb-4">
            {t("about.name")}
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p dangerouslySetInnerHTML={{ __html: t("about.bio1") }} />
          <p>{t("about.bio2")}</p>
          <p>{t("about.bio3")}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a 
            href="document/cv.pdf" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
          >
            {t("about.downloadCv")}
          </a>
          <a 
            href="mailto:ajineo3@gmail.com"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600"
          >
            {t("about.contactMe")}
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
