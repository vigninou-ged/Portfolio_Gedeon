import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: 'Langages & Bases de Données',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Script Shell', level: 75 }
      ]
    },
    {
      category: 'Bibliothèques',
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'scikit-learn', level: 80 },
        { name: 'matplotlib', level: 75 }
      ]
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Keras', level: 80 },
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 }
      ]
    },
    {
      category: 'Autres Outils',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'AWS', level: 80 },
        { name: 'Heroku', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">Compétences</h2>
          <p className="section-description">
            Technologies et outils pour des solutions web et IoT innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="slide-up">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;