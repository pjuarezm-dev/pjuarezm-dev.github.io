const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-12 border-t border-slate-800/50 overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 opacity-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent transform rotate-12"
            style={{
              top: `${i * 15}%`,
              left: `-20%`,
              width: '140%',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Profile */}
            <div className="space-y-4 justify-self-start">
              <div className="font-mono text-sm text-slate-400 tracking-wider mb-2">
                &lt; DEVELOPER /&gt;
              </div>
              <h3 className="text-2xl font-black tracking-tight">PAOLA JUÁREZ MORALES</h3>
              <p className="text-slate-300 leading-relaxed">
                Ingeniera Civil en Informática especializada en desarrollo de software, 
                análisis de sistemas y tecnologías web modernas.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 justify-self-end">
              <h4 className="text-lg font-black tracking-tight">NAVEGACIÓN</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-purple-400 transition-colors font-mono text-sm tracking-wider hover:translate-x-2 duration-300"
                >
                  → Perfil Profesional
                </button>
                <button 
                  onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-purple-400 transition-colors font-mono text-sm tracking-wider hover:translate-x-2 duration-300"
                >
                  → Experiencia
                </button>
                <button 
                  onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-purple-400 transition-colors font-mono text-sm tracking-wider hover:translate-x-2 duration-300"
                >
                  → Formación
                </button>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-purple-400 transition-colors font-mono text-sm tracking-wider hover:translate-x-2 duration-300"
                >
                  → Contacto
                </button>
              </div>
            </div> 
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-mono">
              © 2025 PAOLA JUÁREZ MORALES. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1"> 
              <span className="font-mono">HECHO USANDO REACT & TAILWIND CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;