import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, category: "Frontend", technologies: ["React.js", "Blazor", "ASP.NET MVC", "JavaScript", "Bootstrap"] },
    { icon: Server, category: "Backend", technologies: [".NET Framework", ".NET Core", "C#", "Visual Basic .NET"] },
    { icon: Database, category: "Bases de Datos", technologies: ["SQL Server", "Sybase", "PostgreSQL", "MySQL"] },
    { icon: Globe, category: "DevOps & Otros", technologies: ["Docker", "GitLab CI", "Terraform", "OAuth", "JWT"] }
  ];

  return (
    <section id="about" className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform rotate-12"
            style={{
              top: `${i * 10}%`,
              left: `-20%`,
              width: '140%',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-slate-400 tracking-wider mb-4">
              &lt; PERFIL /&gt;
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              SOBRE MÍ
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Profile Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Ingeniera Civil en Informática con <strong className="text-white">sólida formación en desarrollo de software</strong>, 
                análisis de sistemas y gestión de proyectos tecnológicos. Experiencia en ambientes .NET 
                (.NET Framework, .NET Core, Blazor, SQL Server) y tecnologías web.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Especialización en inglés para servicios globales y formación en <strong className="text-white">DevOps</strong> 
                (CI/CD, Docker, Terraform y administración Linux). Apasionada por la innovación y el aprendizaje continuo, 
                comprometida con la implementación de <strong className="text-white">soluciones tecnológicas escalables</strong>.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Destacada en trabajo en equipos interdisciplinarios, resolución de problemas y adaptación a nuevas tecnologías.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">19+ años de experiencia</Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">Inglés B2</Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">DevOps en formación</Badge>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                        <skill.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="font-black text-white tracking-tight">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-slate-600/50 text-slate-300 hover:border-purple-400 hover:text-purple-300 transition-colors bg-slate-700/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;