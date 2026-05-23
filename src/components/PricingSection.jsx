import { FaCheck } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const packages = [
    {
      key: "landing",
      recommended: false,
    },
    {
      key: "company",
      recommended: true,
    },
    {
      key: "custom",
      recommended: false,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
          {t("pricing.title")}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t("pricing.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          const prefix = `pricing.packages.${pkg.key}`;
          return (
            <div
              key={pkg.key}
              className={`relative p-8 rounded-2xl border ${
                pkg.recommended
                  ? "bg-slate-800/80 border-blue-500 shadow-xl shadow-blue-500/10 scale-105 z-10"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
              } backdrop-blur-sm flex flex-col transition-all duration-300`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {t("pricing.badge")}
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-200 mb-2">{t(`${prefix}.name`)}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{t(`${prefix}.desc`)}</p>
              
              <div className="text-2xl font-bold text-blue-400 mb-6">
                {t(`${prefix}.price`)}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {t(`${prefix}.features`).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <FaCheck className="text-green-400 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6282369417898?text=Hi, I'm interested in the ${t(`${prefix}.name`)} package.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  pkg.recommended
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                }`}
              >
                {t(`${prefix}.button`)}
              </a>
            </div>
          );
        })}
      </div>

      {/* Add-on Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-blue-900/20 border border-blue-500/30 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-500/5 blur-3xl -z-10" />

        <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-4">
          {t("pricing.addon.heading")}
        </h3>
        
        <p
          className="text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("pricing.addon.desc") }}
        />

        <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800/50 px-8 py-4 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/10 hover:scale-105 transition-transform duration-300">
             <span className="text-3xl animate-bounce">🤖</span>
             <div className="text-left">
                <p className="font-bold text-lg text-slate-100">{t("pricing.addon.package")}</p>
                <p className="text-blue-400 font-bold text-xl">{t("pricing.addon.price")}</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
