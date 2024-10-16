import React from 'react';
import { Link } from 'react-router-dom';
const SwitchToCLIButton = () => {
  return (
    <Link to="/terminal">
    <button className="fixed bottom-4 right-4 bg-md-bg text-md-text border border-md-green hover:bg-md-green hover:text-md-bg transition-colors duration-300 p-3 rounded-md shadow-lg z-50">
      Switch to CLI
    </button>
    </Link>
  );
};

export default SwitchToCLIButton;
