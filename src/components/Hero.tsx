import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="fade-in animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Salut, je suis</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vigninou Gédéon Akponon
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ingénieur en Intelligence Artificielle & Développeur IoT
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Je transforme la data en décisions et la technologie embarquée en solutions durables. Mon objectif : allier innovation, impact et performance au service d’un futur intelligent.
          </p>
        </div>

        <div className="slide-up animate flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={scrollToAbout}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            En savoir plus
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/vigninou-ged" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/vigninou-gedeon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:gedeonvigninou@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="slide-up animate grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="portfolio-card p-6">
            <h3 className="text-2xl font-semibold mb-2 text-primary">10+</h3>
            <p className="text-muted-foreground">Projets IoT & Web</p>
          </div>
          <div className="portfolio-card p-6">
            <h3 className="text-2xl font-semibold mb-2 text-primary">3+</h3>
            <p className="text-muted-foreground">Années d'expérience</p>
          </div>
          <div className="portfolio-card p-6">
            <h3 className="text-2xl font-semibold mb-2 text-primary">5+</h3>
            <p className="text-muted-foreground">Solutions déployées</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;