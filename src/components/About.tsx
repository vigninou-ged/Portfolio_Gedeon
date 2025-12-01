import { Brain, Code, Database, Zap } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Machine Learning, Deep Learning, Computer Vision'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analyse de données, Visualisation, Modélisation'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Python, JavaScript, Flask, Django, API REST'
    },
    {
      icon: Zap,
      title: 'IoT & Systèmes Embarqués',
      description: 'Arduino, ESP32, MicroPython, MQTT'
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">À propos</h2>
          <p className="section-description">
            Étudiant passionné en Mathématiques et Informatique, spécialisé en IA et IoT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Étudiant à l’Université Nationale des Sciences, Techniques, Ingénierie et Mathématiques (UNSTIM), je suis un développeur fullstack spécialisé en data science, intelligence artificielle, IoT et systèmes embarqués. Je conçois des solutions connectées et des applications web performantes, transformant des idées complexes en projets à fort impact.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Animé par une curiosité insatiable, j’explore les technologies de pointe pour créer des solutions innovantes et durables, tout en poursuivant mon apprentissage pour relever les défis technologiques de demain.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TensorFlow', 'Flask', 'Django', 'OpenCV', 'AWS', 'PostgreSQL', 'MicroPython'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 slide-up">
            {expertise.map((item, index) => (
              <div key={index} className="portfolio-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;