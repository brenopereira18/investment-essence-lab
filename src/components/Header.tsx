import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, TrendingUp, Briefcase, Award, TrendingUp as TrendingIcon, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-dark">Gard Capital</span>
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

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:opacity-90 transition-smooth shadow-elegant"
            >
              Fale Conosco
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] sm:w-[340px]">
              <div className="flex flex-col gap-2 mt-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-primary p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Gard Capital</span>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("servicos")}
                  className="flex items-center gap-3 text-left px-4 py-2 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-smooth">
                    Serviços
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("diferenciais")}
                  className="flex items-center gap-3 text-left px-4 py-2 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-smooth">
                    Diferenciais
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("resultados")}
                  className="flex items-center gap-3 text-left px-4 py-2 rounded-lg hover:bg-muted transition-smooth group"
                >
                  <TrendingIcon className="h-5 w-5 text-primary" />
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-smooth">
                    Resultados
                  </span>
                </button>

                <div className="mt-2 pt-6 border-t border-border">
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="bg-primary hover:opacity-90 transition-smooth shadow-elegant w-full h-12 text-base"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
