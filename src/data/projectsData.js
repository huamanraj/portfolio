import image1 from '../assets/mindmoasic.png';
import image2 from '../assets/project.png';
import image3 from '../assets/project.png';
import image4 from '../assets/todo.png';
import image5 from '../assets/project.png';

export const projectsData = [
  {
      id: 1,
      title: 'Mind Mosaic',
      image: image1,
      shortDescription: 'A comprehensive blogging platform with React and Appwrite.',
      fullDescription: 'Mind Mosaic is a robust blogging platform that integrates React for the frontend and Appwrite for the backend. It features modern UI components, user authentication, and a powerful text editor for creating and managing blog posts.',
      technologies: ['React', 'Redux', 'Appwrite', 'tinyMCE', 'Tailwind CSS'],
      features: [
          'User authentication and authorization',
          'Rich text editor for blog creation',
          'Responsive design with Tailwind CSS',
          'Backend management with Appwrite',
          'Blog search and filtering'
      ],
      challenges: 'Ensuring seamless user authentication and managing real-time data synchronization between frontend and backend using Appwrite.',
      github: 'https://github.com/yourusername/mind-mosaic',
      liveDemo: 'https://mind-mosaic-blogs.vercel.app/'
  },
  {
      id: 2,
      title: 'Therapy Chat App',
      image: image2,
      shortDescription: 'A secure therapy chat application with real-time messaging using Gemini API.',
      fullDescription: 'This therapy chat app is designed for secure, real-time communication between therapists and clients. Built with React and Node.js, it utilizes Firebase for real-time data synchronization and Gemini API for advanced text processing.',
      technologies: ['React', 'Node.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
      features: [
          'Real-time chat functionality',
          'Secure user authentication',
          'Message encryption for privacy',
          'Therapist and client management',
          'Integration with Gemini API for enhanced text analysis'
      ],
      challenges: 'Implementing secure real-time communication and ensuring data privacy between users was a primary challenge, addressed using encryption and Firebase’s real-time capabilities.',
      github: '#',
      liveDemo: '#'
  },
  {
      id: 3,
      title: 'Color Palette Generator',
      image: image2,
      shortDescription: 'A color palette generator built with React.',
      fullDescription: 'This application allows users to create and save color palettes. It’s built with React and designed to be user-friendly and responsive, featuring drag-and-drop functionality and real-time color updates.',
      technologies: ['React', 'Tailwind CSS'],
      features: [
          'Create and save custom color palettes',
          'Responsive design with Tailwind CSS',
          'Drag-and-drop color arrangement',
          'Palette export in multiple formats'
      ],
      challenges: 'Developing a seamless and responsive UI that allows for easy interaction and manipulation of color palettes.',
      github: '#',
      liveDemo: '#'
  },
  {
      id: 4,
      title: 'To-Do App',
      image: image4,
      shortDescription: 'A simple and efficient to-do list app using React and Context API.',
      fullDescription: 'This to-do app is built with React and leverages Context API for state management. It’s designed to help users organize their tasks efficiently, featuring task categorization, priority setting, and due dates.',
      technologies: ['React', 'Context API', 'Tailwind CSS'],
      features: [
          'Task creation, updating, and deletion',
          'Category and priority setting',
          'Due date reminders',
          'State management with Context API'
      ],
      challenges: 'Managing complex state across multiple components using Context API without performance degradation.',
      github: '#',
      liveDemo: 'https://todo-tau-gold-31.vercel.app/'
  },
  {
      id: 5,
      title: 'EV Car Home Page',
      image: image2,
      shortDescription: 'A sleek homepage for an EV car company built with React.',
      fullDescription: 'This project is a modern and visually appealing homepage for an EV car company, built with React. It features smooth animations, responsive design, and sections for showcasing the car’s features, pricing, and reviews.',
      technologies: ['React', 'Tailwind CSS'],
      features: [
          'Responsive design with Tailwind CSS',
          'Smooth animations and transitions',
          'Car feature showcase',
          'Customer reviews and testimonials',
          'Interactive pricing section'
      ],
      challenges: 'Creating a visually engaging design while maintaining performance and responsiveness across devices.',
      github: '#',
      liveDemo: '#'
  }
];
