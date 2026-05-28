import React, { useState } from 'react';
import { faqData } from '../data/agroData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3 border border-slate-200/60">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Desmistificando o Setor</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Esclareça as principais dúvidas sobre como a tecnologia e a preservação se unem para garantir o futuro sustentável do agronegócio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-xl transition-colors border ${
                  isOpen 
                    ? 'bg-white border-emerald-200 shadow-sm' 
                    : 'bg-white border-slate-200/60 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-emerald-700' : 'text-slate-800'
                  }`}>
                    {item.question}
                  </span>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-50 text-emerald-600 rotate-180' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-3 animate-fadeIn">
                    <p>
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Contact Hint */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Ainda com dúvidas específicas sobre a certificação da sua propriedade?{' '}
            <a href="#contato" className="text-emerald-600 font-semibold underline underline-offset-2 hover:text-emerald-700">
              Fale com um especialista
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
