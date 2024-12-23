// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import ProjectDetails from './components/ProjectDetails';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import CustomScrollbar from './components/CustomScrollbar/CustomScrollbar';
import ToastNotification from './components/MainToast';
import TerminalPortfolio from './components/TerminalPortfolio';

function AppContent() {
  const location = useLocation();

  if (location.pathname === '/terminal') {
    return <TerminalPortfolio />;
  }

  return (
    <CustomScrollbar>
      <div className="bg-md-bg text-md-text min-h-screen font-mono">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        <ToastNotification />
      </div>
    </CustomScrollbar>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terminal" element={<TerminalPortfolio />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;