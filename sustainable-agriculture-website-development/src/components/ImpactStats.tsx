import React from 'react';
import { impactStats } from '../data/agroData';
import { ShieldCheck, Sprout, TestTube2, CloudRain } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  Sprout,
  TestTube2,
  CloudRain
};

export const ImpactStats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-1">
            Métricas de Impacto Real
          </h2>
          <p className="text-slate-600 text-sm">
            Dados oficiais que evidenciam como o campo brasileiro atua como o maior guardião ambiental do planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactStats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Sprout;
            
            return (
              <div 
                key={idx} 
                className="relative p-5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-slate-100/80 group"
              >
                {/* Top flex: Icon + subtle indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Dado #{idx + 1}
                  </span>
                </div>

                {/* Big Value */}
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Small footer note */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            *Fontes: Embrapa, Ministério da Agricultura e Pecuária (MAPA) e Observatório do Código Florestal.
          </p>
        </div>

      </div>
    </section>
  );
};
