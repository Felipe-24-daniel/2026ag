import React, { useState } from 'react';
import { Calculator, Sparkles, Droplets, Leaf, Award, ArrowRight, HelpCircle } from 'lucide-react';

export const Simulator: React.FC = () => {
  // Inputs
  const [farmSize, setFarmSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [culture, setCulture] = useState<'graos' | 'pecuaria' | 'hortifruti' | 'silvicultura'>('graos');
  
  const [practices, setPractices] = useState({
    plantioDireto: true,
    energiaSolar: false,
    rastreabilidade: false,
    bioinsumos: true,
    ilpf: false
  });

  const handlePracticeToggle = (key: keyof typeof practices) => {
    setPractices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculations
  const calculateMetrics = () => {
    let baseScore = 30; // base legal compliance

    if (practices.plantioDireto) baseScore += 15;
    if (practices.energiaSolar) baseScore += 10;
    if (practices.rastreabilidade) baseScore += 15;
    if (practices.bioinsumos) baseScore += 15;
    if (practices.ilpf) baseScore += 15;

    // Culture adjustments
    if (culture === 'silvicultura') baseScore += 5;

    const finalScore = Math.min(100, baseScore);

    // Dynamic Outputs based on size & score
    let sizeMultiplier = 1;
    if (farmSize === 'small') sizeMultiplier = 60;
    else if (farmSize === 'medium') sizeMultiplier = 450;
    else sizeMultiplier = 2500;

    // Water savings %
    let waterSavings = 10;
    if (practices.plantioDireto) waterSavings += 15;
    if (practices.ilpf) waterSavings += 10;
    if (practices.energiaSolar) waterSavings += 5;

    // Carbon sequestered (tons/year)
    let carbonPerHa = 0.5;
    if (practices.plantioDireto) carbonPerHa += 1.2;
    if (practices.ilpf) carbonPerHa += 3.5;
    if (practices.bioinsumos) carbonPerHa += 0.8;

    const totalCarbon = Math.round(sizeMultiplier * carbonPerHa);

    // Profile status
    let status = "Iniciante";
    let color = "text-amber-600";
    let bg = "bg-amber-50 border-amber-200";
    let advice = "Sua propriedade cumpre as exigências básicas, mas tem um enorme potencial inexplorado para reduzir custos através da biologia.";

    if (finalScore >= 80) {
      status = "Regenerativo de Classe Mundial";
      color = "text-emerald-600";
      bg = "bg-emerald-50 border-emerald-200";
      advice = "Excelente! Sua fazenda é um modelo de sustentabilidade. Você já está elegível para emitir Títulos Verdes (Green Bonds) e comercializar créditos de carbono.";
    } else if (finalScore >= 60) {
      status = "Avançado em Transição Verde";
      color = "text-teal-600";
      bg = "bg-teal-50 border-teal-200";
      advice = "Seu manejo já gera grandes benefícios ao solo e à fauna. Adotar a rastreabilidade blockchain ou a energia solar elevará seu status ao topo do mercado.";
    } else if (finalScore >= 45) {
      status = "Intermediário";
      color = "text-blue-600";
      bg = "bg-blue-50 border-blue-200";
      advice = "Você está no caminho certo. Considere implementar o Plantio Direto contínuo e a rotação de culturas para dar o próximo salto de produtividade.";
    }

    return {
      score: finalScore,
      status,
      color,
      bg,
      advice,
      waterSavings: Math.min(45, waterSavings),
      totalCarbon
    };
  };

  const metrics = calculateMetrics();

  return (
    <section id="simulador" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta de Diagnóstico</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Simulador de Transição Verde
          </h2>
          <p className="text-slate-600 text-base">
            Descubra o **Índice de Sustentabilidade Agro (ISA)** da sua propriedade. Selecione o perfil da sua fazenda e veja o impacto real das práticas sustentáveis na sua rentabilidade e pegada ecológica.
          </p>
        </div>

        {/* Simulator Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-6">
            
            {/* Step 1: Farm Size */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Tamanho da Propriedade
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'small', label: 'Pequena', desc: '< 100 ha' },
                  { id: 'medium', label: 'Média', desc: '100 - 1.000 ha' },
                  { id: 'large', label: 'Grande', desc: '> 1.000 ha' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFarmSize(item.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      farmSize === item.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                    }`}
                  >
                    <span className="block font-heading font-bold text-sm">{item.label}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Main Culture */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                2. Atividade Principal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'graos', label: 'Grãos & Fibras' },
                  { id: 'pecuaria', label: 'Pecuária de Corte' },
                  { id: 'hortifruti', label: 'Hortifruti / Irrigados' },
                  { id: 'silvicultura', label: 'Florestas / Madeira' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCulture(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      culture === item.id
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                    }`}
                  >
                    <span className="block font-heading font-medium text-xs sm:text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Current Practices Checkboxes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  3. Práticas Sustentáveis Adotadas
                </label>
                <span className="text-[11px] text-emerald-600 font-medium">
                  Selecione todas que aplicar
                </span>
              </div>
              
              <div className="space-y-2.5">
                {[
                  { key: 'plantioDireto', label: 'Plantio Direto Contínuo', desc: 'Sem revolvimento do solo e com cobertura permanente' },
                  { key: 'bioinsumos', label: 'Uso de Bioinsumos', desc: 'Controle biológico, inoculantes e biofábrica on-farm' },
                  { key: 'ilpf', label: 'Integração ILPF ou Rotação', desc: 'Sistemas integrados de lavoura, pecuária ou floresta' },
                  { key: 'rastreabilidade', label: 'Rastreabilidade / Certificação', desc: 'Monitoramento de desmatamento e conformidade socioambiental' },
                  { key: 'energiaSolar', label: 'Energia Solar ou Biomassa', desc: 'Matriz limpa no bombeamento de irrigação ou instalações' },
                ].map((item) => {
                  const isChecked = practices[item.key as keyof typeof practices];
                  return (
                    <div
                      key={item.key}
                      onClick={() => handlePracticeToggle(item.key as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                        isChecked 
                          ? 'bg-emerald-50/60 border-emerald-300' 
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {/* Custom Checkbox */}
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'
                      }`}>
                        {isChecked && <span className="text-xs font-bold">✓</span>}
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="pt-2 flex items-start gap-2 text-slate-400 text-[11px]">
              <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>O cálculo considera os pesos de eficiência de cada técnica na retenção de água e fixação de carbono no solo.</span>
            </div>

          </div>

          {/* Right Column: Dynamic Outputs & Recommendations */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
            
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Output Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                    Resultado do Diagnóstico
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Índice de Sustentabilidade (ISA)
                  </h3>
                </div>
                
                {/* Big Score Badge */}
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-heading text-2xl font-extrabold shrink-0">
                  {metrics.score}
                  <span className="text-xs font-normal text-slate-400">/100</span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-1.5">Nível de Maturidade:</span>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-bold ${metrics.bg} ${metrics.color}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{metrics.status}</span>
                </div>
              </div>

              {/* Real World Projections */}
              <div className="space-y-4 mb-8">
                
                {/* Carbon */}
                <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Sequestro Est. de Carbono</span>
                      <span className="text-xs font-semibold text-slate-200">Mitigação ativa no solo</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-base font-bold text-emerald-400 block">
                      ~{metrics.totalCarbon.toLocaleString('pt-BR')} ton
                    </span>
                    <span className="text-[10px] text-slate-400 block">CO₂ eq/ano</span>
                  </div>
                </div>

                {/* Water */}
                <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Economia Hídrica</span>
                      <span className="text-xs font-semibold text-slate-200">Eficiência na retenção</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-base font-bold text-blue-400 block">
                      Até {metrics.waterSavings}%
                    </span>
                    <span className="text-[10px] text-slate-400 block">de redução</span>
                  </div>
                </div>

              </div>

              {/* Customized Advice */}
              <div className="border-t border-slate-800 pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Recomendação Estratégica
                  </h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/30 p-3 rounded-lg border border-slate-700/30">
                  {metrics.advice}
                </p>
              </div>
            </div>

            {/* Bottom action Link */}
            <div className="mt-8 pt-4 border-t border-slate-800">
              <a
                href="#contato"
                className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors group"
              >
                <span>Solicitar Consultoria de Transição</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
