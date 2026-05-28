import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: 'produtor',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      profile: 'produtor',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-100">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Conexão e Parcerias</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Vamos Construir o <br />
              <span className="text-emerald-600">Futuro Sustentável</span> Juntos
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Seja você um produtor rural buscando certificação, um pesquisador com novas soluções biológicas ou um investidor focado em ESG, nossa equipe está pronta para integrar sua demanda à nossa rede.
            </p>

            {/* Contact Details info */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">E-mail Direto</span>
                  <a href="mailto:contato@agrosustenta.com.br" className="text-sm font-semibold text-slate-800 hover:text-emerald-600">
                    contato@agrosustenta.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">Telefone / WhatsApp</span>
                  <a href="tel:+5511998887766" className="text-sm font-semibold text-slate-800 hover:text-emerald-600">
                    +55 (11) 99888-7766
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block uppercase">Sede Administrativa</span>
                  <span className="text-sm font-semibold text-slate-800">
                    Av. Faria Lima, 3400 - São Paulo, SP
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Form inside a beautiful Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                    Envie sua Mensagem
                  </h3>
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                        E-mail Profissional *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="joao@fazenda.com.br"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Profile Select */}
                  <div>
                    <label htmlFor="profile" className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Perfil
                    </label>
                    <select
                      id="profile"
                      name="profile"
                      value={formData.profile}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="produtor">Produtor Rural / Gestor de Fazenda</option>
                      <option value="agronomo">Engenheiro Agrônomo / Consultor</option>
                      <option value="empresa">Empresa de Tecnologia / Insumos</option>
                      <option value="investidor">Investidor / Fundo Verde</option>
                      <option value="estudante">Estudante / Pesquisador</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                      Como podemos colaborar? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua demanda, dúvidas sobre o simulador ou interesse em parcerias..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    Garantimos total sigilo dos seus dados de acordo com a LGPD.
                  </p>

                </form>
              ) : (
                /* Success State */
                <div className="py-12 text-center animate-fadeIn">
                  
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Mensagem Enviada com Sucesso!
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-8">
                    Olá, <strong>{formData.name}</strong>! Agradecemos o seu contato. Um dos nossos especialistas em transição verde retornará em breve para o e-mail <strong>{formData.email}</strong>.
                  </p>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                  >
                    Enviar nova mensagem
                  </button>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
