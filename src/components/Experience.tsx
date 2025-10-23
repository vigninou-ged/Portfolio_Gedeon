import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Membre actif du laboratoire d’intelligence artificielle',
      company: 'CAEB Natitingou - Club IA',
      location: 'Natitingou, Bénin',
      duration: 'Août 2024 - Présent',
      description: [
        'Contribution à des projets en IA et IoT, incluant une voiture autonome, un système d’irrigation intelligente, et un système de reconnaissance faciale pour la gestion des présences.',
        'Conception d’un prototype de voiture autonome avec OpenCV et TensorFlow, atteignant une précision de détection d’obstacles de 85 % en environnement simulé.',
        'Développement d’un système d’irrigation intelligente utilisant des capteurs IoT et Flask, réduisant la consommation d’eau de 30 %.',
        'Implémentation d’un système de reconnaissance faciale avec Flask et PostgreSQL, optimisé pour un temps de traitement réduit de 25 %.',
        'Outils : Python, Flask, JavaScript, HTML/CSS, OpenCV, TensorFlow, MicroPython, ESP32'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">Expérience</h2>
          <p className="section-description">
            Mon parcours dans le développement IoT et l’intelligence artificielle
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative timeline-item pl-20 fade-in">
                  <div className="portfolio-card p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-medium text-foreground mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:text-right text-muted-foreground text-sm">
                        <div className="flex items-center md:justify-end mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center md:justify-end">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text-secondary flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;