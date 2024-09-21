// pages/Skills.jsx
import { FaReact, FaNodeJs,FaGithub, FaPython,FaFigma, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript,SiTailwindcss,SiFlutter, SiMui,SiAppwrite ,SiFirebase , SiTypescript, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
function SkillIcon({ Icon, name }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-5xl hover:text-yellow-400 cursor-crosshair mb-2 text-md-blue" />
      <span className="text-md-text">{name}</span>
    </div>
  );
}

function Skills() {
  const skills = [
    { Icon: FaReact, name: 'React' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiTailwindcss , name: 'Tailwind CSS' },
    { Icon: SiMui , name: 'Material UI' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: SiExpress, name: 'Express' },
    { Icon: TbBrandReactNative , name: 'React Native' },
    { Icon: FaDatabase, name: 'MySQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: FaGithub, name: 'GitHub' },
    { Icon: SiAppwrite, name: 'Appwrite' },
    { Icon: SiFirebase, name: 'Firebase' },
    { Icon: SiFlutter, name: 'FlutterFlow' },
    { Icon: FaFigma, name: 'Figma' },
    
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