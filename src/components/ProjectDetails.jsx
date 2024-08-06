// pages/ProjectDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projectsData';

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-md-text">Project not found</div>;
  }

  return (
    <div className="project-details">
      <Link to="/projects" className="text-md-blue hover:text-md-yellow mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-3xl text-md-yellow mb-6">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6 mb-6">
        <h2 className="text-2xl text-md-blue mb-4">Project Description</h2>
        <p className="text-md-text mb-4">{project.fullDescription}</p>
        <h3 className="text-xl text-md-green mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="bg-md-purple/20 text-md-purple px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl text-md-green mb-2">Key Features</h3>
        <ul className="list-disc list-inside text-md-text mb-4">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl text-md-green mb-2">Challenges and Solutions</h3>
        <p className="text-md-text mb-4">{project.challenges}</p>
        <div className="flex space-x-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-md-blue hover:text-md-yellow">
            <FaGithub className="mr-2" /> View on GitHub
          </a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center text-md-blue hover:text-md-yellow">
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;