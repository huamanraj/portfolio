// pages/About.jsx
import { FaLinkedin, FaXTwitter, FaFilePdf, FaInstagram, FaHashnode } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-md-yellow mb-6">About Me</h1>
      <div className="bg-md-bg border border-md-text/20 rounded-lg p-6 mb-6">
        <p className="text-md-text mb-4">
          Hello! I'm <span className="cursor-none text-md-blue hover:text-md-red">Aman Raj</span>, a passionate full stack developer with a keen interest in building
          innovative web applications. With 1+ years of experience in the field, I've had the
          opportunity to work on a diverse range of projects, from small websites to
          large-scale applications.
        </p>
        <p className="text-md-text mb-4">
          My technical toolkit includes:
        </p>
        <ul className="list-disc cursor-none list-inside text-md-blue mb-4">
          <li>Tools: <span className="text-md-yellow">Figma</span>, VS Code, FlutterFlow, GitHub</li>
          <li className="w-[80%]">Frontend: <span className="text-md-yellow">React</span>, JavaScript (ES6+), TypeScript, Tailwind CSS, Material UI, HTML5, CSS3</li>
          <li>Backend: <span className="text-md-yellow">Node.js, Express</span>, Appwrite, Firebase </li>
          <li>Databases: <span className="text-md-yellow">MongoDB</span>, MySQL</li>
          <li>DevOps: Docker, AWS, CI/CD pipelines</li>
        </ul>
        <p className="text-md-text">
          When I'm not coding, you can find me clicking photos on the streets of jaipur. I'm always eager to learn
          new technologies and methodologies to stay at the forefront of web development.
        </p>
      </div>
      <div className="flex sm:grid sm:grid-flow-col gap-2 sm:gap-7 justify-start text-5xl ">
        <a className="hover:text-blue-600" href="https://www.linkedin.com/in/huamanraj/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className="hover:text-blue-600" href="https://twitter.com/huamanraj" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a className="hover:text-blue-600" href="https://github.com/huamanraj" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className="hover:text-blue-600" href="https://huamanraj.hashnode.dev/" target="_blank" rel="noopener noreferrer"><FaHashnode /></a>
        <div className="relative group">
        <a className="hover:text-blue-600" href="mailto:amanraj12.ar@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">amanraj12.ar@gmail.com</span>
      </div>
        <a className="hover:text-blue-600" href="https://www.instagram.com/https.amanraj" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
}

export default About;