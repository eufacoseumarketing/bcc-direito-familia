import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-primary font-sans hover:underline mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-10">
          Política de Privacidade
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground font-sans space-y-6 leading-relaxed">
          <p>
            A sua privacidade é importante para nós. Esta Política de Privacidade explica como o
            escritório <strong className="text-foreground">Bastos &amp; Chaves e Castro Advocacia (BCC Advocacia)</strong> coleta,
            utiliza, armazena e protege as informações pessoais dos visitantes deste site.
          </p>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            1. Informações Coletadas
          </h2>
          <p>
            Podemos coletar as seguintes informações quando você interage com nosso site ou
            entra em contato conosco:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone / WhatsApp</li>
            <li>Informações sobre o caso jurídico (fornecidas voluntariamente)</li>
            <li>Dados de navegação (cookies, endereço IP, páginas visitadas)</li>
          </ul>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            2. Uso das Informações
          </h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder às suas solicitações e entrar em contato</li>
            <li>Prestar serviços jurídicos contratados</li>
            <li>Melhorar a experiência de navegação no site</li>
            <li>Enviar comunicações relevantes, mediante seu consentimento</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            3. Compartilhamento de Dados
          </h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros
            para fins comerciais. Seus dados poderão ser compartilhados apenas:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Com prestadores de serviços essenciais ao funcionamento do site</li>
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Para proteção dos direitos do escritório ou de terceiros</li>
          </ul>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            4. Cookies
          </h2>
          <p>
            Este site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência
            do usuário, analisar o tráfego e personalizar conteúdo. Você pode configurar seu
            navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
          </p>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            5. Segurança dos Dados
          </h2>
          <p>
            Adotamos medidas de segurança técnicas e administrativas adequadas para proteger
            suas informações pessoais contra acesso não autorizado, perda, alteração ou
            destruição. Além disso, todas as informações compartilhadas com nosso escritório
            são protegidas pelo sigilo profissional advocatício, conforme previsto no Estatuto
            da OAB.
          </p>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            6. Seus Direitos (LGPD)
          </h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem
            direito a:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar a correção de dados incompletos ou desatualizados</li>
            <li>Solicitar a exclusão de dados desnecessários</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, entre em contato conosco pelo WhatsApp
            ou pelos canais indicados no site.
          </p>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            7. Alterações nesta Política
          </h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que
            você consulte esta página regularmente para se manter informado sobre nossas
            práticas de privacidade.
          </p>

          <h2 className="text-lg font-serif font-semibold text-foreground mt-8">
            8. Contato
          </h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos
            seus dados pessoais, entre em contato:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li><strong className="text-foreground">Escritório:</strong> Bastos &amp; Chaves e Castro Advocacia</li>
            <li><strong className="text-foreground">Telefone:</strong> (61) 99831-3480</li>
            <li><strong className="text-foreground">Endereço:</strong> Quadra 7, Conjunto 3, Lote 22A - SHVP Trecho 3, Taguatinga Norte - Brasília/DF</li>
          </ul>

          <p className="text-xs text-muted-foreground/60 mt-10">
            Última atualização: Abril de 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
