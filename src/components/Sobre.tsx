import draMirlla from "@/assets/mirla2.webp";
import equipeBcc from "@/assets/equipe-bcc.webp";

const Sobre = () => {
  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-20 lg:gap-32">
          
          {/* Bloco 1: Dra. Mirlla (Foto à Esquerda, Texto à Direita) */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            
            {/* Imagem Dra. Mirlla */}
            <div className="w-full md:w-1/2 relative group">
              {/* Sombra deslocada decorativa */}
              <div className="absolute inset-0 bg-[#B84233]/15 translate-x-4 translate-y-4 rounded-[35px] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              <div className="rounded-[35px] overflow-hidden aspect-[4/5] md:aspect-square border border-[#B84233]/20 shadow-lg">
                <img
                  src={draMirlla}
                  alt="Dra. Mirlla Reis"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Texto Dra. Mirlla */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-6">
                Sobre a Dra. Mirlla Reis
              </h2>
              <div className="space-y-5 text-base text-muted-foreground font-sans leading-relaxed">
                <p>
                  Advogada especialista em Direito de Família e Sucessões, com mais de 7 anos de
                  experiência na condução de casos complexos envolvendo divórcio, guarda de filhos,
                  inventário e planejamento sucessório.
                </p>
                <p>
                  Graduada em Direito e pós-graduada em Direito de Família e Sucessões, a Dra. Mirlla
                  Reis alia conhecimento técnico à escuta ativa, oferecendo aos seus clientes não
                  apenas soluções jurídicas, mas também acolhimento e segurança em momentos
                  delicados.
                </p>
                <p>
                  Reconhecida pela abordagem humanizada e pelo compromisso com a transparência,
                  ela acredita que cada família é única e merece uma estratégia personalizada, construída
                  com respeito, ética e dedicação.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco 2: Escritório (Texto à Esquerda, Foto à Direita invertido com flex-row-reverse) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
            
            {/* Imagem Escritório */}
            <div className="w-full md:w-1/2 relative group">
              {/* Sombra deslocada decorativa (invertida para a esquerda) */}
              <div className="absolute inset-0 bg-[#B84233]/15 -translate-x-4 translate-y-4 rounded-[35px] -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
              
              <div className="rounded-[35px] overflow-hidden aspect-[4/5] md:aspect-square border border-[#B84233]/20 shadow-lg">
                <img
                  src={equipeBcc}
                  alt="Equipe BCC Advocacia"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* Texto Escritório */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-foreground mb-6">
                Sobre o Escritório
              </h2>
              <div className="space-y-5 text-base text-muted-foreground font-sans leading-relaxed">
                <p>
                  O escritório Bastos & Chaves e Castro Advocacia nasceu com o propósito de oferecer um atendimento jurídico diferenciado, com atuação estratégica e personalizada em diversas áreas do Direito, com destaque para o Direito de Família e Sucessões.
                </p>
                <p>
                  Com sede em Brasília e atendimento online para todo o Brasil, o escritório se destaca pelo cuidado artesanal com cada caso, pela comunicação transparente e pelo compromisso em proteger o que realmente importa: os interesses, o patrimônio e a tranquilidade dos seus clientes.
                </p>
                <p>
                  Ao longo de sua trajetória, consolidou uma atuação sólida também em outras frentes jurídicas, sempre mantendo o mesmo padrão de excelência, estratégia e proximidade no atendimento.
                </p>
                <p>
                  Aqui, cada cliente é tratado como único. Não trabalhamos com processos em massa. Acreditamos que a advocacia de excelência é construída na escuta, na estratégia personalizada e no acompanhamento próximo.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;