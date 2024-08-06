// pages/Skills.jsx
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

function SkillIcon({ Icon, name }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-5xl mb-2 text-md-blue" />
      <span className="text-md-text">{name}</span>
    </div>
  );
}

function Skills() {
  const skills = [
    { Icon: FaReact, name: 'React' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: SiExpress, name: 'Express' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaDatabase, name: 'SQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaAws, name: 'AWS' },
  ];

  return (
    <div className="skills">
      <h1 className="text-3xl text-md-yellow mb-6">Skills</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} Icon={skill.Icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;