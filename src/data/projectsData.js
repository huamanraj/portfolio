// src/data/projectsData.js

export const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      image: '/path-to-image1.jpg',
      shortDescription: 'A full-stack e-commerce solution with React and Node.js',
      fullDescription: 'A comprehensive e-commerce platform built with React for the frontend and Node.js for the backend. This project showcases a modern, responsive design with a robust backend capable of handling user authentication, product management, and order processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filter functionality',
        'Shopping cart and checkout process',
        'Order history and tracking',
        'Admin dashboard for product and order management'
      ],
      challenges: 'One of the main challenges was implementing a real-time inventory management system to prevent overselling. This was solved by using WebSockets to update inventory across all active sessions.',
      github: 'https://github.com/yourusername/ecommerce-platform',
      liveDemo: 'https://your-ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      image: '/path-to-image2.jpg',
      shortDescription: 'A productivity app built with Vue.js and Firebase',
      fullDescription: 'A feature-rich task management application developed using Vue.js for the frontend and Firebase for backend services. This app helps users organize their tasks, set priorities, and track progress efficiently.',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vue Router', 'Tailwind CSS'],
      features: [
        'User authentication with Firebase',
        'Create, update, and delete tasks',
        'Organize tasks into projects',
        'Set due dates and priorities',
        'Real-time updates across devices',
        'Data persistence with Firestore'
      ],
      challenges: "Implementing real-time synchronization across multiple devices was challenging. We overcame this by leveraging Firebase's real-time database capabilities and optimizing our Vuex store.",
      github: 'https://github.com/yourusername/task-management-app',
      liveDemo: 'https://your-task-app-demo.com'
    },
    // Add more projects as needed
  ];