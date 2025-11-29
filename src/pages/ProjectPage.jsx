import CardProject from "@/components/CardProject";
import projects from "../projects.json";
import CTABanner from "@/components/CTABanner";

const ProjectPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen animate__animated animate__fadeIn animate__faster overflow-hidden">
      <div className="mb-12">
        <h5 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-2">
          Portofolio Saya
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
          Featured Projects
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <CardProject
              id={project.id}
              title={project.title}
              shortDesc={project.shortDesc}
              key={project.id}
              techStack={project.techStack}
              thumbnail={project.image}
              github={project.link.github}
              publication={project.link.publication}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h5 className="text-xl font-bold text-slate-400">No Projects Found</h5>
          </div>
        )}
      </div>

      {/* Global CTA */}
      <div className="mt-20">
        <CTABanner />
      </div>
    </div>
  );
};

export default ProjectPage;
