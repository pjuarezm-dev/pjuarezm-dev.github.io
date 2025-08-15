import { MapPin, Linkedin,  Github, Mail } from "lucide-react"; 

const Header = () => {
  return (
    <header className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
       <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform rotate-12 animate-pulse"
            style={{
              top: `${i * 8}%`,
              left: `-20%`,
              width: '140%',
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-6">
          <a href="https://github.com/pjuarezm-dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Github className="w-5 h-5" />
          </a> 
          <a href="https://www.linkedin.com/in/pjuarezmorales" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Linkedin className="w-5 h-5" />
          </a> 
          <a href="mailto:paola.juarez.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
            <Mail className="w-5 h-5" />
          </a> 
        </div>
      </div>
 

      {/* Main content - Centered like Matt Williams */}
      <div className="container mx-auto px-8 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          
          {/* Main heading - Extra bold and large like the reference */}
          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-none tracking-tight">
            PAOLA JUÁREZ
          </h1>

          {/* Subtitle with separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-lg lg:text-xl font-mono text-slate-400 tracking-[0.2em] uppercase">
              Ingeniera Civil en Informática
            </div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="text-lg lg:text-xl font-mono text-slate-400 tracking-[0.2em] uppercase">
              Desarrolladora Full Stack
            </div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="text-lg lg:text-xl font-mono text-slate-400 tracking-[0.2em] uppercase">
              DevOps
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Especializada en construir experiencias digitales excepcionales con .NET, React y tecnologías DevOps modernas.
            19+ años transformando ideas en soluciones tecnológicas escalables.
          </p>

          {/* Contact info - bottom */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-sm text-slate-500"> 
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Valdivia, Chile</span>
            </div>
          </div>
        </div>
      </div>  
    </header>
  );
};

export default Header;