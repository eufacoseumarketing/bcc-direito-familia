import { Scale, Users, BookOpen, Heart, ArrowRight } from "lucide-react";

import divorcioImg from "../assets/divorcio.jpeg";
import guardaImg from "../assets/guarda.jpeg";
import inventarioImg from "../assets/inventario.jpeg";
import filiacaoImg from "../assets/filiacao.jpeg";

const services = [
  {
    icon: Scale,
    image: divorcioImg,
    title: "Divórcio e Dissolução", // Título levemente encurtado para caber melhor em 4 colunas
    bullets: [
      "Divórcio consensual e litigioso",
      "Dissolução de união estável",
      "Partilha de bens",
      "Acordos pré e pós-nupciais",
      "Divórcio com filhos menores",
      "Alteração de regime de bens",
    ],
  },
  {
    icon: Users,
    image: guardaImg,
    title: "Guarda e Pensão",
    bullets: [
      "Guarda compartilhada e unilateral",
      "Regulamentação de convivência",
      "Revisão e exoneração de pensão",
      "Execução de alimentos",
      "Alienação parental",
      "Busca e apreensão de menor",
    ],
  },
  {
    icon: BookOpen,
    image: inventarioImg,
    title: "Inventário e Sucessão",
    bullets: [
      "Inventário judicial e extrajudicial",
      "Arrolamento de bens",
      "Testamento e codicilo",
      "Planejamento sucessório",
      "Holding familiar",
      "Doação com cláusulas",
    ],
  },
  {
    icon: Heart,
    image: filiacaoImg,
    title: "Filiação e Outros",
    bullets: [
      "Reconhecimento de paternidade",
      "Investigação de paternidade",
      "Adoção",
      "Interdição e curatela",
      "Tutela",
      "Tomada de decisão apoiada",
    ],
  },
];

const Servicos = () => {
  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Brilho de fundo suave */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#B84233]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Alterado max-w-7xl para max-w-[90rem] para dar espaço para as 4 colunas, mantendo a responsividade */}
      <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Como podemos te ajudar?
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            Questões familiares mexem com o que há de mais delicado em você: seus
            filhos, seu patrimônio, sua história. Por isso, cada caso é tratado
            com a atenção, o cuidado e a estratégia que merece.
          </p>
        </div>

        {/* Mudança principal: md:grid-cols-2 lg:grid-cols-4 e redução do gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(184,66,51,0.08)] hover:-translate-y-2 transition-all duration-700 ease-out"
            >
              {/* Área da Imagem reduzida (h-48) */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 bg-[#B84233]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

                {/* Ícone reduzido (w-12 h-12) */}
                <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center shadow-md group-hover:bg-[#B84233] group-hover:border-[#B84233] transition-all duration-500 z-10">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
              </div>

              {/* Área de Conteúdo com paddings e fontes ajustadas */}
              <div className="p-5 pt-4 flex-1 flex flex-col">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 group-hover:text-[#B84233] transition-colors duration-500 line-clamp-2">
                  {s.title}
                </h3>
                
                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[0.85rem] leading-snug text-muted-foreground font-sans group-hover:text-foreground/80 transition-colors duration-500 delay-75">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B84233]/40 group-hover:bg-[#B84233] group-hover:scale-125 mt-1.5 shrink-0 transition-all duration-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-foreground text-background font-sans font-medium text-base hover:bg-[#B84233] hover:shadow-[0_0_30px_rgba(184,66,51,0.3)] transition-all duration-500"
          >
            Falar com um Especialista
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Servicos;