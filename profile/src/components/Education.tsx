import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Ingeniería Civil en Informática",
    institution: "Universidad Austral de Chile",
    location: "Valdivia, Chile",
    period: "1998 – 2005"
  };

  const certifications = [
    {
      title: "Bootcamp Fundamentos DevOps",
      provider: "Adalid / Talento Digital",
      status: "En curso",
      year: "2024",
      description: "Formación integral en metodologías DevOps, CI/CD, Docker y Terraform"
    },
    {
      title: "Programa Inglés para Servicios Globales",
      provider: "CORFO",
      status: "Completado",
      year: "2023",
      description: "Especialización en inglés técnico para servicios tecnológicos globales"
    }
  ];

  const achievements = [
    {
      title: "Implementación GitLab CI/CD",
      description: "Implementé GitLab como herramienta de control de versiones y definí el GitLab Workflow para el departamento, mejorando los procesos de CI/CD."
    },
    {
      title: "Liderazgo en Capacitaciones",
      description: "Lideré capacitaciones al equipo en el uso de DevExpress, estandarizando componentes y aumentando la productividad."
    },
    {
      title: "Referente Tecnológico",
      description: "Actúo como referente tecnológico, investigando y difundiendo nuevas herramientas y metodologías al equipo de desarrollo."
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent transform rotate-12"
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
              &lt; FORMACIÓN /&gt;
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              Y LOGROS
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white font-black tracking-tight">Formación Académica</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-black text-purple-400 mb-2 tracking-tight">{education.degree}</h3>
                  <p className="text-white font-bold">{education.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-3 tracking-tight">
                <Award className="w-5 h-5 text-purple-400" />
                CURSOS Y CERTIFICACIONES
              </h3>
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white tracking-tight">{cert.title}</h4>
                      <Badge variant={cert.status === "En curso" ? "default" : "secondary"} className={`text-xs ${cert.status === "En curso" ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-green-500/20 text-green-300 border-green-500/30"}`}>
                        {cert.status}
                      </Badge>
                    </div>
                    <p className="text-purple-400 font-bold mb-2 text-sm">{cert.provider} • {cert.year}</p>
                    <p className="text-slate-400 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-black text-white mb-6 text-center tracking-tight">LOGROS DESTACADOS</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-black text-purple-400 mb-2 text-sm tracking-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Education;