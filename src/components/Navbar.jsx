// components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-md-bg border-b border-md-text/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-md-purple text-xl font-bold">{'</>'}</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6 text-md-text" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-md-bg md:bg-transparent p-4 md:p-0`}>
          {['Home', 'About', 'Skills', 'Resume', 'Contact', 'Blogs', 'Projects', 'Experience'].map((item) => (
            <li key={item} className="mb-2 md:mb-0">
              <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-md-green hover:text-md-yellow transition-colors duration-200">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;