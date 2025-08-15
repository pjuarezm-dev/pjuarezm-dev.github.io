import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "19+ Años de Experiencia",
      description: "Sólida trayectoria en desarrollo de software y análisis de sistemas",
      highlight: "Experiencia consolidada"
    },
    {
      icon: Target,
      title: "Sistemas Implementados",
      description: "Diseño e implementación de múltiples sistemas para estudiantes y docentes",
      highlight: "Impacto educativo"
    },
    {
      icon: Award,
      title: "Tecnologías Dominadas",
      description: "Expertise en .NET, React, bases de datos y arquitecturas modernas",
      highlight: "Stack completo"
    },
    {
      icon: Star,
      title: "Formación Continua",
      description: "Especialización en DevOps, inglés B2 y tecnologías emergentes",
      highlight: "Actualización constante"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 bg-slate-800 text-white overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent transform rotate-12"
            style={{
              top: `${i * 12}%`,
              left: `-20%`,
              width: '140%',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-mono text-sm text-slate-400 tracking-wider mb-4">
              &lt; LOGROS /&gt;
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              DESTACADOS
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Principales hitos y reconocimientos en mi carrera profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm text-center hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="p-4 bg-purple-500/10 rounded-full w-fit mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-lg">{achievement.title}</h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{achievement.description}</p>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                    {achievement.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "19+", label: "Años de experiencia" },
              { number: "10+", label: "Tecnologías dominadas" },
              { number: "5+", label: "Proyectos completados" },
              { number: "B2", label: "Nivel de inglés" }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-black text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  {metric.number}
                </div>
                <div className="text-sm text-slate-400 font-mono tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;