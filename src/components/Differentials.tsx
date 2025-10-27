import { Shield, Users, Award, Clock } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Segurança e Transparência",
    description: "Operamos com total transparência e seguindo as melhores práticas do mercado financeiro."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe um plano único, desenvolvido especialmente para suas necessidades e objetivos."
  },
  {
    icon: Award,
    title: "Equipe Certificada",
    description: "Profissionais com certificações internacionais e vasta experiência em mercado financeiro."
  },
  {
    icon: Clock,
    title: "Acompanhamento Contínuo",
    description: "Monitoramento constante do mercado e ajustes estratégicos para otimizar seus resultados."
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-10 lg:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
            <span className="text-primary font-semibold text-sm">Por Que Escolher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Combinamos expertise, tecnologia e atendimento humanizado para entregar resultados superiores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-smooth border border-primary/20">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
