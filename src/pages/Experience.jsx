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
      title: 'Software Development Intern',
      company: 'Automatically Enterprise',
      date: 'June-Aug 2024',
      description: 'Worked on company\'s website with React, implementing AWS lambda, Cognito in backend, and designing apps in flutterflow.'
    },
    {
      icon: FaBriefcase,
      title: 'Full Stack Developer',
      company: 'SKIT Incubation Cell',
      date: '2023 - 2024',
      description: 'Developed and maintained multiple incubated startup websites, implemented responsive designs, and integrated third-party APIs, and backend sservices.'
    },
    {
      icon: FaGraduationCap,
      title: 'Btech. in CSE (IOT)',
      company: 'SKIT Jaipur',
      date: '2022 - 2026',
      description: 'Studied algorithms, data structures, software engineering principles, and completed a capstone project on distributed systems. and continued..'
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