import React, { useState } from 'react';
import { pillarsData } from '../data/agroData';
import { Layers, Dna, Cpu, Recycle, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layers,
  Dna,
  Cpu,
  Recycle
};

export const Pillars: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(pillarsData[0].id);

  const currentPillar = pillarsData.find(p => p.id === activePillarId) || pillarsData[0];
  const CurrentIcon = iconMap[currentPillar.iconName] || Layers;

  return (
    <section id="pilares" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase block mb-2">
            Fundamentos de Alta Performance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Os 4 Pilares da Sustentabilidade <br className="hidden sm:inline" />
            no Campo
          </h2>
          <p className="text-slate-600 text-base">
            Conheça as estratégias cientificamente validadas que permitem ao produtor rural multiplicar seus rendimentos enquanto regenera ativamente o ecossistema local.
          </p>
        </div>

        {/* Main Grid: Tabs on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillarsData.map((pillar) => {
              const IconComp = iconMap[pillar.iconName] || Layers;
              const isActive = pillar.id === activePillarId;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`w-full text-left p-5 rounded-xl transition-all flex items-start gap-4 border ${
                    isActive 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/10' 
                      : 'bg-slate-50 text-slate-800 border-slate-200/60 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center mt-0.5 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white text-emerald-700 shadow-sm'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-heading font-bold text-base mb-1 ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}>
                      {pillar.title}
                    </h3>
                    <p className={`text-xs line-clamp-1 ${
                      isActive ? 'text-emerald-100' : 'text-slate-500'
                    }`}>
                      {pillar.subtitle}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className={`self-center ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Master View */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/60 relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 animate-fadeIn" key={currentPillar.id}>
              
              {/* Top Meta */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase block">
                    Pilar em Foco
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    {currentPillar.title}
                  </h3>
                </div>
              </div>

              {/* Subtitle & Description */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">
                  {currentPillar.subtitle}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentPillar.description}
                </p>
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Principais Vantagens e Impactos
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPillar.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat Highlight Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Métrica de Sucesso
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {currentPillar.statLabel}
                  </p>
                </div>
                <div className="font-heading text-3xl font-extrabold text-emerald-600 shrink-0">
                  {currentPillar.stat}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
