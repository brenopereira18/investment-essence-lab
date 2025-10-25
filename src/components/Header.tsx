import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-dark">Patrimônio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("resultados")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Resultados
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
