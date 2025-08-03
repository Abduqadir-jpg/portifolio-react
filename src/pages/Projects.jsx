import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const allProjects = [
    {
      title: 'E-commerce Website',
      description:
        'A full-featured online store with cart functionality and payment processing. Built with React, Node.js, and MongoDB.',
      liveLink: 'https://example-ecommerce.com',
      githubLink: 'https://github.com/username/ecommerce',
    },
    {
      title: 'Task Management App',
      description:
        'A productivity app to organize and track your daily tasks and projects. Features include drag-and-drop interface and team collaboration.',
      liveLink: 'https://example-tasks.com',
      githubLink: 'https://github.com/username/task-manager',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather information with 5-day forecast. Integrates with multiple weather APIs and provides location-based services.',
      liveLink: 'https://example-weather.com',
      githubLink: 'https://github.com/username/weather-app',
    },
    {
      title: 'Recipe Finder',
      description:
        'Search for recipes based on ingredients you have. Includes nutritional information and step-by-step cooking instructions.',
      githubLink: 'https://github.com/username/recipe-finder',
    },
    {
      title: 'Portfolio Template',
      description:
        'A responsive portfolio template for developers and designers. Easy to customize with your own content and styling.',
      liveLink: 'https://example-portfolio.com',
      githubLink: 'https://github.com/username/portfolio-template',
    },
  ]

  return (
    <div>
      <Header />
      <section className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects