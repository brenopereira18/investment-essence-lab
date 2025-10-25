import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Patrimônio</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Consultoria especializada em investimentos, planejamento financeiro e gestão patrimonial
              para você alcançar seus objetivos.
            </p>
            <p className="text-sm text-white/50">
              © 2024 Patrimônio Consultoria. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Serviços</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Consultoria de Investimento</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Planejamento Financeiro</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Gestão de Carteira</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-smooth">Planejamento de Aposentadoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <ul className="space-y-2 text-white/70">
              <li>(11) 9999-9999</li>
              <li>contato@patrimonio.com.br</li>
              <li>Av. Paulista, 1000</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>
              <a href="#" className="hover:text-primary transition-smooth mr-4">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-smooth">Termos de Uso</a>
            </div>
            <div>
              Desenvolvido com dedicação para seu sucesso financeiro
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
