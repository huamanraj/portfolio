// pages/Projects.jsx
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <div className="projects">
      <h1 className="text-3xl text-md-yellow mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <div key={project.id} className="bg-md-bg border border-md-text/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-md-blue mb-2">{project.title}</h3>
              <p className="text-md-text mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="bg-md-purple/20 text-md-purple px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="text-md-green hover:text-md-yellow transition-colors duration-200">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;