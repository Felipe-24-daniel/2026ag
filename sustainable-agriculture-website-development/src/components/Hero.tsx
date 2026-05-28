import React from 'react';
import { ArrowDown, ShieldCheck, Cpu, Sprout } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      
      {/* Background Image with optimized dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/34677188/pexels-photo-34677188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" 
          alt="Campos agrícolas sustentáveis integrados à floresta nativa" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-emerald-950/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
              O Novo Paradigma do Agronegócio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Agro forte, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">
              futuro sustentável.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            O equilíbrio definitivo entre a <strong className="font-semibold text-white">máxima produtividade</strong> e o <strong className="font-semibold text-white">respeito incondicional ao meio ambiente</strong>. Conheça as tecnologias, os pilares e os dados que provam que a conservação é o melhor insumo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#o-equilibrio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Explorar o Equilíbrio</span>
              <ArrowDown className="w-4 h-4 text-emerald-600 group-hover:translate-y-0.5 transition-transform" />
            </a>
            
            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600/80 hover:bg-emerald-600 backdrop-blur-md border border-emerald-500/30 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>Calcular Pegada Rural</span>
            </a>
          </div>

          {/* Trust points / mini badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Código Florestal</h4>
                <p className="text-xs text-slate-400">Proteção ativa nas fazendas</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Agro 4.0</h4>
                <p className="text-xs text-slate-400">Otimização de cada insumo</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Regenerativo</h4>
                <p className="text-xs text-slate-400">Solo vivo e carbono neutro</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave / subtle curve */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
};
