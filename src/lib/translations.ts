export type Locale = "es" | "en";

export const translations = {
  es: {
    header: {
      nav: [
        { href: "#problema", label: "El problema" },
        { href: "#producto", label: "Producto" },
        { href: "#como-funciona", label: "Cómo funciona" },
        { href: "#validacion", label: "Validación" },
        { href: "#precios", label: "Precios" },
        { href: "#faq", label: "FAQ" },
      ],
      cta: "Agendar demo",
      openMenu: "Abrir menú",
    },
    hero: {
      badge: "Validado con dueños, gerentes y contadores de empresas uruguayas",
      h1: "El CFO con inteligencia artificial que le faltaba a tu empresa",
      p: "Finora apoya a tu equipo de finanzas a anticipar problemas de caja, entender la rentabilidad del negocio y tomar mejores decisiones — con recomendaciones explicables, sin reemplazar el criterio de tu contador.",
      ctaPrimary: "Agendar una demo",
      ctaSecondary: "Ver qué encontramos en la validación",
      integrations: "Se integra con Odoo, Excel/Google Sheets y otros sistemas contables que ya usás.",
      stats: [
        { value: "Multisector", label: "tecnología, salud, industria, comercio y más" },
        { value: "1 a 50+", label: "empleados: el rango de tamaño de las empresas consultadas" },
        { value: "Semanal", label: "la frecuencia de actualización más pedida" },
      ],
    },
    problem: {
      eyebrow: "Lo que encontramos al validar la idea",
      h2: "Gestionar la caja de una empresa a pulmón es agotador",
      p: "Consultamos a dueños, gerentes, contadores y responsables administrativos de empresas uruguayas de distintos sectores y tamaños. Esto fue lo que más se repitió — y así cambia con Finora.",
      colBefore: "Hoy, sin Finora",
      colAfter: "Con Finora",
      rows: [
        {
          before: "No sabés cuánta caja vas a tener la semana que viene",
          after: "Proyección de flujo de caja semana a semana",
        },
        {
          before: "Te enterás de un faltante de dinero cuando ya es tarde",
          after: "Alertas tempranas ante posibles faltantes",
        },
        {
          before: "La info está repartida entre Odoo, planillas y mails",
          after: "Todo integrado con el sistema que ya usás",
        },
        {
          before: "Una sola persona interpreta todo, sin tiempo ni respaldo",
          after: "Recomendaciones explicables, revisables por tu contador",
        },
        {
          before: "Pedir financiamiento implica juntar documentación a ciegas",
          after: "Información clara y ordenada, lista para presentar",
        },
      ],
      quote:
        "“No siempre se tiene claro qué documentación se requiere o cuánto conviene solicitar”",
      quoteAttribution:
        "Una de las conclusiones más repetidas por quienes ya intentaron acceder a financiamiento bancario en los últimos dos años.",
    },
    solution: {
      eyebrow: "La solución",
      h2: "Un CFO con IA, siempre disponible para tu equipo",
      p: "Finora toma la información financiera que ya generás y la convierte en proyecciones, alertas y recomendaciones claras. Priorizamos las funciones que las empresas consultadas pidieron con más frecuencia.",
      heroCard: {
        badge: "La más pedida",
        title: "Proyección de flujo de caja",
        desc: "Visualizá cuánta caja vas a tener en las próximas semanas y meses, antes de que el problema aparezca.",
      },
      topFeatures: [
        {
          label: "Alertas",
          title: "Alertas tempranas",
          desc: "Avisos automáticos ante posibles faltantes de dinero, para actuar con tiempo y no cuando ya es tarde.",
        },
        {
          label: "Rentabilidad",
          title: "Análisis de rentabilidad",
          desc: "Entendé qué productos, clientes o líneas de negocio realmente te dejan margen.",
        },
        {
          label: "Acción",
          title: "Recomendaciones y plan de acción",
          desc: "Cada análisis viene acompañado de próximos pasos concretos, explicados en lenguaje simple.",
        },
        {
          label: "Escenarios",
          title: "Simulación de escenarios",
          desc: "Probá distintas decisiones —una inversión, un nuevo cliente, un aumento de costos— antes de tomarlas.",
        },
      ],
      bottomFeatures: [
        {
          label: "Histórico",
          title: "Comparación con períodos anteriores",
          desc: "Seguimiento mes a mes y año a año para detectar tendencias a tiempo.",
        },
        {
          label: "Cobros y pagos",
          title: "Control del ciclo de cobros y pagos",
          desc: "Visibilidad clara de qué vas a cobrar, qué tenés que pagar, y cuándo.",
        },
        {
          label: "Integración",
          title: "Integración con tu sistema contable",
          desc: "Se conecta con Odoo, Excel/Google Sheets y otros sistemas que ya usás, sin duplicar trabajo.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      h2: "De tus datos a una decisión, en tres pasos",
      steps: [
        {
          title: "Conectá tus datos",
          desc: "Vinculá tu sistema contable (Odoo, Excel/Google Sheets u otro) o cargá la información manualmente. Vos elegís qué compartir.",
        },
        {
          title: "La IA analiza y proyecta",
          desc: "Finora procesa tu información e identifica tendencias, riesgos y oportunidades, con la frecuencia de actualización que necesites.",
        },
        {
          title: "Recibís recomendaciones claras",
          desc: "Cada conclusión muestra los datos que la respaldan y puede ser revisada por tu contador o asesor antes de decidir.",
        },
      ],
    },
    trust: {
      eyebrow: "Confianza, no caja negra",
      h2: "Lo que más te preocuparía, es lo primero que resolvimos",
      p: "Le preguntamos directamente a dueños, gerentes y contadores qué les preocuparía de usar una herramienta como esta. Estas fueron sus principales dudas — y cómo las abordamos.",
      concerns: [
        {
          concern: "Seguridad y confidencialidad de la información",
          answer:
            "Fue la preocupación más repetida en nuestra validación. Tus datos financieros son sensibles y así los tratamos: cifrado, control de accesos y vos decidís qué se conecta.",
          italic: false,
        },
        {
          concern: "Exactitud de los resultados",
          answer:
            "Cada conclusión muestra los datos que la respaldan y el cálculo puede ser revisado y auditado, no es una caja negra.",
          italic: false,
        },
        {
          concern: "“Que reemplace el criterio de mi contador”",
          answer:
            "Una de las empresas consultadas lo dijo explícitamente, y coincidimos: Finora se posiciona como complemento, no reemplazo. Tu contador o asesor puede validar cada informe.",
          italic: true,
        },
        {
          concern: "Tiempo para cargar la información",
          answer:
            "Nos integramos con lo que ya usás (Odoo, planillas, sistema contable) para minimizar la carga manual desde el primer día.",
          italic: false,
        },
      ],
    },
    validation: {
      eyebrow: "Validación de la idea",
      h2: "No inventamos el problema, lo dijo el mercado",
      p: "Antes de construir, consultamos a dueños, socios, gerentes, contadores y responsables administrativos de empresas uruguayas de sectores heterogéneos, difundiendo la encuesta por correo, WhatsApp y LinkedIn.",
      sectors: [
        "Tecnología",
        "Salud",
        "Comercio",
        "Industria",
        "Gastronomía y hotelería",
        "Servicios profesionales",
        "Editorial",
      ],
      systems: ["Odoo", "Excel / Google Sheets", "ZetaSoftware", "TAREUS", "Memory", "Sistemas internos propios"],
      card1: {
        title: "Quiénes participaron",
        desc: "Desde emprendimientos de una persona hasta empresas de más de 50 empleados",
      },
      card2: {
        title: "Sistemas que usan hoy",
        desc: "Desde planillas hasta ERPs — nos integramos con lo que ya tenés funcionando",
      },
      card3: {
        title: "Utilidad percibida",
        desc: "La mayoría la calificó como útil o muy útil",
        sub: "(4 o 5 sobre 5) al preguntarle qué tan útil sería una herramienta así para su empresa.",
      },
      footer:
        "Seguimos entrevistando empresas interesadas en profundizar la validación — si te interesa participar, contanos en el formulario de abajo.",
    },
    pricing: {
      eyebrow: "Precios",
      h2: "Un plan según el tamaño de tu empresa",
      p: "Nada de plantillas genéricas: cada plan se arma a medida de tu empresa, según lo que nos dijeron las empresas que ya consultamos. Agendá una demo y te armamos una propuesta con precio incluido.",
      mostChosen: "Más elegido en la validación",
      cta: "Consultar presupuesto",
      plans: [
        {
          name: "Starter",
          audience: "Emprendimientos y equipos de 1 a 10 personas",
          features: [
            "Proyección de flujo de caja",
            "Alertas tempranas",
            "Informe ejecutivo mensual",
            "1 sistema conectado",
          ],
        },
        {
          name: "Growth",
          audience: "Empresas en crecimiento de 11 a 50 personas",
          features: [
            "Todo lo de Starter",
            "Análisis de rentabilidad",
            "Simulación de escenarios",
            "Comparación con períodos anteriores",
            "Integración con tu sistema contable",
          ],
        },
        {
          name: "A medida",
          audience: "Empresas de más de 50 personas o necesidades específicas",
          features: [
            "Todo lo de Growth",
            "Scoring de riesgo financiero",
            "Validación de informes con contador incluida",
            "Soporte dedicado",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      h2: "Las dudas que más nos plantearon",
      items: [
        {
          q: "¿Finora reemplaza a mi contador?",
          a: "No. En nuestra validación, quienes ya trabajan con un contador fueron claros: la herramienta debe ser un complemento, no un reemplazo. Finora se encarga del análisis y la proyección; tu contador o asesor puede revisar y validar cada informe antes de que lo uses para decidir.",
        },
        {
          q: "¿Cómo protegen la seguridad de mis datos financieros?",
          a: "Fue la principal preocupación en la validación que hicimos, y la tomamos en serio: la información se transmite y almacena cifrada, con control de accesos, y vos decidís qué sistemas conectar y qué datos compartir.",
        },
        {
          q: "¿Con qué sistemas se integra?",
          a: "Hoy nos enfocamos en integrarnos con los sistemas más usados por las empresas que consultamos: Odoo, Excel/Google Sheets, y otros sistemas contables. Si usás otro, contanos en la demo y evaluamos la integración.",
        },
        {
          q: "¿Puedo probarlo antes de contratarlo?",
          a: "Sí. Muchas de las empresas que consultamos nos dijeron que antes de contratar preferirían una prueba gratuita o un piloto, así que eso es justamente lo que ofrecemos al agendar una demo.",
        },
        {
          q: "¿Cómo sé que puedo confiar en las recomendaciones?",
          a: "Cada conclusión muestra los datos que la respaldan y el cálculo puede revisarse y auditarse. No es una caja negra: podés ver de dónde sale cada número.",
        },
        {
          q: "¿Con qué frecuencia se actualiza el análisis?",
          a: "Vos elegís: la mayoría de las empresas que consultamos prefiere una actualización semanal, aunque también ofrecemos frecuencia mensual o en tiempo real si ya trabajás con un ERP conectado.",
        },
      ],
    },
    demoForm: {
      eyebrow: "Agendemos una demo",
      h2: "Contanos de tu empresa y te mostramos Finora en acción",
      p: "En 20 minutos te mostramos cómo se vería tu flujo de caja proyectado, qué alertas tendrías hoy y cómo se integraría con tu sistema actual.",
      bullets: [
        "Demo personalizada con datos de ejemplo de tu sector",
        "Sin costo ni compromiso",
        "Podés invitar a tu contador o socio",
      ],
      contactPrefix: "¿Preferís escribirnos directo?",
      contactLink: "Escribinos por mail",
      fields: {
        nombre: { label: "Nombre", placeholder: "Tu nombre" },
        empresa: { label: "Empresa", placeholder: "Nombre de tu empresa" },
        email: { label: "Email", placeholder: "vos@empresa.com" },
        telefono: { label: "Teléfono (opcional)", placeholder: "+598 ..." },
        rol: {
          label: "Rol en la empresa",
          placeholder: "Seleccioná una opción",
          options: [
            "Dueño/a o socio/a",
            "Director/a o gerente general",
            "Contador/a interno/a",
            "Responsable administrativo",
            "Otro",
          ],
        },
        mensaje: {
          label: "Contanos brevemente tu situación (opcional)",
          placeholder: "Ej: manejamos la caja en Excel y nos cuesta anticipar los pagos del mes que viene...",
        },
      },
      submit: "Agendar demo",
      submitting: "Enviando...",
      consent: "Al enviar aceptás que te contactemos para coordinar la demo. No compartimos tu información con terceros.",
      success: {
        title: "¡Listo, recibimos tu solicitud!",
        p: "Te vamos a escribir en las próximas horas para coordinar el mejor horario para la demo.",
        another: "Enviar otra solicitud",
      },
      errors: {
        generic: "No pudimos enviar tu solicitud. Intentá de nuevo.",
        unexpected: "Ocurrió un error inesperado.",
      },
    },
    footer: {
      tagline: "Proyecto de Laboratorio de Proyectos Aplicados — Universidad ORT Uruguay. En etapa de validación con empresas uruguayas.",
      contact: "Escribinos",
      copyright: "Todos los derechos reservados.",
    },
  },
  en: {
    header: {
      nav: [
        { href: "#problema", label: "The problem" },
        { href: "#producto", label: "Product" },
        { href: "#como-funciona", label: "How it works" },
        { href: "#validacion", label: "Validation" },
        { href: "#precios", label: "Pricing" },
        { href: "#faq", label: "FAQ" },
      ],
      cta: "Book a demo",
      openMenu: "Open menu",
    },
    hero: {
      badge: "Validated with owners, managers and accountants at Uruguayan companies",
      h1: "The AI-powered CFO your company was missing",
      p: "Finora helps your finance team anticipate cash-flow problems, understand the business's profitability, and make better decisions — with explainable recommendations, without replacing your accountant's judgment.",
      ctaPrimary: "Book a demo",
      ctaSecondary: "See what we found in our validation",
      integrations: "Integrates with Odoo, Excel/Google Sheets and other accounting systems you already use.",
      stats: [
        { value: "Multi-industry", label: "technology, healthcare, manufacturing, retail and more" },
        { value: "1 to 50+", label: "employees: the size range of the companies we surveyed" },
        { value: "Weekly", label: "the most-requested update frequency" },
      ],
    },
    problem: {
      eyebrow: "What we found while validating the idea",
      h2: "Managing a company's cash by hand is exhausting",
      p: "We surveyed owners, managers, accountants and administrative leads at Uruguayan companies across different industries and sizes. Here's what came up most — and how it changes with Finora.",
      colBefore: "Today, without Finora",
      colAfter: "With Finora",
      rows: [
        {
          before: "You don't know how much cash you'll have next week",
          after: "Week-by-week cash-flow projection",
        },
        {
          before: "You find out about a cash shortfall when it's already too late",
          after: "Early alerts for potential shortfalls",
        },
        {
          before: "Info is scattered across Odoo, spreadsheets and emails",
          after: "Everything integrated with the system you already use",
        },
        {
          before: "One person has to interpret everything, with no time or backup",
          after: "Explainable recommendations your accountant can review",
        },
        {
          before: "Applying for financing means gathering paperwork blind",
          after: "Clear, organized information, ready to present",
        },
      ],
      quote: "“It's not always clear what documentation is required or how much you should ask for”",
      quoteAttribution:
        "One of the most repeated takeaways from people who've tried to access bank financing in the last two years.",
    },
    solution: {
      eyebrow: "The solution",
      h2: "An AI CFO, always available to your team",
      p: "Finora takes the financial information you already generate and turns it into clear projections, alerts and recommendations. We prioritized the features the companies we surveyed asked for most.",
      heroCard: {
        badge: "Most requested",
        title: "Cash-flow projection",
        desc: "See how much cash you'll have over the coming weeks and months, before the problem shows up.",
      },
      topFeatures: [
        {
          label: "Alerts",
          title: "Early alerts",
          desc: "Automatic warnings about potential cash shortfalls, so you can act in time instead of too late.",
        },
        {
          label: "Profitability",
          title: "Profitability analysis",
          desc: "Understand which products, clients or business lines actually leave you a margin.",
        },
        {
          label: "Action",
          title: "Recommendations and action plan",
          desc: "Every analysis comes with concrete next steps, explained in plain language.",
        },
        {
          label: "Scenarios",
          title: "Scenario simulation",
          desc: "Test different decisions — an investment, a new client, a cost increase — before making them.",
        },
      ],
      bottomFeatures: [
        {
          label: "History",
          title: "Comparison with prior periods",
          desc: "Month-over-month and year-over-year tracking to catch trends early.",
        },
        {
          label: "Payables and receivables",
          title: "Control over your billing and payment cycle",
          desc: "Clear visibility into what you're owed, what you owe, and when.",
        },
        {
          label: "Integration",
          title: "Integration with your accounting system",
          desc: "Connects with Odoo, Excel/Google Sheets and other systems you already use, with no duplicate work.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      h2: "From your data to a decision, in three steps",
      steps: [
        {
          title: "Connect your data",
          desc: "Link your accounting system (Odoo, Excel/Google Sheets or another) or enter the information manually. You choose what to share.",
        },
        {
          title: "The AI analyzes and projects",
          desc: "Finora processes your information and identifies trends, risks and opportunities, at the update frequency you need.",
        },
        {
          title: "You get clear recommendations",
          desc: "Every conclusion shows the data behind it and can be reviewed by your accountant or advisor before you decide.",
        },
      ],
    },
    trust: {
      eyebrow: "Trust, not a black box",
      h2: "What would worry you most is the first thing we solved",
      p: "We asked owners, managers and accountants directly what would worry them about using a tool like this. These were their main concerns — and how we addressed them.",
      concerns: [
        {
          concern: "Security and confidentiality of the information",
          answer:
            "This was the most repeated concern in our validation. Your financial data is sensitive, and we treat it that way: encryption, access controls, and you decide what gets connected.",
          italic: false,
        },
        {
          concern: "Accuracy of the results",
          answer:
            "Every conclusion shows the data behind it and the calculation can be reviewed and audited — it's not a black box.",
          italic: false,
        },
        {
          concern: "“That it would replace my accountant's judgment”",
          answer:
            "One of the companies we surveyed said this explicitly, and we agree: Finora positions itself as a complement, not a replacement. Your accountant or advisor can validate every report.",
          italic: true,
        },
        {
          concern: "Time needed to load the information",
          answer:
            "We integrate with what you already use (Odoo, spreadsheets, your accounting system) to minimize manual entry from day one.",
          italic: false,
        },
      ],
    },
    validation: {
      eyebrow: "Idea validation",
      h2: "We didn't make up the problem — the market told us",
      p: "Before building anything, we surveyed owners, partners, managers, accountants and administrative leads at Uruguayan companies across a mix of industries, spreading the survey through email, WhatsApp and LinkedIn.",
      sectors: ["Technology", "Healthcare", "Retail", "Manufacturing", "Food service & hospitality", "Professional services", "Publishing"],
      systems: ["Odoo", "Excel / Google Sheets", "ZetaSoftware", "TAREUS", "Memory", "In-house internal systems"],
      card1: {
        title: "Who took part",
        desc: "From one-person ventures to companies with more than 50 employees",
      },
      card2: {
        title: "Systems they use today",
        desc: "From spreadsheets to ERPs — we integrate with whatever you already have running",
      },
      card3: {
        title: "Perceived usefulness",
        desc: "Most rated it useful or very useful",
        sub: "(4 or 5 out of 5) when asked how useful a tool like this would be for their company.",
      },
      footer:
        "We're still interviewing companies interested in going deeper on validation — if you'd like to take part, let us know through the form below.",
    },
    pricing: {
      eyebrow: "Pricing",
      h2: "A plan sized to your company",
      p: "No generic templates: every plan is built around your company, based on what the companies we've already talked to told us. Book a demo and we'll put together a proposal with pricing included.",
      mostChosen: "Most chosen in our validation",
      cta: "Ask for a quote",
      plans: [
        {
          name: "Starter",
          audience: "Startups and teams of 1 to 10 people",
          features: [
            "Cash-flow projection",
            "Early alerts",
            "Monthly executive report",
            "1 connected system",
          ],
        },
        {
          name: "Growth",
          audience: "Growing companies of 11 to 50 people",
          features: [
            "Everything in Starter",
            "Profitability analysis",
            "Scenario simulation",
            "Comparison with prior periods",
            "Integration with your accounting system",
          ],
        },
        {
          name: "Custom",
          audience: "Companies with more than 50 people or specific needs",
          features: [
            "Everything in Growth",
            "Financial risk scoring",
            "Accountant-reviewed report validation included",
            "Dedicated support",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      h2: "The questions we get asked most",
      items: [
        {
          q: "Does Finora replace my accountant?",
          a: "No. In our validation, people who already work with an accountant were clear about this: the tool should be a complement, not a replacement. Finora handles the analysis and projections; your accountant or advisor can review and validate every report before you use it to decide.",
        },
        {
          q: "How do you protect the security of my financial data?",
          a: "This was the top concern in our validation, and we take it seriously: information is transmitted and stored encrypted, with access controls, and you decide which systems to connect and what data to share.",
        },
        {
          q: "What systems does it integrate with?",
          a: "Today we focus on integrating with the systems most used by the companies we surveyed: Odoo, Excel/Google Sheets, and other accounting systems. If you use something else, tell us in the demo and we'll evaluate the integration.",
        },
        {
          q: "Can I try it before committing?",
          a: "Yes. Many of the companies we surveyed told us they'd prefer a free trial or a pilot before committing, so that's exactly what we offer when you book a demo.",
        },
        {
          q: "How do I know I can trust the recommendations?",
          a: "Every conclusion shows the data behind it, and the calculation can be reviewed and audited. It's not a black box — you can see where every number comes from.",
        },
        {
          q: "How often is the analysis updated?",
          a: "You choose: most of the companies we surveyed prefer a weekly update, though we also offer monthly or real-time frequency if you already work with a connected ERP.",
        },
      ],
    },
    demoForm: {
      eyebrow: "Let's book a demo",
      h2: "Tell us about your company and we'll show you Finora in action",
      p: "In 20 minutes we'll show you what your projected cash flow would look like, what alerts you'd have today, and how it would integrate with your current system.",
      bullets: [
        "Personalized demo with sample data from your industry",
        "No cost, no commitment",
        "You can invite your accountant or partner",
      ],
      contactPrefix: "Prefer to reach us directly?",
      contactLink: "Email us",
      fields: {
        nombre: { label: "Name", placeholder: "Your name" },
        empresa: { label: "Company", placeholder: "Your company's name" },
        email: { label: "Email", placeholder: "you@company.com" },
        telefono: { label: "Phone (optional)", placeholder: "+598 ..." },
        rol: {
          label: "Role at the company",
          placeholder: "Select an option",
          options: [
            "Owner or partner",
            "Director or general manager",
            "In-house accountant",
            "Administrative lead",
            "Other",
          ],
        },
        mensaje: {
          label: "Briefly tell us about your situation (optional)",
          placeholder: "E.g.: we manage cash in Excel and struggle to anticipate next month's payments...",
        },
      },
      submit: "Book demo",
      submitting: "Sending...",
      consent: "By submitting, you agree that we may contact you to schedule the demo. We don't share your information with third parties.",
      success: {
        title: "Done — we received your request!",
        p: "We'll reach out in the next few hours to coordinate the best time for the demo.",
        another: "Send another request",
      },
      errors: {
        generic: "We couldn't send your request. Please try again.",
        unexpected: "An unexpected error occurred.",
      },
    },
    footer: {
      tagline: "A Laboratorio de Proyectos Aplicados project — Universidad ORT Uruguay. Currently in the validation stage with Uruguayan companies.",
      contact: "Email us",
      copyright: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.es;
