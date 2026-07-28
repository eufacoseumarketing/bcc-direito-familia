import React from "react";

// Transformamos os itens em frases diretas para o formato de texto corrido
const items = [
  "+10 ANOS DE EXPERIÊNCIA EM DIREITO DE FAMÍLIA",
  "ATENDIMENTO PRESENCIAL E ONLINE PARA TODO O BRASIL",
  "EXCELÊNCIA COMPROVADA NAS AVALIAÇÕES DO GOOGLE",
];

// Multiplicamos o array algumas vezes para garantir que a tela seja 
// totalmente preenchida e o loop infinito seja suave e imperceptível.
const marqueeItems = [...items, ...items, ...items, ...items, ...items];

const Diferenciais = () => {
  
  // Ajustamos aqui: py-2 no mobile, md:py-4 no desktop
  return (
    <section className="relative w-full overflow-hidden bg-background py-2 md:py-4 border-y border-[#B84233]/20 flex items-center z-0">
      
      {/* Sombras laterais para dar um efeito de fade nas pontas da tela (opcional, mas traz elegância) */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Container animado */}
      <div className="flex w-max animate-marquee items-center gap-6 md:gap-10">
        {marqueeItems.map((text, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-10">
            <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.15em] text-muted-foreground/70 whitespace-nowrap uppercase">
              {text}
            </span>
            <span className="text-[#B84233]/60 font-light text-sm">
              →
            </span>
          </div>
        ))}
      </div>

      {/* Estilos da animação embutidos para funcionar no ato (Plug and Play) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Diferenciais;