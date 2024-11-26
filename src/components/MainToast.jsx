import React, { useState, useEffect } from 'react';

const ToastNotification = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    
    setShowToast(true);

    
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []);

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-full md:max-w-sm w-11/12 bg-md-bg text-md-text p-4 rounded-md shadow-lg transition-transform duration-500 translate-y-0 z-50 outline-md-text outline-1 outline">
          <div className="flex justify-between items-center">
            <p>
              Try my new project:{" "}
              <a
                href="https://snapdrop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md-blue underline hover:text-md-yellow"
              >
                SnapDrop: Easy Cloud File Sharing
              </a>
            </p>
            <button onClick={closeToast} className="text-2xl text-md-red hover:text-md-yellow ml-4">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastNotification;
