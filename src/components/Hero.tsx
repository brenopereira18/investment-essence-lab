import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">Consultoria Especializada em Investimentos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Construa Seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Patrimônio
            </span>
            <br />
            Com Estratégia
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Planejamento financeiro personalizado, gestão de carteiras e consultoria especializada
            para você alcançar seus objetivos de investimento e aposentadoria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white shadow-elegant text-lg px-8 py-6 group"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById("servicos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">R$ 2B+</div>
              <div className="text-white/70 text-sm">Em ativos sob gestão</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70 text-sm">Clientes atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/70 text-sm">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
