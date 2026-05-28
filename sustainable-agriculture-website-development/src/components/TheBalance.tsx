import React, { useState } from 'react';
import { Scale, CheckCircle2, XCircle, TrendingUp, Globe2 } from 'lucide-react';

export const TheBalance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sustentavel' | 'tradicional'>('sustentavel');

  const comparisonData = {
    tradicional: [
      { title: 'Expansão Territorial', desc: 'Aumento da produção condicionado à abertura de novas áreas e supressão de vegetação nativa.' },
      { title: 'Manejo de Insumos', desc: 'Aplicações preventivas e em calendário fixo de químicos, gerando lixiviação e custos elevados.' },
      { title: 'Saúde do Solo', desc: 'Revolvimento contínuo com arados, deixando a terra exposta à erosão e perda de matéria orgânica.' },
      { title: 'Visão de Curto Prazo', desc: 'Foco exclusivo no rendimento da safra atual, ignorando a exaustão biológica da propriedade.' },
    ],
    sustentavel: [
      { title: 'Intensificação Vertical', desc: 'Aumento expressivo de produtividade na mesma área através de genética, ILPF e recuperação de pastagens.' },
      { title: 'Precisão e Bioinsumos', desc: 'Uso de drones e biológicos para aplicar a dose exata, protegendo a fauna e economizando recursos.' },
      { title: 'Agricultura Regenerativa', desc: 'Plantio direto contínuo e mix de plantas de cobertura, transformando o solo em uma esponja de água e carbono.' },
      { title: 'Longevidade e Certificação', desc: 'Garantia de sucessão familiar, valorização da terra e acesso a prêmios em mercados globais exigentes.' },
    ]
  };

  return (
    <section id="o-equilibrio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>O Desafio do Século</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            A Falsa Dicotomia: <br />
            <span className="text-emerald-600">Produzir vs. Preservar</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Durante anos, acreditou-se que para alimentar o mundo era necessário sacrificar a natureza. A ciência agronômica moderna provou o oposto: a rentabilidade de longo prazo depende diretamente dos serviços ecossistêmicos que a própria floresta e o solo vivo oferecem.
          </p>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden mb-16">
          
          {/* Tab Controls */}
          <div className="grid grid-cols-2 border-b border-slate-100 bg-slate-50/50">
            <button
              onClick={() => setActiveTab('sustentavel')}
              className={`py-4 px-6 text-center font-heading font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                activeTab === 'sustentavel'
                  ? 'bg-white text-emerald-600 border-b-2 border-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${activeTab === 'sustentavel' ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>Visão AgroSustenta</span>
            </button>
            
            <button
              onClick={() => setActiveTab('tradicional')}
              className={`py-4 px-6 text-center font-heading font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                activeTab === 'tradicional'
                  ? 'bg-white text-amber-600 border-b-2 border-amber-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <XCircle className={`w-5 h-5 ${activeTab === 'tradicional' ? 'text-amber-600' : 'text-slate-400'}`} />
              <span>Modelo Tradicional</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {comparisonData[activeTab].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 rounded-xl border ${
                    activeTab === 'sustentavel' 
                      ? 'bg-emerald-50/30 border-emerald-100' 
                      : 'bg-amber-50/30 border-amber-100'
                  }`}
                >
                  <h4 className={`text-base font-bold mb-2 flex items-center gap-2 ${
                    activeTab === 'sustentavel' ? 'text-emerald-900' : 'text-amber-900'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      activeTab === 'sustentavel' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`} />
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom summary pill */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-medium text-slate-500">
                {activeTab === 'sustentavel' 
                  ? '✨ Resultado: Maior resiliência climática e margens de lucro sustentáveis.'
                  : '⚠️ Resultado: Degradação progressiva e maior vulnerabilidade a pragas e secas.'}
              </div>
              
              <button
                onClick={() => setActiveTab(activeTab === 'sustentavel' ? 'tradicional' : 'sustentavel')}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
              >
                Ver o outro modelo
              </button>
            </div>
          </div>

        </div>

        {/* Dual Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* For the Farmer */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/60 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full z-0 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                Para o Produtor Rural
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Redução de custos</strong> com a substituição parcial de adubos químicos por fixação biológica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Estabilidade produtiva</strong> frente a veranicos, graças a um solo com maior capacidade de retenção de água.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Acesso a prêmios de preço</strong> e linhas de crédito com taxas de juros mais vantajosas (Green Finance).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For the Planet */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/60 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full z-0 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                Para o Meio Ambiente
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Sequestro de Carbono</strong> em larga escala, transformando a lavoura em uma ferramenta contra o aquecimento global.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Preservação da Biodiversidade</strong> com a manutenção de corredores ecológicos e respeito às Áreas de Preservação Permanente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Conservação dos Recursos Hídricos</strong>, evitando o assoreamento de rios e a contaminação de aquíferos.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
