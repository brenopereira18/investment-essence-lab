import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">Entre em Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Vamos Conversar Sobre Seus Investimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo a construir um futuro financeiro sólido. Entre em contato conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-border hover:shadow-card transition-smooth">
            <CardContent className="pt-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl mb-4">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-2">(11) 9999-9999</p>
              <p className="text-sm text-muted-foreground">Seg - Sex: 9h às 18h</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-card transition-smooth">
            <CardContent className="pt-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl mb-4">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">E-mail</h3>
              <p className="text-muted-foreground mb-2">contato@patrimonio.com.br</p>
              <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-card transition-smooth">
            <CardContent className="pt-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl mb-4">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Endereço</h3>
              <p className="text-muted-foreground mb-2">Av. Paulista, 1000</p>
              <p className="text-sm text-muted-foreground">São Paulo - SP</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 border-border shadow-card">
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    required
                    className="border-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    required
                    className="border-input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="border-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seus objetivos financeiros..."
                  rows={5}
                  required
                  className="border-input resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-lg py-6">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
