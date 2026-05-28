import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { TheBalance } from './components/TheBalance';
import { Pillars } from './components/Pillars';
import { Simulator } from './components/Simulator';
import { Technologies } from './components/Technologies';
import { SuccessCases } from './components/SuccessCases';
import { KnowledgeHub } from './components/KnowledgeHub';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Seção Principal / Impacto Visual */}
      <main className="flex-1">
        <Hero />
        
        {/* Métricas de Impacto em Destaque */}
        <ImpactStats />
        
        {/* Exploração do Equilíbrio: O Desafio do Século */}
        <TheBalance />
        
        {/* Os 4 Pilares da Sustentabilidade Agrícola */}
        <Pillars />
        
        {/* Simulador Interativo: A Pegada Rural e o Índice ISA */}
        <Simulator />
        
        {/* Galeria de Tecnologias Filtráveis do Agro 4.0 */}
        <Technologies />
        
        {/* Histórias Reais de Produtores Rurais */}
        <SuccessCases />
        
        {/* Biblioteca de Conteúdo: E-books e Artigos com Leitura Integrada */}
        <KnowledgeHub />
        
        {/* Respostas a Dúvidas Frequentes da Transição Verde */}
        <FAQ />
        
        {/* Formulário de Parcerias e Conexão Estratégica */}
        <Contact />
      </main>

      {/* Rodapé e Navegação Complementar */}
      <Footer />
    </div>
  );
}
