// pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaLinkedin, FaXTwitter, FaFilePdf, FaInstagram, FaHashnode } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SwitchToCLIButton from '../components/SwitchToCLI';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl  md:text-6xl text-md-yellow mb-4">Hello, I'm  Aman Raj</h1>
      <p className="text-xl md:text-2xl text-md-blue ">Full Stack Developer</p>
      <div className="flex  sm:grid sm:grid-flow-col gap-2 sm:gap-7 justify-start text-3xl py-5">
        <a className="hover:text-yellow-600" href="https://twitter.com/huamanraj" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a className="hover:text-yellow-600" href="https://github.com/huamanraj" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a className="hover:text-yellow-600" href="https://www.linkedin.com/in/huamanraj/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className="hover:text-yellow-600" href="https://huamanraj.hashnode.dev/" target="_blank" rel="noopener noreferrer"><FaHashnode /></a>
        <div className="relative group">
        <a className="hover:text-yellow-600" href="mailto:amanraj12.ar@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">amanraj12.ar@gmail.com</span>
      </div>
        <a className="hover:text-yellow-600" href="https://www.instagram.com/https.amanraj" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p className="text-md-text max-w-2xl mb-8">
        I build responsive web applications with modern technologies. 
        Passionate about clean code and user-centric design.
      </p>
     
      <div className="flex space-x-4">
        <Link to="/projects" className="bg-md-green text-md-bg  px-6 py-2 rounded hover:bg-md-yellow transition-colors duration-300">
          View Projects
        </Link>
        <Link to="/contact" className="border border-md-purple text-md-purple px-6 py-2 rounded hover:bg-md-purple hover:text-md-bg transition-colors duration-300">
          Contact Me
        </Link>
      </div>

      

      <SwitchToCLIButton />
    </div>
  );
}

export default Home;