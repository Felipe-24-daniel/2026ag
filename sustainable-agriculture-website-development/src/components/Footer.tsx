import React from 'react';
import { Sprout, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-white">
                Agro<span className="text-emerald-500">Sustenta</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Plataforma dedicada à sinergia entre a máxima eficiência do agronegócio e a conservação incondicional do meio ambiente. Promovendo a ciência e a tecnologia no campo.
            </p>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} AgroSustenta. Todos os direitos reservados.
            </div>
          </div>

          {/* Links Column 1: Navegação */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#o-equilibrio" className="hover:text-white transition-colors">O Equilíbrio</a></li>
              <li><a href="#pilares" className="hover:text-white transition-colors">Os 4 Pilares</a></li>
              <li><a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador ESG</a></li>
            </ul>
          </div>

          {/* Links Column 2: Conteúdo */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Conteúdo
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#casos" className="hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#biblioteca" className="hover:text-white transition-colors">Artigos Premium</a></li>
              <li><a href="#biblioteca" className="hover:text-white transition-colors">E-books Grátis</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Parcerias Estratégicas</a></li>
            </ul>
          </div>

          {/* Links Column 3: Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Radar da Bioeconomia
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Receba semanalmente cotações de Títulos Verdes, editais de inovação e tendências do Agro 4.0.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('Inscrição confirmada!'); }} className="space-y-2">
              <input 
                type="email" 
                placeholder="Seu e-mail profissional" 
                required
                className="w-full bg-slate-900 border border-slate-800 text-white placeholder:text-slate-600 text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-emerald-500"
              />
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
            <span>para o fortalecimento do produtor rural e preservação da natureza.</span>
          </div>

          <div className="flex gap-4">
            <a href="#inicio" className="hover:underline">Termos de Uso</a>
            <a href="#inicio" className="hover:underline">Política de Privacidade</a>
            <a href="#inicio" className="hover:underline">Conformidade CAR</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
