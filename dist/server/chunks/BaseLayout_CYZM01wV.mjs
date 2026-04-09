import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, l as renderHead, j as renderComponent, n as renderSlot } from './astro/server_xQnAjuqZ.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';

const $$Astro$2 = createAstro("https://maumarketing.pt");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang, alternateLangUrl, t } = Astro2.props;
  const navLinks = lang === "pt" ? [
    { label: t("nav.services"), href: "/servicos/" },
    { label: t("nav.how-it-works"), href: "/como-funciona" },
    { label: t("nav.about"), href: "/sobre" },
    { label: t("nav.contact"), href: "/contacto" }
  ] : [
    { label: t("nav.services"), href: "/en/services/" },
    { label: t("nav.how-it-works"), href: "/en/how-it-works" },
    { label: t("nav.about"), href: "/en/about" },
    { label: t("nav.contact"), href: "/en/contact" }
  ];
  const homeHref = lang === "pt" ? "/" : "/en/";
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="container"> <nav class="nav-inner" id="main-nav" data-open="false"> <a${addAttribute(homeHref, "href")} class="nav-logo"> <span>MAU</span> MARKETING
</a> <!-- Hamburger toggle --> <button class="nav-toggle" id="nav-toggle" aria-controls="main-nav" aria-expanded="false"${addAttribute(t("nav.menu-open"), "aria-label")}> <span aria-hidden="true">☰</span> </button> <!-- Nav links --> <ul class="nav-links"> ${navLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> <!-- Actions: lang switcher + CTA --> <div class="nav-actions"> <a${addAttribute(alternateLangUrl, "href")} class="nav-lang"${addAttribute(`Switch to ${t("nav.lang-label")}`, "aria-label")}> ${t("nav.lang-label")} </a> <a${addAttribute(lang === "pt" ? "/contacto" : "/en/contact", "href")} class="nav-cta"> ${t("nav.cta")} </a> </div> </nav> </div> </header> <!-- Minimal inline JS for mobile nav toggle — no framework dependency --> `;
}, "/Volumes/echo.ops/maumarketing/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://maumarketing.pt");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang, t } = Astro2.props;
  const homeHref = lang === "pt" ? "/" : "/en/";
  const navLinks = lang === "pt" ? [
    { label: t("footer.services"), href: "/servicos/" },
    { label: t("footer.how-it-works"), href: "/como-funciona" },
    { label: t("footer.about"), href: "/sobre" },
    { label: t("footer.contact"), href: "/contacto" }
  ] : [
    { label: t("footer.services"), href: "/en/services/" },
    { label: t("footer.how-it-works"), href: "/en/how-it-works" },
    { label: t("footer.about"), href: "/en/about" },
    { label: t("footer.contact"), href: "/en/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="container"> <div class="footer-inner"> <!-- Brand --> <div class="footer-brand"> <a${addAttribute(homeHref, "href")} class="footer-logo"> <span>MAU</span> MARKETING
</a> <p class="footer-tagline">${t("footer.tagline")}</p> <a${addAttribute(t("footer.N\xCDTIDA-link"), "href")} class="footer-NÍTIDA" target="_blank" rel="noopener"> ${t("footer.brand")} </a> </div> <!-- Nav --> <nav class="footer-nav" aria-label="Footer navigation"> <h4>${t("footer.nav-heading")}</h4> <ul> ${navLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </nav> </div> <div class="footer-bottom"> <span>${t("footer.rights")}</span> </div> </div> </footer>`;
}, "/Volumes/echo.ops/maumarketing/src/components/Footer.astro", void 0);

const pt = {
  // ─── Navigation ───────────────────────────────────────────────────────────────
  "nav.logo": "MAU Marketing",
  "nav.services": "Serviços",
  "nav.how-it-works": "Como Funciona",
  "nav.about": "Sobre",
  "nav.contact": "Contacto",
  "nav.cta": "Falar connosco",
  "nav.lang-label": "EN",
  "nav.menu-open": "Abrir menu",
  "nav.menu-close": "Fechar menu",
  // ─── Footer ───────────────────────────────────────────────────────────────────
  "footer.brand": "A NÍTIDA Digital brand",
  "footer.tagline": "Marketing prático para negócios reais.",
  "footer.nav-heading": "Navegação",
  "footer.services": "Serviços",
  "footer.how-it-works": "Como Funciona",
  "footer.about": "Sobre",
  "footer.contact": "Contacto",
  "footer.rights": "© 2026 MAU MARKETING. Todos os direitos reservados.",
  "footer.NÍTIDA-link": "https://nitida.pt",
  // ─── Homepage Hero ────────────────────────────────────────────────────────────
  "hero.eyebrow": "A NÍTIDA Digital brand",
  "hero.headline": "Provavelmente não precisas de mais marketing.",
  "hero.headline-accent": "Precisas de marketing melhor.",
  "hero.subheadline": "Websites, landing pages e sistemas de follow-up para negócios que já estão fartos de conversa.",
  "hero.cta-primary": "Falar connosco",
  "hero.cta-secondary": "Ver serviços",
  // ─── Homepage — Services block ────────────────────────────────────────────────
  "home.services.heading": "O que fazemos",
  "home.services.subheading": "Três áreas de execução prática. Sem floreados.",
  // ─── Homepage — AI + Human block ──────────────────────────────────────────────
  "home.ai.heading": "IA com supervisão humana. Não o contrário.",
  "home.ai.body": "Usamos IA para pesquisar, rascunhar e sistematizar mais depressa. Mas o julgamento, a edição e as decisões que importam ficam sempre do lado humano. Nunca és despejado numa caixa preta.",
  // ─── Homepage — Trust block ────────────────────────────────────────────────────
  "home.trust.heading": "Não inventámos o marketing ontem",
  "home.trust.body": "A MAU Marketing é uma marca da NÍTIDA Digital, com anos de entrega digital real: websites, sistemas, integrações e trabalho de cliente. Sabemos a diferença entre teoria de marketing e execução que funciona.",
  "home.trust.NÍTIDA": "Conhecer a NÍTIDA Digital",
  "home.trust.NÍTIDA-url": "https://nitida.pt",
  // ─── Homepage — CTA block ─────────────────────────────────────────────────────
  "home.cta.heading": "O teu website está a custar-te clientes?",
  "home.cta.body": "Vamos perceber o que está a falhar e como corrigir.",
  "home.cta.button": "Falar connosco",
  // ─── Service Card (reusable) ──────────────────────────────────────────────────
  "service.cta": "Saber mais",
  // ─── Service: Landing Pages ───────────────────────────────────────────────────
  "service.landing.title": "Landing Pages e Websites de Conversão",
  "service.landing.problem": "O teu website existe. Mas não converte.",
  "service.landing.outcome": "Páginas que explicam o que ofereces, captam contactos e empurram visitantes para ação.",
  "service.landing.href": "/servicos/landing-pages",
  // ─── Service: Local Visibility ────────────────────────────────────────────────
  "service.local.title": "Visibilidade Local e Melhorias Práticas",
  "service.local.problem": "Não apareces onde os teus clientes te procuram.",
  "service.local.outcome": "Google Business otimizado, presença local real e correções que têm impacto imediato.",
  "service.local.href": "/servicos/visibilidade-local",
  // ─── Service: CRM ─────────────────────────────────────────────────────────────
  "service.crm.title": "CRM e Follow-up",
  "service.crm.problem": "Os leads entram e perdem-se.",
  "service.crm.outcome": "Pipeline claro, follow-up automatizado e menos dependência de memória e boa vontade.",
  "service.crm.href": "/servicos/crm-follow-up",
  // ─── Process Steps ────────────────────────────────────────────────────────────
  "process.heading": "O processo",
  "process.step1.number": "01",
  "process.step1.title": "Diagnóstico",
  "process.step1.body": "Percebemos o que está a falhar antes de propor qualquer coisa. Sem relatórios de 40 páginas para justificar o trabalho.",
  "process.step2.number": "02",
  "process.step2.title": "Oferta clara",
  "process.step2.body": "Definimos o que vai ser feito, como, e com que resultado esperado. Nada de promessas vagas.",
  "process.step3.number": "03",
  "process.step3.title": "Execução",
  "process.step3.body": "Entregamos o trabalho. Sem semanas perdidas em reuniões sobre reuniões.",
  "process.step4.number": "04",
  "process.step4.title": "Revisão e ajuste",
  "process.step4.body": "Medimos o que importa. Se algo não está a funcionar, ajustamos — não inventamos desculpas.",
  // ─── CTA Block (generic) ──────────────────────────────────────────────────────
  "cta.default.heading": "Pronto para parar de perder clientes?",
  "cta.default.body": "Fala connosco. Sem compromisso, sem pitch de vendas agressivo.",
  "cta.default.button": "Falar connosco",
  // ─── Contact Form ─────────────────────────────────────────────────────────────
  "contact.heading": "Fala connosco",
  "contact.subheading": "Conta-nos o teu problema. Respondemos com clareza, não com uma proposta de 40 páginas.",
  "contact.name": "Nome",
  "contact.name-placeholder": "O teu nome",
  "contact.business": "Nome do negócio",
  "contact.business-placeholder": "Opcional",
  "contact.website": "Website",
  "contact.website-placeholder": "Opcional — ex: https://exemplo.pt",
  "contact.service": "Em que precisas de ajuda?",
  "contact.service-placeholder": "Escolhe uma área",
  "contact.service-landing": "Landing pages / website de conversão",
  "contact.service-local": "Visibilidade local / Google Business",
  "contact.service-crm": "CRM / follow-up",
  "contact.service-other": "Outra coisa",
  "contact.message": "Mensagem",
  "contact.message-placeholder": "Descreve o que está a falhar ou o que precisas",
  "contact.budget": "Orçamento disponível",
  "contact.budget-placeholder": "Opcional — escolhe um intervalo",
  "contact.budget-500": "Menos de 500€",
  "contact.budget-1000": "500€ – 1.000€",
  "contact.budget-2500": "1.000€ – 2.500€",
  "contact.budget-5000": "2.500€ – 5.000€",
  "contact.budget-plus": "Mais de 5.000€",
  "contact.submit": "Enviar",
  "contact.submitting": "A enviar...",
  "contact.error": "Não foi possível enviar a mensagem. Tenta novamente dentro de momentos.",
  "contact.thanks.heading": "Recebemos.",
  "contact.thanks.body": "Voltamos a ti em breve — sem fanfarra, só resposta.",
  "contact.required": "Campo obrigatório",
  // ─── Services Overview Page ───────────────────────────────────────────────────
  "services-page.title": "Serviços — MAU Marketing",
  "services-page.description": "Landing pages, visibilidade local e CRM. Três áreas onde os negócios perdem mais — e onde ajudamos.",
  "services-page.heading": "Serviços",
  "services-page.subheading": "Marketing que funciona. Nas três áreas onde o teu negócio mais perde.",
  "services-page.intro": "Não fazemos tudo. Fazemos bem três coisas que têm impacto direto no teu negócio.",
  // ─── Landing Pages Service Page ───────────────────────────────────────────────
  "landing-page.title": "Landing Pages e Websites de Conversão — MAU Marketing",
  "landing-page.description": "Websites que trabalham como ferramentas de marketing, não como decoração digital.",
  "landing-page.hero.heading": "O teu website não é uma brochura.",
  "landing-page.hero.subheading": "É a primeira coisa que os teus clientes veem. Se não convence, não converte — e o dinheiro que gastaste em tráfego vai-se embora.",
  "landing-page.problem.heading": "O problema real",
  "landing-page.problem.body": "A maioria dos websites pequenos falha da mesma forma: oferta pouco clara, sem CTA óbvio, texto genérico, e zero atenção ao que o visitante está a tentar decidir. O resultado é tráfego que não converte e leads que nunca chegam.",
  "landing-page.what.heading": "O que fazemos",
  "landing-page.what.body": "Construímos páginas com uma função clara: explicar o que ofereces, eliminar dúvidas e guiar o visitante para uma ação. Seja um pedido de orçamento, uma marcação ou um contacto direto.",
  "landing-page.what.item1": "Análise da oferta e da audiência",
  "landing-page.what.item2": "Arquitetura de conteúdo e copywriting",
  "landing-page.what.item3": "Design focado em conversão",
  "landing-page.what.item4": "Integração com formulário de contacto ou CRM",
  "landing-page.what.item5": "Velocidade e performance baseline",
  "landing-page.outcome.heading": "O que podes esperar",
  "landing-page.outcome.body": "Uma página que faz o trabalho comercial que devia estar a fazer. Não vamos prometer x% de conversão — prometemos clareza, estrutura e execução que não envergonha o teu negócio.",
  // ─── Local Visibility Service Page ────────────────────────────────────────────
  "local-page.title": "Visibilidade Local e Melhorias Práticas — MAU Marketing",
  "local-page.description": "Aparecer no Google quando os teus clientes te procuram. Google Business, SEO local e correções que têm impacto real.",
  "local-page.hero.heading": "Os teus clientes estão a procurar-te. Mas não te encontram.",
  "local-page.hero.subheading": "Ter um bom negócio não chega se não apareces quando alguém pesquisa o que ofereces na tua zona.",
  "local-page.problem.heading": "O problema real",
  "local-page.problem.body": "O Google Business profile está por preencher ou desatualizado. O site não tem informação local relevante. As reviews são poucas ou sem resposta. Resultado: apareces atrás da concorrência que faz pior trabalho mas tem melhor presença digital.",
  "local-page.what.heading": "O que fazemos",
  "local-page.what.body": "Corrigimos o que está a puxar a tua visibilidade para baixo e implementamos o que a sobe. Trabalho prático, com impacto mensurável.",
  "local-page.what.item1": "Auditoria e otimização do Google Business Profile",
  "local-page.what.item2": "Consistência de NAP (nome, morada, telefone) em diretórios",
  "local-page.what.item3": "Estratégia de reviews e gestão de reputação",
  "local-page.what.item4": "Melhorias de SEO local na página",
  "local-page.what.item5": "Correções de performance e fricção técnica",
  "local-page.outcome.heading": "O que podes esperar",
  "local-page.outcome.body": "Mais visibilidade nas pesquisas locais, perfil que transmite confiança, e menos leads que desaparecem antes de te contactar.",
  // ─── CRM Service Page ─────────────────────────────────────────────────────────
  "crm-page.title": "CRM e Follow-up — MAU Marketing",
  "crm-page.description": "Para de perder leads no caos. Pipeline claro, follow-up automatizado e menos dependência de WhatsApp e boa memória.",
  "crm-page.hero.heading": "Os leads entram. E perdem-se.",
  "crm-page.hero.subheading": "WhatsApp, email, notas em papel, memória. É assim que se perdem negócios que já deviam estar fechados.",
  "crm-page.problem.heading": "O problema real",
  "crm-page.problem.body": "Sem um sistema claro, a gestão de leads é sempre reativa. Segues quando te lembras. Esqueces quando estás ocupado. Perdes negócios não por falta de interesse do cliente, mas por falta de follow-up sistemático.",
  "crm-page.what.heading": "O que fazemos",
  "crm-page.what.body": "Implementamos e configuramos sistemas de CRM adequados à escala do teu negócio — sem over-engineering. Automatizamos o follow-up básico para que o trabalho aconteça mesmo quando não estás a pensar nisso.",
  "crm-page.what.item1": "Avaliação do fluxo atual de leads",
  "crm-page.what.item2": "Setup e configuração de CRM (EspoCRM e outros)",
  "crm-page.what.item3": "Definição de pipeline e etapas de qualificação",
  "crm-page.what.item4": "Automações de follow-up por email",
  "crm-page.what.item5": "Integração com formulários e fontes de lead",
  "crm-page.outcome.heading": "O que podes esperar",
  "crm-page.outcome.body": "Um pipeline que sabes como está a qualquer momento. Follow-up que acontece sem dependência de memória. Menos leads perdidos, mais negócios fechados.",
  // ─── How It Works Page ────────────────────────────────────────────────────────
  "how-page.title": "Como Funciona — MAU Marketing",
  "how-page.description": "Um processo direto: diagnóstico, oferta clara, execução e revisão. Sem surpresas, sem promessas vagas.",
  "how-page.heading": "Como funciona",
  "how-page.subheading": "Um processo direto. Sem surpresas.",
  "how-page.intro": "Não temos metodologia com nome de marca nem framework com sigla. Temos um processo que funciona e que podes perceber antes de gastar um cêntimo.",
  "how-page.ai.heading": "O papel da IA — sem exageros",
  "how-page.ai.body1": "Usamos ferramentas de IA para pesquisar mais depressa, rascunhar versões iniciais e sistematizar tarefas repetitivas. Isso permite-nos entregar mais, mais rápido, sem aumentar os teus custos proporcionalmente.",
  "how-page.ai.body2": "O que a IA não faz: tomar decisões estratégicas, validar o tom de voz do teu negócio, ou substituir o julgamento sobre o que funciona no teu mercado específico. Isso fica do nosso lado — humano, responsável e revisado.",
  // ─── About Page ───────────────────────────────────────────────────────────────
  "about-page.title": "Sobre a MAU Marketing — A NÍTIDA Digital brand",
  "about-page.description": "MAU Marketing é uma marca da NÍTIDA Digital, focada em execução prática de marketing para pequenos negócios.",
  "about-page.heading": "Sobre a MAU Marketing",
  "about-page.NÍTIDA-badge": "A NÍTIDA Digital brand",
  "about-page.intro.heading": "Sim, o nome é esse mesmo.",
  "about-page.intro.body1": "MAU Marketing. Em português, soa ao que parece. Isso é intencional. Há demasiado marketing mau por aí — genérico, inflado, desligado da realidade dos negócios. Quisemos deixar isso claro logo no nome.",
  "about-page.intro.body2": "O que fazemos é diferente: marketing que serve a função comercial do teu negócio, não o ego da agência. Páginas que convertem. Presença local que aparece. Sistemas que fecham negócios sem depender de boa memória.",
  "about-page.NÍTIDA.heading": "A ligação à NÍTIDA Digital",
  "about-page.NÍTIDA.body1": "A MAU Marketing é uma marca da NÍTIDA Digital. A NÍTIDA faz entrega digital real — websites, sistemas, integrações, trabalho de cliente com anos de histórico. A MAU é a face mais focada em marketing e conversão dessa capacidade.",
  "about-page.NÍTIDA.body2": "Não somos dois negócios diferentes. Somos a mesma equipa com um foco diferente: a NÍTIDA para quem precisa de web e digital em geral, a MAU para quem precisa de marketing, visibilidade e mais leads.",
  "about-page.NÍTIDA.link": "Ver a NÍTIDA Digital",
  "about-page.NÍTIDA.url": "https://nitida.pt",
  "about-page.approach.heading": "Como abordamos o trabalho",
  "about-page.approach.item1.title": "Diretos",
  "about-page.approach.item1.body": "Dizemos o que achamos antes de dizer o que queres ouvir. Se o problema não é o website, dizemos isso.",
  "about-page.approach.item2.title": "Práticos",
  "about-page.approach.item2.body": "Entregamos trabalho, não relatórios. O foco é no que muda resultados, não no que enche apresentações.",
  "about-page.approach.item3.title": "Responsáveis",
  "about-page.approach.item3.body": "Usamos IA como ferramenta, não como substituto do julgamento. O que sai com o nosso nome foi revisto por humanos.",
  // ─── Contact Page ─────────────────────────────────────────────────────────────
  "contact-page.title": "Contacto — MAU Marketing",
  "contact-page.description": "Fala connosco sobre o teu negócio. Sem compromisso, sem pitch agressivo.",
  "contact-page.heading": "Fala connosco",
  "contact-page.subheading": "Conta-nos o problema. Não precisas de ter tudo definido — só precisas de começar a conversa."
};

const en = {
  // ─── Navigation ───────────────────────────────────────────────────────────────
  "nav.logo": "MAU Marketing",
  "nav.services": "Services",
  "nav.how-it-works": "How It Works",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.cta": "Get in touch",
  "nav.lang-label": "PT",
  "nav.menu-open": "Open menu",
  "nav.menu-close": "Close menu",
  // ─── Footer ───────────────────────────────────────────────────────────────────
  "footer.brand": "A NÍTIDA Digital brand",
  "footer.tagline": "Practical marketing for real businesses.",
  "footer.nav-heading": "Navigation",
  "footer.services": "Services",
  "footer.how-it-works": "How It Works",
  "footer.about": "About",
  "footer.contact": "Contact",
  "footer.rights": "© 2026 MAU MARKETING. All rights reserved.",
  "footer.NÍTIDA-link": "https://nitida.pt",
  // ─── Homepage Hero ────────────────────────────────────────────────────────────
  "hero.eyebrow": "A NÍTIDA Digital brand",
  "hero.headline": "Not more marketing.",
  "hero.headline-accent": "Better marketing.",
  "hero.subheadline": "Websites, landing pages and follow-up systems for businesses tired of empty promises.",
  "hero.cta-primary": "Get in touch",
  "hero.cta-secondary": "See services",
  // ─── Homepage — Services block ────────────────────────────────────────────────
  "home.services.heading": "What we do",
  "home.services.subheading": "Three areas of practical execution. No filler.",
  // ─── Homepage — AI + Human block ──────────────────────────────────────────────
  "home.ai.heading": "AI with human supervision. Not the other way around.",
  "home.ai.body": "We use AI to research, draft and systematize faster. But judgement, editing and the decisions that matter always stay on the human side. You never get dumped into a black box.",
  // ─── Homepage — Trust block ────────────────────────────────────────────────────
  "home.trust.heading": "We didn't invent marketing yesterday",
  "home.trust.body": "MAU Marketing is a brand of NÍTIDA Digital, with years of real digital delivery: websites, systems, integrations and client work. We know the difference between marketing theory and execution that actually works.",
  "home.trust.NÍTIDA": "Meet NÍTIDA Digital",
  "home.trust.NÍTIDA-url": "https://nitida.pt",
  // ─── Homepage — CTA block ─────────────────────────────────────────────────────
  "home.cta.heading": "Is your website costing you customers?",
  "home.cta.body": "Let's figure out what's leaking leads and fix it.",
  "home.cta.button": "Get in touch",
  // ─── Service Card (reusable) ──────────────────────────────────────────────────
  "service.cta": "Learn more",
  // ─── Service: Landing Pages ───────────────────────────────────────────────────
  "service.landing.title": "Landing Pages and Conversion Websites",
  "service.landing.problem": "Your website exists. But it doesn't convert.",
  "service.landing.outcome": "Pages that explain your offer, capture contacts and push visitors toward action.",
  "service.landing.href": "/en/services/landing-pages",
  // ─── Service: Local Visibility ────────────────────────────────────────────────
  "service.local.title": "Local Visibility and Practical Improvements",
  "service.local.problem": "You don't show up where your customers are looking.",
  "service.local.outcome": "Optimised Google Business, real local presence and fixes that have immediate impact.",
  "service.local.href": "/en/services/local-visibility",
  // ─── Service: CRM ─────────────────────────────────────────────────────────────
  "service.crm.title": "CRM and Follow-up",
  "service.crm.problem": "Leads come in and disappear.",
  "service.crm.outcome": "Clear pipeline, automated follow-up and less reliance on memory and goodwill.",
  "service.crm.href": "/en/services/crm-follow-up",
  // ─── Process Steps ────────────────────────────────────────────────────────────
  "process.heading": "The process",
  "process.step1.number": "01",
  "process.step1.title": "Diagnosis",
  "process.step1.body": "We understand what's failing before proposing anything. No 40-page reports to justify the work.",
  "process.step2.number": "02",
  "process.step2.title": "Clear offer",
  "process.step2.body": "We define what will be done, how, and with what expected outcome. No vague promises.",
  "process.step3.number": "03",
  "process.step3.title": "Execution",
  "process.step3.body": "We deliver the work. No weeks lost in meetings about meetings.",
  "process.step4.number": "04",
  "process.step4.title": "Review and adjust",
  "process.step4.body": "We measure what matters. If something isn't working, we adjust — we don't invent excuses.",
  // ─── CTA Block (generic) ──────────────────────────────────────────────────────
  "cta.default.heading": "Ready to stop losing customers?",
  "cta.default.body": "Talk to us. No commitment, no aggressive sales pitch.",
  "cta.default.button": "Get in touch",
  // ─── Contact Form ─────────────────────────────────────────────────────────────
  "contact.heading": "Get in touch",
  "contact.subheading": "Tell us your problem. We respond with clarity, not a 40-page proposal.",
  "contact.name": "Name",
  "contact.name-placeholder": "Your name",
  "contact.business": "Business name",
  "contact.business-placeholder": "Optional",
  "contact.website": "Website",
  "contact.website-placeholder": "Optional — e.g. https://example.com",
  "contact.service": "What do you need help with?",
  "contact.service-placeholder": "Choose an area",
  "contact.service-landing": "Landing pages / conversion website",
  "contact.service-local": "Local visibility / Google Business",
  "contact.service-crm": "CRM / follow-up",
  "contact.service-other": "Something else",
  "contact.message": "Message",
  "contact.message-placeholder": "Describe what's failing or what you need",
  "contact.budget": "Available budget",
  "contact.budget-placeholder": "Optional — choose a range",
  "contact.budget-500": "Under €500",
  "contact.budget-1000": "€500 – €1,000",
  "contact.budget-2500": "€1,000 – €2,500",
  "contact.budget-5000": "€2,500 – €5,000",
  "contact.budget-plus": "Over €5,000",
  "contact.submit": "Send",
  "contact.submitting": "Sending...",
  "contact.error": "Could not send your message. Please try again in a moment.",
  "contact.thanks.heading": "Got it.",
  "contact.thanks.body": "We'll get back to you shortly — no fanfare, just a response.",
  "contact.required": "Required field",
  // ─── Services Overview Page ───────────────────────────────────────────────────
  "services-page.title": "Services — MAU Marketing",
  "services-page.description": "Landing pages, local visibility and CRM. Three areas where businesses lose most — and where we help.",
  "services-page.heading": "Services",
  "services-page.subheading": "Marketing that works. In the three areas where your business loses most.",
  "services-page.intro": "We don't do everything. We do three things well that have direct impact on your business.",
  // ─── Landing Pages Service Page ───────────────────────────────────────────────
  "landing-page.title": "Landing Pages and Conversion Websites — MAU Marketing",
  "landing-page.description": "Websites that work as marketing tools, not digital decoration.",
  "landing-page.hero.heading": "Your website is not a brochure.",
  "landing-page.hero.subheading": "It's the first thing your customers see. If it doesn't convince, it doesn't convert — and the money you spent on traffic walks away.",
  "landing-page.problem.heading": "The real problem",
  "landing-page.problem.body": "Most small business websites fail the same way: unclear offer, no obvious CTA, generic copy, and zero attention to what the visitor is trying to decide. The result is traffic that doesn't convert and leads that never arrive.",
  "landing-page.what.heading": "What we do",
  "landing-page.what.body": "We build pages with a clear function: explain what you offer, remove doubt and guide the visitor toward an action. Whether that's a quote request, a booking or a direct contact.",
  "landing-page.what.item1": "Offer and audience analysis",
  "landing-page.what.item2": "Content architecture and copywriting",
  "landing-page.what.item3": "Conversion-focused design",
  "landing-page.what.item4": "Contact form or CRM integration",
  "landing-page.what.item5": "Speed and performance baseline",
  "landing-page.outcome.heading": "What you can expect",
  "landing-page.outcome.body": "A page that does the commercial work it should be doing. We won't promise x% conversion — we promise clarity, structure and execution that doesn't embarrass your business.",
  // ─── Local Visibility Service Page ────────────────────────────────────────────
  "local-page.title": "Local Visibility and Practical Improvements — MAU Marketing",
  "local-page.description": "Show up on Google when your customers search for you. Google Business, local SEO and fixes that have real impact.",
  "local-page.hero.heading": "Your customers are looking for you. But they can't find you.",
  "local-page.hero.subheading": "Having a good business isn't enough if you don't show up when someone searches for what you offer in your area.",
  "local-page.problem.heading": "The real problem",
  "local-page.problem.body": "The Google Business profile is incomplete or outdated. The site has no relevant local information. Reviews are few or unanswered. Result: you appear behind competitors who do worse work but have better digital presence.",
  "local-page.what.heading": "What we do",
  "local-page.what.body": "We fix what's pulling your visibility down and implement what pushes it up. Practical work, with measurable impact.",
  "local-page.what.item1": "Google Business Profile audit and optimisation",
  "local-page.what.item2": "NAP consistency (name, address, phone) across directories",
  "local-page.what.item3": "Review strategy and reputation management",
  "local-page.what.item4": "On-page local SEO improvements",
  "local-page.what.item5": "Performance and technical friction fixes",
  "local-page.outcome.heading": "What you can expect",
  "local-page.outcome.body": "More visibility in local searches, a profile that builds trust, and fewer leads that disappear before contacting you.",
  // ─── CRM Service Page ─────────────────────────────────────────────────────────
  "crm-page.title": "CRM and Follow-up — MAU Marketing",
  "crm-page.description": "Stop losing leads in the chaos. Clear pipeline, automated follow-up and less reliance on WhatsApp and good memory.",
  "crm-page.hero.heading": "Leads come in. And disappear.",
  "crm-page.hero.subheading": "WhatsApp, email, notes on paper, memory. That's how you lose deals that should already be closed.",
  "crm-page.problem.heading": "The real problem",
  "crm-page.problem.body": "Without a clear system, lead management is always reactive. You follow up when you remember. You forget when you're busy. You lose deals not from lack of customer interest, but from lack of systematic follow-up.",
  "crm-page.what.heading": "What we do",
  "crm-page.what.body": "We implement and configure CRM systems suited to your business scale — without over-engineering. We automate basic follow-up so the work happens even when you're not thinking about it.",
  "crm-page.what.item1": "Current lead flow assessment",
  "crm-page.what.item2": "CRM setup and configuration (EspoCRM and others)",
  "crm-page.what.item3": "Pipeline and qualification stage definition",
  "crm-page.what.item4": "Email follow-up automations",
  "crm-page.what.item5": "Integration with forms and lead sources",
  "crm-page.outcome.heading": "What you can expect",
  "crm-page.outcome.body": "A pipeline you can see the state of at any moment. Follow-up that happens without relying on memory. Fewer lost leads, more closed deals.",
  // ─── How It Works Page ────────────────────────────────────────────────────────
  "how-page.title": "How It Works — MAU Marketing",
  "how-page.description": "A direct process: diagnosis, clear offer, execution and review. No surprises, no vague promises.",
  "how-page.heading": "How it works",
  "how-page.subheading": "A direct process. No surprises.",
  "how-page.intro": "We don't have a branded methodology or a framework with an acronym. We have a process that works and that you can understand before spending a cent.",
  "how-page.ai.heading": "The role of AI — without the hype",
  "how-page.ai.body1": "We use AI tools to research faster, draft initial versions and systematize repetitive tasks. This lets us deliver more, faster, without proportionally increasing your costs.",
  "how-page.ai.body2": "What AI doesn't do: make strategic decisions, validate your business voice, or replace judgement about what works in your specific market. That stays on our side — human, accountable and reviewed.",
  // ─── About Page ───────────────────────────────────────────────────────────────
  "about-page.title": "About MAU Marketing — A NÍTIDA Digital brand",
  "about-page.description": "MAU Marketing is a NÍTIDA Digital brand focused on practical marketing execution for small businesses.",
  "about-page.heading": "About MAU Marketing",
  "about-page.NÍTIDA-badge": "A NÍTIDA Digital brand",
  "about-page.intro.heading": "Yes, the name is deliberate.",
  "about-page.intro.body1": `MAU Marketing. In Portuguese, "mau" means bad. That's the point. There's too much bad marketing out there — generic, inflated, disconnected from how real businesses actually work. We wanted to make that clear right in the name.`,
  "about-page.intro.body2": "What we do is different: marketing that serves the commercial function of your business, not the agency's ego. Pages that convert. Local presence that shows up. Systems that close deals without relying on good memory.",
  "about-page.NÍTIDA.heading": "The NÍTIDA Digital connection",
  "about-page.NÍTIDA.body1": "MAU Marketing is a brand of NÍTIDA Digital. NÍTIDA does real digital delivery — websites, systems, integrations and client work with years of track record. MAU is the more marketing and conversion-focused face of that capability.",
  "about-page.NÍTIDA.body2": "We're not two different businesses. We're the same team with a different focus: NÍTIDA for those who need web and digital in general, MAU for those who need marketing, visibility and more leads.",
  "about-page.NÍTIDA.link": "See NÍTIDA Digital",
  "about-page.NÍTIDA.url": "https://nitida.pt",
  "about-page.approach.heading": "How we approach the work",
  "about-page.approach.item1.title": "Direct",
  "about-page.approach.item1.body": "We say what we think before we say what you want to hear. If the problem isn't the website, we'll say so.",
  "about-page.approach.item2.title": "Practical",
  "about-page.approach.item2.body": "We deliver work, not reports. The focus is on what changes results, not what fills presentations.",
  "about-page.approach.item3.title": "Accountable",
  "about-page.approach.item3.body": "We use AI as a tool, not a substitute for judgement. What goes out under our name has been reviewed by humans.",
  // ─── Contact Page ─────────────────────────────────────────────────────────────
  "contact-page.title": "Contact — MAU Marketing",
  "contact-page.description": "Talk to us about your business. No commitment, no aggressive pitch.",
  "contact-page.heading": "Get in touch",
  "contact-page.subheading": "Tell us the problem. You don't need to have everything figured out — you just need to start the conversation."
};

const translations = { pt, en };
function useTranslations(lang) {
  return function t(key) {
    return translations[lang][key] ?? translations["pt"][key] ?? key;
  };
}

const $$Astro = createAstro("https://maumarketing.pt");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, lang, alternateLangUrl } = Astro2.props;
  const t = useTranslations(lang);
  const canonicalUrl = new URL(Astro2.url.pathname, "https://maumarketing.pt").href;
  const altLang = lang === "pt" ? "en" : "pt";
  const alternateFull = new URL(alternateLangUrl, "https://maumarketing.pt").href;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Alternate language --><link rel="alternate"${addAttribute(altLang, "hreflang")}${addAttribute(alternateFull, "href")}><link rel="alternate" hreflang="x-default" href="https://maumarketing.pt/"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:locale"${addAttribute(lang === "pt" ? "pt_PT" : "en_GB", "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Sora:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"><!-- Prevent Pico's dark mode from kicking in — we only ship light --><meta name="color-scheme" content="light">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "lang": lang, "alternateLangUrl": alternateLangUrl, "t": t })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "lang": lang, "t": t })} </body></html>`;
}, "/Volumes/echo.ops/maumarketing/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, useTranslations as u };
