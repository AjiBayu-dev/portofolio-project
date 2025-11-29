import {
  FaGithub,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaWordpress,
  FaPython,
  FaHtml5,
  FaJs,
  FaGlobe,
  FaDatabase,
} from 'react-icons/fa6';
import { RiTailwindCssLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const techIcons = {
  Laravel: <FaLaravel className="text-red-500" />,
  'Vue.js': <FaVuejs className="text-green-500" />,
  React: <FaReact className="text-blue-400" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  Wordpress: <FaWordpress className="text-blue-600" />,
  Python: <FaPython className="text-yellow-400" />,
  Html: <FaHtml5 className="text-orange-500" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  Tailwind: <RiTailwindCssLine className="text-cyan-400" />,
  MySQL: <FaDatabase className="text-blue-600" />,
};

const CardProject = ({ id, title, shortDesc, techStack, thumbnail, github, publication }) => {
  return (
    <div className="group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
      
      {/* Image Container */}
      <Link to={`/projects/${id}`} className="relative aspect-video overflow-hidden block">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          src={thumbnail} 
          alt={title} 
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <Link to={`/projects/${id}`}>
          <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
        </Link>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {shortDesc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {Array.isArray(techStack) && techStack.map((tech, index) => (
            <div 
              key={index} 
              className="text-xl hover:scale-110 transition-transform"
              title={tech}
            >
              {techIcons[tech] || <span className="text-xs text-slate-500">{tech}</span>}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
          {github !== '-' && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>Source</span>
            </a>
          )}
          
          {publication !== '-' && (
            <a 
              href={publication}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors ml-auto"
            >
              <FaGlobe className="text-lg" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
