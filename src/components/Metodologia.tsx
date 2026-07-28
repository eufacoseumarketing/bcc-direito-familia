import { Headphones, Search, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    icon: Headphones,
    title: "Escuta Inicial",
    text: "Ouvimos sua história com atenção, sem pressa. Entendemos suas necessidades, seus receios e seus objetivos antes de qualquer orientação.",
  },
  {
    num: "02",
    icon: Search,
    title: "Análise Detalhada",
    text: "Estudamos cada detalhe do seu caso com profundidade. Analisamos documentos, legislação e jurisprudência para mapear os melhores caminhos.",
  },
  {
    num: "03",
    icon: Target,
    title: "Definição da Estratégia",
    text: "Apresentamos um plano de ação claro, com prazos, custos e expectativas realistas. Você decide com segurança, sem surpresas.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Acompanhamento",
    text: "Acompanhamos cada fase do processo com proximidade. Você recebe atualizações constantes e tem acesso direto à equipe sempre que precisar.",
  },
];

const Metodologia = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Lógica preguiçosa (sem libs extras) para rastrear o scroll e preencher a linha
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Começa a preencher quando o topo da seção passa do meio da tela
      // Termina quando o final da seção passa pelo meio da tela
      const scrollPosition = (windowHeight / 2) - rect.top;
      const totalHeight = rect.height;
      
      let newProgress = (scrollPosition / totalHeight) * 100;
      
      // Trava o progresso entre 0 e 100%
      newProgress = Math.max(0, Math.min(100, newProgress));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Checagem inicial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden z-0">
      {/* Brilho de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B84233]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-center mb-4">
          Como é o nosso atendimento
        </h2>
        <p className="text-center text-muted-foreground font-sans mb-20 max-w-xl mx-auto">
          Um processo transparente, do primeiro contato à resolução do seu caso.
        </p>

        <div className="relative" ref={containerRef}>
          {/* Linha de fundo (apagada) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#B84233]/10 -translate-x-1/2 rounded-full" />
          
          {/* Linha de neon animada (acendendo com o scroll) */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-[#B84233] -translate-x-1/2 rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(184,66,51,0.8)]"
            style={{ height: `${progress}%` }}
          />

          <div className="flex flex-col gap-12 md:gap-20 relative">
            {steps.map((step, i) => {
              // Verifica se a linha de neon já chegou ou passou desta etapa (cálculo aproximado baseado no índice)
              const isActive = progress >= (i * 25);
              const isEven = i % 2 === 0;

              return (
                <div 
                  key={i} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Espaço vazio no desktop para alinhar corretamente com a linha central */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Marcador Central (Número e Ícone) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center bg-background py-4">
                    <span 
                      className={`font-serif text-sm font-bold mb-2 transition-all duration-500 ${
                        isActive ? "text-[#B84233] drop-shadow-[0_0_8px_rgba(184,66,51,0.8)]" : "text-muted-foreground/30"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div 
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-background z-10 ${
                        isActive 
                          ? "border-[#B84233] shadow-[0_0_20px_rgba(184,66,51,0.4),inset_0_0_10px_rgba(184,66,51,0.2)] scale-110" 
                          : "border-border"
                      }`}
                    >
                      <step.icon 
                        className={`w-5 h-5 transition-all duration-500 ${
                          isActive ? "text-[#B84233]" : "text-muted-foreground/30"
                        }`} 
                        strokeWidth={isActive ? 2 : 1.5} 
                      />
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div 
                    className={`pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? "md:pr-16 lg:pr-24 text-left md:text-right" : "md:pl-16 lg:pl-24 text-left"
                    }`}
                  >
                    <div 
                      className={`p-6 rounded-[30px] border transition-all duration-700 bg-card/50 backdrop-blur-sm ${
                        isActive 
                          ? "border-[#B84233]/40 shadow-[0_10px_30px_rgba(184,66,51,0.1)] translate-y-0 opacity-100" 
                          : "border-border/30 opacity-40 translate-y-4"
                      }`}
                    >
                      <h3 className={`font-serif text-xl font-bold mb-3 transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                        {step.text}
                      </p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-base hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Agendar uma Consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;