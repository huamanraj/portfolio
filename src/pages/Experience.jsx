// pages/Experience.jsx
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function TimelineItem({ icon: Icon, title, company, date, description }) {
  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-center mr-4">
        <div className="bg-md-blue rounded-full p-2">
          <Icon className="text-md-bg text-xl" />
        </div>
        <div className="flex-1 w-px bg-md-blue/30 my-2"></div>
      </div>
      <div>
        <h3 className="text-xl text-md-green">{title}</h3>
        <p className="text-md-text/80">{company} | {date}</p>
        <p className="text-md-text mt-2">{description}</p>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      icon: FaBriefcase,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      date: '2018 - Present',
      description: 'Leading development of company\'s flagship product, implementing CI/CD pipelines, and mentoring junior developers.'
    },
    {
      icon: FaBriefcase,
      title: 'Full Stack Developer',
      company: 'WebSolutions Co.',
      date: '2015 - 2018',
      description: 'Developed and maintained multiple client websites, implemented responsive designs, and integrated third-party APIs.'
    },
    {
      icon: FaGraduationCap,
      title: 'BSc in Computer Science',
      company: 'University of Technology',
      date: '2011 - 2015',
      description: 'Studied algorithms, data structures, software engineering principles, and completed a capstone project on distributed systems.'
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-md-yellow mb-6">Experience</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default Experience;