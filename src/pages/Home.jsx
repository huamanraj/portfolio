// pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl md:text-6xl text-md-yellow mb-4">Hello, I'm Aman Raj</h1>
      <p className="text-xl md:text-2xl text-md-blue mb-8">Full Stack Developer</p>
      <p className="text-md-text max-w-2xl mb-8">
        I build responsive web applications with modern technologies. 
        Passionate about clean code and user-centric design.
      </p>
      <div className="flex space-x-4">
        <Link to="/projects" className="bg-md-green text-md-bg px-6 py-2 rounded hover:bg-md-yellow transition-colors duration-300">
          View Projects
        </Link>
        <Link to="/contact" className="border border-md-purple text-md-purple px-6 py-2 rounded hover:bg-md-purple hover:text-md-bg transition-colors duration-300">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;