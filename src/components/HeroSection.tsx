import bannerImg from "@/assets/banner2.png";
import mobileImg from "@/assets/mobile.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        {/* Imagem Desktop */}
        <img
          src={bannerImg}
          alt="Dra. Mirlla Reis - BCC Advocacia"
          className="hidden md:block w-full h-full object-cover object-right"
        />
        
        {/* Imagem Mobile */}
        <img
          src={mobileImg}
          alt="Dra. Mirlla Reis - BCC Advocacia"
          className="block md:hidden w-full h-full object-cover object-top" 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 lg:pt-40">
        {/* Flexbox ativado: centraliza no mobile (items-center text-center) e alinha à esquerda no desktop (md:items-start md:text-left) */}
        <div className="max-w-2xl mt-20 md:mt-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="hidden md:inline-block px-4 py-1.5 rounded-full bg-gold-light text-gold text-xs font-sans font-semibold tracking-wider uppercase mb-6">
            Direito de Família &bull; Sucessões
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] leading-tight font-serif font-semibold text-foreground mb-6">
            Divórcio, guarda e inventário resolvidos <br className="hidden md:block" />
            <span className="text-primary">com precisão</span>, sigilo{" "}
            <br className="hidden md:block" />
            e sem surpresas.
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-10 max-w-xl">
            Conduzimos cada etapa com estratégia jurídica e discrição para proteger
            seu patrimônio, sua família e sua tranquilidade.
          </p>
          
          <a
            href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-base hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Quero falar com o BCC Advocacia
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;