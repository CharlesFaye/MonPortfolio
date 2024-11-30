import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Application Djay Suñu Mbay',
      description: 'Application de commerce basique conçue avec Java et XML',
      image: 'src/images/img_app.jpg',
      technologies: ['Java', 'XML'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/CharlesFaye/DSMApp',
    },
    {
      title: 'Site web Djay Suñu Mbay',
      description: 'Site web de commerce conçu avec WordPress en plus de l\'incontournable Elementor. ',
      image: 'src/images/imgdsm.png',
      technologies: ['WordPress', 'Elementor', 'smart-slider'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/CharlesFaye/DSM_WP_Site',
    },
    {
      title: 'Construction-Hub',
      description: 'Un site de B.T.P construit avec WordPress et Elementor.',
      image: 'src/images/btp.png',
      technologies: ['WordPress', 'Elementor'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/CharlesFaye/BTP_WP',
    },
    {
      title: 'Bibliothèque Virtuelle',
      description: 'Une application web de gestion de livres construite avec du HTML, du CSS et du JavaScript.',
      image: 'src/images/biblio.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/CharlesFaye/biblio',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Projets Réalisés</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="hidden group-hover:flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;