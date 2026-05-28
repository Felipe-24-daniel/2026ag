import React, { useState } from 'react';
import { successCases } from '../data/agroData';
import { MapPin, Quote, TrendingUp, Leaf, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

export const SuccessCases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % successCases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + successCases.length) % successCases.length);
  };

  const current = successCases[currentIndex];

  return (
    <section id="casos" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase block mb-2">
            A Teoria na Prática
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Casos de Sucesso: O Equilíbrio <br className="hidden sm:inline" />
            em Números Reais
          </h2>
          <p className="text-slate-600 text-base">
            Conheça as trajetórias de fazendas brasileiras que superaram a estagnação produtiva transformando a sustentabilidade na espinha dorsal de sua gestão.
          </p>
        </div>

        {/* Success Case Carousel / Slider Layout */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left side: Image and Quick Stats */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-100 flex flex-col justify-between">
              
              <img 
                src={current.imageUrl} 
                alt={current.farmName} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

              {/* Location Top Tag */}
              <div className="relative z-10 p-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{current.location}</span>
                </div>
              </div>

              {/* Farm info Bottom */}
              <div className="relative z-10 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {current.farmName}
                </h3>
                <p className="text-xs text-emerald-300 font-medium">
                  {current.culture}
                </p>
              </div>

            </div>

            {/* Right side: Story, Results, Quote and Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              
              <div>
                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  
                  {/* Productivity */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1 text-slate-400 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Produção</span>
                    </div>
                    <div className="font-heading font-extrabold text-slate-900 text-sm sm:text-base">
                      {current.results.productivityIncrease}
                    </div>
                  </div>

                  {/* Carbon */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1 text-slate-400 mb-1">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Emissões</span>
                    </div>
                    <div className="font-heading font-extrabold text-slate-900 text-sm sm:text-base">
                      {current.results.carbonReduction}
                    </div>
                  </div>

                  {/* Water */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1 text-slate-400 mb-1">
                      <Droplets className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Água</span>
                    </div>
                    <div className="font-heading font-extrabold text-slate-900 text-sm sm:text-base">
                      -{current.results.waterSaved}
                    </div>
                  </div>

                </div>

                {/* Story */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    O Desafio e a Solução
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {current.story}
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-emerald-50/50 p-4 rounded-xl border-l-4 border-emerald-600 relative mb-8">
                  <Quote className="w-6 h-6 text-emerald-600/20 absolute top-2 right-2 pointer-events-none" />
                  <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed font-medium">
                    "{current.quote}"
                  </p>
                  <span className="block text-[11px] font-bold text-emerald-800 mt-2">
                    — {current.ownerName}
                  </span>
                </div>

              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center gap-1.5">
                  {successCases.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Ir para caso ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCase}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Caso anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCase}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                    aria-label="Próximo caso"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
