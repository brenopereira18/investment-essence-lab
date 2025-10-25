import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "18.5%",
    label: "Retorno médio anual",
    description: "Acima do CDI"
  },
  {
    icon: Users,
    value: "98%",
    label: "Taxa de satisfação",
    description: "Clientes satisfeitos"
  },
  {
    icon: Award,
    value: "Top 5",
    label: "No ranking nacional",
    description: "Assessorias independentes"
  },
  {
    icon: Target,
    value: "85%",
    label: "Objetivos alcançados",
    description: "Metas de investimento"
  }
];

const Results = () => {
  return (
    <section id="resultados" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">Resultados Comprovados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Números Que Falam Por Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa experiência e dedicação se traduzem em resultados concretos para nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-card transition-smooth text-center"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-dark mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center shadow-elegant">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto Para Transformar Suas Finanças?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos ajudá-lo a alcançar seus objetivos financeiros.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-smooth shadow-lg"
            >
              Agendar Consulta Gratuita
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-smooth border border-white/30"
            >
              (11) 9999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
