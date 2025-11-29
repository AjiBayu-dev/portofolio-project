import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../projects.json";
import { FaGithub, FaGlobe, FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import CTABanner from "@/components/CTABanner";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className=" min-h-screen pt-24 pb-10 px-6 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-12">
          <img 
            src={`/${project.image}`} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          
          {/* Left: Details */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Overview</h3>
              <p className="text-slate-400 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h4 className="font-bold text-slate-200 mb-2">The Challenge</h4>
                <p className="text-sm text-slate-400">
                  {project.challenge}
                </p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h4 className="font-bold text-slate-200 mb-2">The Solution</h4>
                <p className="text-sm text-slate-400">
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Key Results</h3>
              <div className="flex items-start gap-3">
                <FaCircleCheck className="text-green-500 mt-1 text-xl shrink-0" />
                <p className="text-slate-400 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-200 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-200 mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.link.publication !== "-" && (
                  <a 
                    href={project.link.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                  >
                    <FaGlobe />
                    Live Demo
                  </a>
                )}
                {project.link.github !== "-" && (
                  <a 
                    href={project.link.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-medium transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTABanner />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
