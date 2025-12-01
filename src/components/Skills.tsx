"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  SiAmazonwebservices,
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiScikitlearn,
  SiShell,
} from "react-icons/si";
import { BiLineChart } from "react-icons/bi"; // Alternative pour Matplotlib

const iconMap = {
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  shell: SiShell,
  numpy: SiNumpy,
  pandas: SiPandas,
  opencv: SiOpencv,
  "scikit-learn": SiScikitlearn,
  matplotlib: BiLineChart, // Graphique au lieu de Matplotlib inexistant
  django: SiDjango,
  flask: SiDjango,
  bootstrap: SiBootstrap,
  keras: SiTensorflow,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  git: SiGit,
  aws: SiAmazonwebservices,
  heroku: SiHeroku,
};

function Skills() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const skills = {
    langages: [
      { name: "Python", icon: "python" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Script Shell", icon: "shell" },
    ],
    bibliotheques: [
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Scikit-learn", icon: "scikit-learn" },
      { name: "Matplotlib", icon: "matplotlib" },
    ],
    frameworks: [
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Keras", icon: "keras" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
    ],
    outils: [
      { name: "Git", icon: "git" },
      { name: "AWS", icon: "aws" },
      { name: "Heroku", icon: "heroku" },
    ],
  };

  const categoryLabels = {
    langages: "Langages & Bases de Données",
    bibliotheques: "Bibliothèques",
    frameworks: "Frameworks",
    outils: "Autres Outils",
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Compétences</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground">
            Technologies et outils pour des solutions web et IoT innovantes
          </p>

          <Tabs defaultValue="langages" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {Object.keys(skills).map((category) => (
                <TabsTrigger key={category} value={category}>
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category}>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => {
                    const Icon = iconMap[skill.icon as keyof typeof iconMap];

                    if (!Icon) return null;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative"
                        onMouseMove={(e) => {
                          const bounds = e.currentTarget.getBoundingClientRect();
                          mouseX.set(e.clientX - bounds.left);
                          mouseY.set(e.clientY - bounds.top);
                        }}
                      >
                        <motion.div
                          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                          style={{
                            background: useMotionTemplate`
                              radial-gradient(
                                500px circle at ${mouseX}px ${mouseY}px,
                                rgba(var(--primary-rgb), 0.15),
                                transparent 80%
                              )
                            `,
                          }}
                        />
                        <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2">
                              <Icon className="w-6 h-6 text-primary" />
                              <h3 className="font-medium">{skill.name}</h3>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
