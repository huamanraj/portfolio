// pages/Resume.jsx
import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-md-yellow mb-6">Resume</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6 mb-6">
        <h2 className="text-2xl text-md-blue mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl text-md-green">Senior Full Stack Developer</h3>
          <p className="text-md-text/80">TechCorp Inc. | 2018 - Present</p>
          <ul className="list-disc list-inside text-md-text mt-2">
            <li>Led development of company's flagship product</li>
            <li>Implemented CI/CD pipeline, improving deployment efficiency by 40%</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl text-md-green">Full Stack Developer</h3>
          <p className="text-md-text/80">WebSolutions Co. | 2015 - 2018</p>
          <ul className="list-disc list-inside text-md-text mt-2">
            <li>Developed and maintained multiple client websites</li>
            <li>Implemented responsive designs and ensured cross-browser compatibility</li>
            <li>Integrated third-party APIs and services</li>
          </ul>
        </div>
        
        <h2 className="text-2xl text-md-blue mb-4 mt-8">Education</h2>
        <div>
          <h3 className="text-xl text-md-green">BSc in Computer Science</h3>
          <p className="text-md-text/80">University of Technology | 2011 - 2015</p>
        </div>
      </div>
      
      <a 
        href="/path-to-your-resume.pdf" 
        download 
        className="inline-flex items-center bg-md-purple text-md-bg px-6 py-2 rounded hover:bg-md-blue transition-colors duration-300"
      >
        <FaDownload className="mr-2" />
        Download Full Resume
      </a>
    </div>
  );
}

export default Resume;