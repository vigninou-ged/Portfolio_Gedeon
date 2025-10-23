import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Licence en Mathématiques et Informatique',
      school: 'Université Nationale des Sciences, Techniques, Ingénierie et Mathématiques (UNSTIM)',
      year: 'En cours',
      description: 'Formation en cours à la FAST, Natitingou, Bénin. Cours pertinents : Systèmes de bases de données distribuées, Informatique en nuage, Fondations des algorithmes.',
      honors: null
    }
  ];

  return (
    <section id="education" className="section-padding bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">Éducation</h2>
          <p className="section-description">
            Formation académique en mathématiques et informatique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 fade-in">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-foreground">Formation Académique</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="portfolio-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {edu.degree}
                    </h4>
                    <h5 className="text-foreground font-medium mb-2">{edu.school}</h5>
                    {edu.honors && (
                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 text-secondary mr-2" />
                        <span className="text-sm text-secondary font-medium">{edu.honors}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;