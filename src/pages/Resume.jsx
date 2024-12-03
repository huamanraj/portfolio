import { FaDownload } from 'react-icons/fa';
import React from 'react';
import resume from '/Resume.pdf'
function Resume() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Embed the PDF */}
      <div className="my-2">
        <iframe 
          src={`${resume}#toolbar=0&view=FitH`} 
          title="Aman Raj's Resume"
          className="w-full sm:h-[720px] h-[500px] border rounded-lg"
           loading="lazy"
        ></iframe>
      </div>

      {/* Download Button */}
      <a 
        href={resume}
        download="Aman_Raj_Resume.pdf"
        className="inline-flex items-center bg-md-purple text-md-bg px-6 py-2 rounded hover:bg-md-blue transition-colors duration-300"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
