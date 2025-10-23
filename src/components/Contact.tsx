import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir une adresse email valide.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message envoyé !",
        description: "Vigninou Gédéon Akponon vous répondra bientôt.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+229 0195647502',
      href: 'tel:+2290195647502'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'gedeonvigninou@gmail.com',
      href: 'mailto:gedeonvigninou@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Abomey-Calavi, Bénin',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vigninou-ged',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vigninou-gedeon',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gedeonvigninou@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="section-header fade-in">
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Remplissez le formulaire pour me contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Informations de contact
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Je suis ouvert aux collaborations et aux opportunités dans le développement web, l’IoT et l’intelligence artificielle. Contactez-moi pour discuter de vos projets !
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted rounded-lg text-muted-foreground ${link.color} transition-colors`}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="slide-up">
            <form onSubmit={handleSubmit} className="portfolio-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Envoyez un message à Vigninou Gédéon Akponon
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;