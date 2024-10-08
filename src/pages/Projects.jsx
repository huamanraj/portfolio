

// pages/Projects.jsx
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-md-yellow mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {projectsData.map(project => (
          <div key={project.id} className="bg-md-bg border border-md-text/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 ">
              <h3 className="text-2xl hover:text-md-yellow  font-semibold text-md-blue mb-3">{project.title}</h3>
              <p className="text-md-text mb-4 line-clamp-3">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-md-purple/20 text-md-purple px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <Link 
                  to={`/projects/${project.id}`} 
                  className="text-md-green hover:text-md-yellow transition-colors duration-200 font-medium"
                >
                  View Details
                </Link>
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-md-blue hover:text-md-yellow transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-md-blue hover:text-md-yellow transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;






















// // pages/Projects.jsx
// import { Link } from 'react-router-dom';
// import { projectsData } from '../data/projectsData';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// function Projects() {
//   return (
//     <div className="projects ">
//       <h1 className="text-3xl text-md-yellow mb-6">Projects</h1>
//       <h1 className="text-xl text-red-900  hover:text-red-300 cursor-wait mb-6">##Page-under-developement</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
//         {projectsData.map(project => (
//           <div key={project.id} className="bg-md-bg border border-md-text/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl text-md-blue mb-2">{project.title}</h3>
//               <p className="text-md-text mb-4">{project.shortDescription}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.slice(0, 3).map(tech => (
//                   <span key={tech} className="bg-md-purple/20 text-md-purple px-2 py-1 rounded text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
              
//               <div className='flex justify-between'>

//               <Link to={`/projects/${project.id}`} className="text-md-green hover:text-md-yellow hover:font-bold transition-colors duration-200">
//                 View Details
//               </Link>

//               <div className="flex space-x-4">
//                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-md-blue hover:text-md-yellow">
//                   <FaGithub className="mr-2" /> View on GitHub
//                 </a>
//                 <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center text-md-blue hover:text-md-yellow">
//                   <FaExternalLinkAlt className="mr-2" /> Live Demo
//                 </a>
//               </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;