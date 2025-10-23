import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aiDashboardImage from '@/assets/project-ai-dashboard.jpg';
import iotNetworkImage from '@/assets/project-iot-network.jpg';
import computerVisionImage from '@/assets/project-computer-vision.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Plateforme complète d\'analyse de données avec ML intégré. Interface intuitive pour visualiser et interpréter des modèles complexes de machine learning en temps réel.',
      image: aiDashboardImage,
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      title: 'Smart IoT Network',
      description: 'Réseau de capteurs intelligents pour la surveillance industrielle. Solution complète avec collecte de données, analyse prédictive et alertes en temps réel.',
      image: iotNetworkImage,
      tags: ['Arduino', 'Raspberry Pi', 'MQTT', 'InfluxDB', 'Grafana'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      title: 'Computer Vision Suite',
      description: 'Suite d\'outils de vision par ordinateur pour la détection d\'objets et la reconnaissance faciale. Modèles optimisés pour la production avec API scalable.',
      image: computerVisionImage,
      tags: ['PyTorch', 'OpenCV', 'Docker', 'AWS', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">Projets</h2>
          <p className="section-description">
            Quelques-uns de mes projets les plus représentatifs en Data Science et IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card overflow-hidden group fade-in ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tag}
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