import logo from "@/assets/logo.webp";
import whatsappIcon from "@/assets/whatsapp-icon.webp";
import equipeCta from "@/assets/equipe-cta.webp";
import { MapPin, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; // <-- IMPORTAÇÃO ADICIONADA AQUI

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0";

const Footer = () => {
  return (
    <>
      {/* CTA Final */}
      <section id="contato" className="relative py-24 overflow-hidden z-0">
        <div className="absolute inset-0 -z-10">
          {/* Imagem com Blur e Scale (para não vazar as bordas) */}
          <img
            src={equipeCta}
            alt="Equipe BCC Advocacia"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover blur-[8px] scale-110 transition-transform duration-1000"
          />
          
          {/* Overlay de Cor Escura para contraste */}
          <div className="absolute inset-0 bg-foreground/80" />
          
          {/* Overlay de Noise (Ruído Cinematográfico) via SVG */}
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
            }}
          />
        </div>

        {/* CONTAINER ALARGADO: trocado 'container' por 'w-full max-w-7xl' para destravar as laterais */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          {/* TEXTO CORRIGIDO: Adicionado {' '} para evitar palavras coladas no mobile */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif font-semibold text-background mb-8 w-full mx-auto leading-snug drop-shadow-md tracking-wide">
            <span className="md:block">Seus laços, seus filhos e o seu patrimônio</span>{' '}
            <span className="md:block">merecem tempo, escuta e verdade. Converse com quem</span>{' '}
            <span className="md:block">entende de leis e, principalmente, de famílias.</span>
          </h2>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium text-base hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Falar agora com a Dra. Mirlla Reis
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-16 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo + Créditos */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="BCC Advocacia" loading="lazy" decoding="async" width={40} height={40} className="h-10 w-10 rounded-full" />
                <span className="font-serif text-lg font-semibold text-background">
                  BCC Advocacia
                </span>
              </div>
              <p className="text-xs text-background/40 font-sans mt-6">
                Todos os Direitos Reservados – Desenvolvido pela{" "}
                <a
                  href="https://lp.eufacoseu.marketing?utm_source=bccfamiliadireitodefamilia&utm_medium=site&utm_campaign=credito_rodape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  EFSM
                </a>
              </p>
            </div>

            {/* Endereço */}
            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4">
                Atendimento online em todo o Brasil.
              </h4>
              <p className="text-sm text-background/70 font-sans leading-relaxed mb-3">
                Quadra 7, Conjunto 3, Lote 22A - SHVP Trecho 3,<br />
                Taguatinga Norte - Brasília - DF - Brasil
              </p>
              <a
                href="https://share.google/HxbryWPOrvy4afop5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold font-sans hover:underline"
              >
                <MapPin className="w-4 h-4" /> Como chegar
              </a>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-serif text-sm font-semibold text-background mb-4">
                Contato
              </h4>
              <div className="space-y-3 text-sm text-background/70 font-sans">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <img src={whatsappIcon} alt="WhatsApp" loading="lazy" decoding="async" width={16} height={16} className="w-4 h-4" />
                  WhatsApp
                </a>
                <a href="tel:+5561998313480" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" /> 61 99831-3480
                </a>
                <a
                  href="https://instagram.com/bcc.advocacia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-background transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @bcc.advocacia
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 mt-10 pt-6 text-center">
            {/* <-- TAG CORRIGIDA AQUI: a href trocado por Link to --> */}
            <Link to="/politica-de-privacidade" className="text-xs text-background/50 font-sans hover:text-background/70 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
      </a>
    </>
  );
};

export default Footer;