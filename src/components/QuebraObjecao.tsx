import { Heart, Eye, Gem, Globe } from "lucide-react";
import escritorioBg from "@/assets/escritorio-bg.jpeg";

const reasons = [
  { icon: Heart, title: "Atendimento Humano", text: "Você não será tratado como mais um número. Cada caso recebe atenção personalizada e dedicada." },
  { icon: Eye, title: "Transparência Real", text: "Sem letras miúdas, sem surpresas. Você sabe exatamente o que está acontecendo em cada etapa." },
  { icon: Gem, title: "Advocacia Artesanal", text: "Casos limitados para garantir qualidade. Não trabalhamos com volume, trabalhamos com excelência." },
  { icon: Globe, title: "Atendimento Nacional", text: "Presencial em Brasília e online para todo o Brasil, com a mesma qualidade e dedicação." },
];

const QuebraObjecao = () => {
  return (
    <section
      className="py-24 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${escritorioBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/80" />
      
      {/* Container 100% livre nas laterais, sem limite de largura (max-w removido) */}
      <div className="w-full px-4 md:px-10 lg:px-16 mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Forçando as 3 linhas na marra no desktop com 'whitespace-nowrap' */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-background mb-8 leading-tight tracking-wide">
          Como é o nosso atendimento
        </h2>
        
        {/* Travando os cards para não esticarem bizarramente já que o container está 100% */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {reasons.map((r, i) => (
            <div key={i} className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          Falar com a Equipe Bastos &amp; Chaves e Castro Advocacia
        </a>
      </div>
    </section>
  );
};

export default QuebraObjecao;