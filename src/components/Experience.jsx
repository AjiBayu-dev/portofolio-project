import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Team Lead Development",
    company: "PT Dazo Kreatif Indonesia",
    period: "Mei 2025 - Now",
    type: "Full-time",
  },
  {
    role: "Full-stack Developer",
    company: "PT Dazo Kreatif Indonesia",
    period: "Oct 2024 - Mei 2025",
    type: "Full-time",
  },
  {
    role: "Asisten Dosen Mobile Programming",
    company: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
    period: "Feb 2024 - Jun 2024",
    type: "Contract",
  },
  {
    role: "Programmer",
    company: "Laboratorium Inkubator Fakultas Sains dan Teknologi",
    period: "Jan 2023 - Apr 2023",
    type: "Internship",
  },
  {
    role: "Asisten Laboratorium",
    company: "Laboratorium Multimedia Fakultas Sains dan Teknologi",
    period: "Aug 2022 - Jan 2023",
    type: "Contract",
  },
];

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h5 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-2">
          Perjalanan Karir
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
          Experience
        </h2>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
              <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <h3 className="font-bold text-lg text-slate-200 group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {exp.type}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                <Building2 className="w-4 h-4" />
                <span>{exp.company}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
