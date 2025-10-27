import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, PiggyBank, LineChart, Target } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Consultoria de Investimento",
    description: "Análise completa do seu perfil de investidor e recomendações personalizadas para maximizar seus retornos com segurança.",
    features: ["Análise de perfil", "Diversificação inteligente", "Acompanhamento mensal"]
  },
  {
    icon: PiggyBank,
    title: "Planejamento Financeiro",
    description: "Estruturação completa das suas finanças pessoais com foco em crescimento patrimonial e realização de objetivos.",
    features: ["Orçamento personalizado", "Gestão de dívidas", "Reserva de emergência"]
  },
  {
    icon: LineChart,
    title: "Gestão de Carteira",
    description: "Administração profissional dos seus investimentos com estratégias comprovadas e monitoramento constante.",
    features: ["Rebalanceamento", "Análise de risco", "Relatórios detalhados"]
  },
  {
    icon: Target,
    title: "Planejamento de Aposentadoria",
    description: "Planeje sua independência financeira com estratégias de longo prazo e projeções realistas de patrimônio.",
    features: ["Projeção de renda", "Otimização tributária", "Sucessão patrimonial"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-10 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Soluções Completas Para Seu Patrimônio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços financeiros personalizados para cada fase da sua jornada de investimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-dark">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
