// pages/About.jsx

function About() {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-md-yellow mb-6">About Me</h1>
        <div className="bg-md-bg border border-md-text/20 rounded-lg p-6 mb-6">
          <p className="text-md-text mb-4">
            Hello! I'm <span className="text-md-blue hover:text-md-red">Aman Raj</span>, a passionate full stack developer with a keen interest in building 
            innovative web applications. With 1+ years of experience in the field, I've had the 
            opportunity to work on a diverse range of projects, from small websites to 
            large-scale applications.
          </p>
          <p className="text-md-text mb-4">
            My technical toolkit includes:
          </p>
          <ul className="list-disc list-inside text-md-blue mb-4">
            <li>Tools: <span className="text-md-yellow">Figma</span>, VS Code, FlutterFlow, GitHub</li>
            <li>Frontend: <span className="text-md-yellow">React</span>, JavaScript (ES6+), Tailwind CSS, Material UI, HTML5, CSS3</li>
            <li>Backend: <span className="text-md-yellow">Node.js, Express</span>, Appwrite, Firebase </li>
            <li>Databases: <span className="text-md-yellow">MongoDB</span>, MySQL</li>
            <li>DevOps: Docker, AWS, CI/CD pipelines</li>
          </ul>
          <p className="text-md-text">
            When I'm not coding, you can find me clicking photos on the streets of jaipur. I'm always eager to learn 
            new technologies and methodologies to stay at the forefront of web development.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;