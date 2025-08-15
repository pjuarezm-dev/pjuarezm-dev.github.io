import { Card, CardContent } from "@/components/ui/card"; 
import { Mail, MapPin, Linkedin} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "paola.juarez.dev@gmail.com",
      href: "mailto:paola.juarez.dev@gmail.com"
    }, 
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Valdivia, Los Ríos, Chile",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pjuarezmorales",
      href: "https://www.linkedin.com/in/pjuarezmorales"
    }
  ];
 
  return (
    <section id="contact" className="relative py-20 bg-slate-800 text-white overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform rotate-12"
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
              &lt; CONTACTO /&gt;
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              HABLEMOS
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              ¿Interesado en colaborar? No dudes en contactarme para discutir oportunidades y proyectos.
            </p>
          </div>

          <div className="grid gap-8"> 
            <div className="space-y-6">
              <h3 className="text-xl font-black text-white tracking-tight">INFORMACIÓN DE CONTACTO</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/70 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <contact.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-white hover:text-purple-400 transition-colors break-all text-sm font-semibold"
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-white text-sm">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div> 
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;