import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto custa uma consulta?",
    a: "Os honorários variam de acordo com a complexidade do caso. Na primeira conversa, apresentamos de forma transparente todos os custos envolvidos, sem surpresas. Entre em contato para saber mais.",
  },
  {
    q: "O atendimento pode ser feito totalmente online?",
    a: "Sim! Atendemos presencialmente em Brasília e de forma online para todo o Brasil. Nosso atendimento remoto é realizado com a mesma qualidade, segurança e sigilo do presencial.",
  },
  {
    q: "Quanto tempo leva um processo de divórcio?",
    a: "O prazo depende de diversos fatores: se é consensual ou litigioso, se há filhos menores, partilha de bens, entre outros. Na consulta inicial, conseguimos estimar um prazo realista para o seu caso específico.",
  },
  {
    q: "Preciso ir ao fórum pessoalmente?",
    a: "Na maioria dos casos, não. Representamos você em todas as audiências e atos processuais. Em situações que exigem sua presença, orientamos e acompanhamos você em cada etapa.",
  },
  {
    q: "Como funciona o sigilo das informações?",
    a: "O sigilo profissional é um dever ético absoluto. Todas as informações compartilhadas conosco são tratadas com total confidencialidade, protegidas pelo sigilo advocatício previsto no Estatuto da OAB.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground text-center mb-16">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5 font-serif text-base font-medium text-foreground text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground font-sans leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
