import React, { useState } from 'react';
import { technologiesData } from '../data/agroData';
import { Navigation, Droplets, Sun, Sparkles, Link, Factory, Cpu } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Navigation,
  Droplets,
  Sun,
  Sparkles,
  Link,
  Factory
};

export const Technologies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'agua' | 'solo' | 'emissoes' | 'energia'>('todos');

  const filteredTechs = activeFilter === 'todos' 
    ? technologiesData 
    : technologiesData.filter(t => t.category === activeFilter);

  const filterButtons = [
    { id: 'todos', label: 'Todas as Tecnologias' },
    { id: 'agua', label: 'Recursos Hídricos' },
    { id: 'solo', label: 'Nutrição do Solo' },
    { id: 'emissoes', label: 'Controle de Emissões' },
    { id: 'energia', label: 'Matriz Energética' }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3 border border-emerald-100">
            <Cpu className="w-3.5 h-3.5" />
            <span>Inovação no Campo</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Tecnologias que Viabilizam <br className="hidden sm:inline" />
            o Equilíbrio
          </h2>
          <p className="text-slate-600 text-base">
            O **Agro 4.0** substitui o excesso de insumos por inteligência. Explore as ferramentas que transformam dados e biologia na chave para o futuro sustentável.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === btn.id
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTechs.map((tech) => {
            const TechIcon = iconMap[tech.iconName] || Navigation;

            return (
              <div 
                key={tech.id} 
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                
                {/* Image top */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img 
                    src={tech.imageUrl} 
                    alt={tech.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                    {tech.category}
                  </span>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <TechIcon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-base leading-tight drop-shadow">
                      {tech.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {tech.description}
                  </p>

                  {/* Impact bottom */}
                  <div className="pt-3 border-t border-slate-200/80 mt-auto">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">
                      Impacto Mensurado
                    </span>
                    <p className="text-xs font-semibold text-emerald-700">
                      {tech.impact}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if all items of a category were missing */}
        {filteredTechs.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-500">Nenhuma tecnologia encontrada para esta categoria.</p>
          </div>
        )}

      </div>
    </section>
  );
};
