import ProjectCard from '../components/ProjectCard';
// Import your images
import profileImage from '../assets/profile.jpg';
import ecommerceImage from '../assets/ecommerce.jpg';
import taskManagerImage from '../assets/task-manager.jpg';
import weatherImage from '../assets/weather.jpg';

const technologies = [
  { name: 'HTML5', icon: '/icons/html5.png' },
  { name: 'CSS3', icon: '/icons/css3.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
];


const Home = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform with cart functionality.",
      imageUrl: ecommerceImage,
      projectUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects.",
      imageUrl: taskManagerImage,
      projectUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information for locations worldwide.",
      imageUrl: weatherImage,
      projectUrl: "#"
    }
  ];

  const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hi, I'm Apdukhaadir Moha <br /> a Front-End Developer</h1>
            <p className="text-xl text-gray-600 mb-8">
              I create beautiful, responsive websites and web applications using modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View My Work
              </a>
              <a href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center ">
            <img 
              src={profileImage} 
              alt="Apdukhaadir Moha" 
             className="rounded-lg shadow-xl h-[400px]"

            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Technologies I Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="h-16 w-16 mb-2" />
              <span className="text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;