import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import clientesBg from "@/assets/clientes-bg.webp";

const testimonials = [
  {
    name: "INAH TIMO",
    text: "Profissional excelente, super competente e muito humana. Um processo que estava parado desde 2023, ela conseguiu dar andamento em pouco tempo! Agora meu pai está quase aposentado!",
    stars: 5,
  },
  {
    name: "Ciebra Ramos",
    text: "Super indico esse escritório, muito profissional e competente. Profissionais adoráveis e prestativos, só tenho a agradecer sempre.",
    stars: 5,
  },
  {
    name: "Leo Neves",
    text: "Sem dúvida, uma das melhores equipes de profissionais do Direito com quem já pude contar. Ética, dedicação e profissionalismo resume o trabalho do escritório.",
    stars: 5,
  },
  {
    name: "Anderson Silva",
    text: "O atendimento foi excelente! A equipe foi super atenciosa e honesta. Sempre que tive dúvidas, responderam rapidamente e me mantiveram informado sobre todos os movimentos no meu processo.",
    stars: 5,
  },
  {
    name: "Natalia Pires",
    text: "Escritório com uma ótima equipe. Profissionais capacitados e competentes. Faço uma ressalva maior na advogada de direito de família, a melhor que já conheci.",
    stars: 5,
  },
];

const useItemsPerView = () => {
  const [items, setItems] = useState(1);
  useEffect(() => {
    const update = () => setItems(window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 640 ? 2 : 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return items;
};

const ProvaSocial = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Reset current if itemsPerView changes
  useEffect(() => {
    setCurrent(0);
  }, [itemsPerView]);

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={clientesBg} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-background text-center mb-12 sm:mb-16">
          O que nossos clientes estão falando
        </h2>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-6 sm:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-background/20 h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-background/80 font-sans leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <p className="text-sm font-sans font-semibold text-background">
                      {t.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-gold w-6" : "bg-background/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;