import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Code, BookOpen, ChevronRight,  createLucideIcon, type LucideProps } from "lucide-react";
import { bee } from '@lucide/lab';

const Bee = createLucideIcon("Bee", bee);

type Experiences = {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  icon: React.ComponentType<LucideProps>; // siempre un componente
  color: string;
  achievements: string[];
  technologies: string[];
};

const Experience = () => {
  const experiences: Experiences[]  = [
    {
      title: "Analista de Sistemas",
      company: "Universidad Austral de Chile",
      location: "Valdivia",
      period: "2005 – Actual",
      duration: "19 años",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Diseño e implementación de sistemas para estudiantes y docentes",
        "Desarrollo de módulos en plataformas web y móviles",
        "Integración de sistemas con bases de datos SQL Server y Sybase",
        "Análisis comparativo de tecnologías: React, Angular, Vue.js",
        "Implementación de OAuth y JWT para microservicios",
        "Desarrollo de aplicaciones móviles multiplataforma"
      ],
      technologies: [".NET Framework", ".NET Core", "C#", "VB.NET", "React", "Angular", "Vue", "OAuth", "JWT", "SQL Server"]
    },
    {
      title: "Red ANR - Proyecto Personal",
      company: "Red de Apicultura Natural Regenerativa",
      location: "Online",
      period: "2024 – 2025",
      duration: "1 año",
      icon: Bee,
      color: "from-yellow-500 to-yellow-600",
      achievements: [
        "Diseño e implementación de SPA interactiva con arquitectura modular",
        "Desarrollo full-stack con React.js, Node.js y Tailwind CSS"
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "SPA"]
    },    
    {
      title: "TralkanComics - Proyecto Personal",
      company: "Fondo Cultura, las Artes y el Patrimonio",
      location: "Online",
      period: "2024 – 2025",
      duration: "1 año",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      achievements: [
        "Diseño e implementación de SPA interactiva con arquitectura modular",
        "Desarrollo full-stack con React.js, Node.js y Tailwind CSS"
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "SPA"]
    },
    {
      title: "Relatora SQL Server",
      company: "CAPITALH",
      location: "Online",
      period: "2023 (Oct – Dic)",
      duration: "3 meses",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
      achievements: [
        "Impartir formación online especializada en SQL Server",
        "Enseñanza práctica de SQL Server Management Studio"
      ],
      technologies: ["SQL Server", "SSMS", "Capacitación"]
    } 
  ];

  return (
    <section id="experience" className="relative py-20 bg-slate-800 text-white overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform rotate-12"
            style={{
              top: `${i * 8}%`,
              left: `-20%`,
              width: '140%',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-slate-400 tracking-wider mb-4">
              &lt; EXPERIENCIA /&gt;
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              PROFESIONAL
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Más de 19 años transformando ideas en soluciones tecnológicas innovadoras
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Timeline */}
            <div className="hidden lg:block mb-16">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary/30"></div>
              
              {/* Timeline dots and years */}
              <div className="flex justify-between items-center relative">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex flex-col items-center group cursor-pointer">
                    {/* Timeline dot */}
                    <div className={`w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center`}>
                      <exp.icon className="w-3 h-3 text-white" />
                    </div>
                    {/* Year label */}
                    <div className="mt-3 text-sm font-bold text-accent group-hover:text-white transition-colors duration-200">
                      {exp.period.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 hover:border-purple-500/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-purple-500 h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}>
                            <exp.icon className="w-6 h-6 text-white" /> 
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-black text-white mb-1 line-clamp-2 tracking-tight">{exp.title}</h3>
                            <h4 className="text-base font-bold text-purple-400 mb-2">{exp.company}</h4>
                            
                            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.period}</span>
                              </div>
                              <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                                {exp.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="font-black text-white mb-3 flex items-center gap-2 text-sm tracking-tight">
                            <ChevronRight className="w-4 h-4 text-purple-400" />
                            LOGROS PRINCIPALES
                          </h5>
                          <div className="space-y-2">
                            {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start gap-2 group/item">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span className="text-xs text-slate-400 leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                            {exp.achievements.length > 3 && (
                              <div className="text-xs text-purple-400 font-medium">
                                +{exp.achievements.length - 3} logros más
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h5 className="font-black text-white mb-2 flex items-center gap-2 text-sm tracking-tight">
                            <ChevronRight className="w-4 h-4 text-purple-400" />
                            TECNOLOGÍAS
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="secondary" 
                                className="text-xs bg-slate-800/70 text-slate-300 border-slate-600/50 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200 cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {exp.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{exp.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">19+</div>
              <div className="text-sm font-medium text-slate-400 font-mono tracking-wider uppercase">Años de experiencia</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">4</div>
              <div className="text-sm font-medium text-slate-400 font-mono tracking-wider uppercase">Empresas</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-sm font-medium text-slate-400 font-mono tracking-wider uppercase">Tecnologías</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm font-medium text-slate-400 font-mono tracking-wider uppercase">Compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;