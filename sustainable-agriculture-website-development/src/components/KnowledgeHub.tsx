import React, { useState } from 'react';
import { articlesData, ArticleItem } from '../data/agroData';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles } from 'lucide-react';

export const KnowledgeHub: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const openArticle = (article: ArticleItem) => {
    setSelectedArticle(article);
    // Disable background scroll
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    // Enable background scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="biblioteca" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Biblioteca Estratégica</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Artigos, Análises e E-books
          </h2>
          <p className="text-slate-600 text-base">
            Aprofunde seus conhecimentos sobre finanças verdes, controle biológico e como transformar as obrigações do Código Florestal no maior ativo da sua marca.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article 
              key={article.id} 
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              
              {/* Image & Category */}
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Author & Action Footer */}
              <div className="px-6 pb-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-200/40 pt-4">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name} 
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block leading-none">
                      {article.author.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {article.author.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Ler Artigo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* E-book Callout Card */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden border border-slate-800">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Material Premium Gratuito</span>
            </div>
            
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              Guia Definitivo da Transição Verde no Agronegócio
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Baixe nosso e-book com o passo a passo técnico para certificar sua propriedade, calcular sua pegada de carbono e acessar financiamentos com taxas reduzidas.
            </p>

            {/* Simulated instant download form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Link para download enviado para o seu e-mail!'); }} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail profissional" 
                required
                className="bg-slate-800/80 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 flex-1"
              />
              <button 
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors shrink-0"
              >
                Baixar E-book
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Interactive Read Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
            
            {/* Modal Sticky Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedArticle.readTime}
                </span>
              </div>

              <button
                onClick={closeArticle}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              
              {/* Title */}
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              {/* Author Strip */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                <img 
                  src={selectedArticle.author.avatar} 
                  alt={selectedArticle.author.name} 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <span className="text-sm font-bold text-slate-800 block">
                    {selectedArticle.author.name}
                  </span>
                  <span className="text-xs text-slate-500 block">
                    {selectedArticle.author.role} • Publicado em {selectedArticle.publishDate}
                  </span>
                </div>
              </div>

              {/* Hero Image inside Modal */}
              <div className="rounded-xl overflow-hidden mb-8 max-h-72 bg-slate-100">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt="Ilustração do artigo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Bottom share/action inside modal */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 italic">
                  Este conteúdo foi produzido com exclusividade para a plataforma AgroSustenta.
                </p>
                
                <button
                  onClick={closeArticle}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors w-full sm:w-auto text-center"
                >
                  Concluir Leitura
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};
