// pages/Resume.jsx
import { FaDownload } from 'react-icons/fa';
import React from 'react';

function Resume() {



  return (
    <div className="max-w-3xl mx-auto">
         <div>
            
        </div>
      <a 
        href="https://drive.google.com/file/d/1MumjuEau0AlbneZgVVORpXtKJ8UV95WB/view?usp=sharing" 
         target='_blank' rel="noopener noreferrer"
        className="inline-flex items-center bg-md-purple text-md-bg px-6 py-2 rounded hover:bg-md-blue transition-colors duration-300"
      >
        <FaDownload className="mr-2" />
        View & Download Resume
      </a>
    </div>
  );
}

export default Resume;