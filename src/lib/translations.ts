export type Locale = "es" | "en";

export const translations = {
  es: {
    header: {
      nav: [
        { href: "#problema", label: "El problema" },
        { href: "#producto", label: "Producto" },
        { href: "#voz", label: "Cómo habla" },
        { href: "#como-funciona", label: "Cómo funciona" },
        { href: "#validacion", label: "Validación" },
        { href: "#precios", label: "Precios" },
        { href: "#faq", label: "FAQ" },
      ],
      cta: "Agendar demo",
      openMenu: "Abrir menú",
    },
    hero: {
      badge: "Asistente financiero con IA para pymes uruguayas",
      h1: { line1: "Tu caja,", highlight: "90 días", line2: "adelante." },
      p: "Finora se conecta a tu Odoo o a tu planilla, proyecta la caja a 30, 60 y 90 días y te avisa antes de que falte plata. Cada número muestra de dónde sale, y tu contador lo valida antes de que lo uses para decidir.",
      ctaPrimary: "Agendar una demo",
      ctaSecondary: "Ver una alerta real",
      integrations: "Se integra con Odoo, Excel/Google Sheets y otros sistemas contables que ya usás.",
      stats: [
        { value: "Multisector", label: "tecnología, salud, industria, comercio y más ya lo validaron" },
        { value: "1 a 50+", label: "empleados: el rango de tamaño de las empresas consultadas" },
        { value: "Semanal", label: "la frecuencia de actualización más pedida" },
      ],
      preview: {
        tabs: ["Caja", "Resultados", "Cobranzas", "Informe mensual"],
        ctaButton: "Enviar al contador",
        alertLabel: "Alerta de caja · Proyección a 90 días",
        alertPrefix: "Si no cobrás la factura 1043, el",
        alertDate: "10 de noviembre",
        alertMiddle: "la caja queda en",
        alertAmount: "$U −182.000",
        alertEnd: ".",
        kpis: [
          { value: "$U 470.000", label: "Saldo hoy" },
          { value: "38 días", label: "Promedio de cobro" },
          { value: "31,4 %", label: "Margen bruto del mes" },
          { value: "3", label: "Vencimientos DGI/BPS en 30 días" },
        ],
        chartLabel: "Saldo de caja · miles de $U",
        legend: { real: "Real", projected: "Proyectado", confidence: "Rango de confianza" },
        xLabels: ["25/8", "Hoy", "20/10", "10/11", "24/11", "22/12"],
        chartMarker: "−182",
        tags: [
          "Datos: Odoo · 1.284 movimientos",
          "Supuesto: cobros a 38 días",
          "Confianza: media",
        ],
        pendingBadge: "Pendiente de validación · Contador",
        caption: "Así se ve en tu panel. Cifras de ejemplo.",
      },
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
          after: "Proyección de caja a 30, 60 y 90 días, actualizada sola",
        },
        {
          before: "Te enterás de un faltante de dinero cuando ya es tarde",
          after: "Alerta con la fecha exacta y el monto, semanas antes",
        },
        {
          before: "La info está repartida entre Odoo, planillas y mails",
          after: "Todo conectado con el sistema que ya usás, sin duplicar carga",
        },
        {
          before: "Una sola persona interpreta todo, sin tiempo ni respaldo",
          after: "Recomendaciones en criollo, con un botón para tu contador",
        },
        {
          before: "Pedir financiamiento implica juntar documentación a ciegas",
          after: "Informe mensual claro y ordenado, listo para presentar",
        },
      ],
      quote:
        "“No siempre se tiene claro qué documentación se requiere o cuánto conviene solicitar”",
      quoteAttribution:
        "Una de las conclusiones más repetidas por quienes ya intentaron acceder a financiamiento bancario en los últimos dos años.",
    },
    voice: {
      eyebrow: "Cómo habla Finora",
      h2: "Nada de “score de confianza del modelo”. Fecha y monto, como los pensás vos.",
      p: "La encuesta a pymes fue clara sobre qué frena la adopción de este tipo de herramientas: miedo por la seguridad, dudas sobre la exactitud y no entender cómo el sistema llega a sus conclusiones. Por eso Finora habla en criollo, siempre con fecha y monto, y siempre muestra de dónde sale cada número.",
      momentPre: "Vendiste lo mismo que el mes pasado, pero cobraste",
      momentItalic: "doce días más tarde",
      momentPost: ".",
      momentCaption: "Así arranca el informe mensual que Finora te arma solo — y que tu contador aprueba antes de que lo veas.",
      colWeSay: "Decimos",
      colNoSay: "No decimos",
      pairs: [
        {
          weSay: "Si no cobrás la factura 1043, el 10 de noviembre te quedás sin caja.",
          noSay: "Riesgo de liquidez negativa detectado en el período t+49.",
        },
        {
          weSay: "Este mes gastaste 30 % más en insumos que el promedio.",
          noSay: "Variación intermensual rubro 5.1.02: +30,2 %.",
        },
        {
          weSay: "Confianza media: faltan los movimientos bancarios de agosto.",
          noSay: "Score de confianza del modelo: 0,64.",
        },
        {
          weSay: "Pendiente de revisión de tu contador.",
          noSay: "Informe generado automáticamente por IA.",
        },
      ],
      footer:
        "Y cuando decimos que un informe está validado es porque lo aprobó una persona. Finora nunca lo dice si no lo hizo tu contador.",
    },
    solution: {
      eyebrow: "La solución",
      h2: "Un asistente financiero con IA, siempre disponible para tu equipo",
      p: "Finora toma la información que ya generás en Odoo o en tu planilla y la convierte en proyecciones, alertas y recomendaciones claras. Priorizamos las funciones que las empresas consultadas pidieron con más frecuencia.",
      heroCard: {
        badge: "La más pedida",
        title: "Proyección de caja a 30, 60 y 90 días",
        desc: "Mirá cuánta caja vas a tener antes de que falte, con el mismo horizonte que usa tu contador para planificar.",
      },
      topFeatures: [
        {
          label: "Alertas",
          title: "Alertas con fecha y monto",
          desc: "Nada de “riesgo detectado en el período t+49”: te decimos qué factura, qué día y cuánta plata, para actuar a tiempo.",
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
          label: "Contador",
          title: "Informe mensual con un botón para tu contador",
          desc: "Enviás el informe a validar con un clic. Nada se marca como aprobado si tu contador no lo aprobó.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      h2: "De tus datos a una decisión validada, en cuatro pasos",
      steps: [
        {
          title: "Conectá Odoo o tu planilla",
          desc: "Vinculá tu sistema contable (Odoo, Excel/Google Sheets u otro) o cargá la información manualmente. Vos elegís qué compartir.",
        },
        {
          title: "Finora proyecta tu caja",
          desc: "Procesa tu información y arma la proyección a 30, 60 y 90 días, con la frecuencia de actualización que necesites.",
        },
        {
          title: "Tu contador valida el informe",
          desc: "Cada conclusión muestra los datos y el supuesto que la respaldan. Tu contador la revisa con un clic antes de que llegue a vos.",
        },
        {
          title: "Decidís con fecha y monto",
          desc: "Nada de intuición: sabés exactamente qué factura, qué día y cuánta plata está en juego.",
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
            "Cada conclusión muestra los datos que la respaldan, el supuesto que usó y su nivel de confianza. El cálculo puede revisarse y auditarse: no es una caja negra.",
          italic: false,
        },
        {
          concern: "“Que reemplace el criterio de mi contador”",
          answer:
            "Una de las empresas consultadas lo dijo explícitamente, y coincidimos: Finora propone, tu contador valida. Nunca marcamos un informe como aprobado si no lo aprobó una persona.",
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
            "Proyección de caja a 30 y 60 días",
            "Alertas con fecha y monto",
            "Informe ejecutivo mensual",
            "1 sistema conectado",
          ],
        },
        {
          name: "Growth",
          audience: "Empresas en crecimiento de 11 a 50 personas",
          features: [
            "Todo lo de Starter",
            "Proyección a 90 días con rango de confianza",
            "Análisis de rentabilidad",
            "Simulación de escenarios",
            "Envío del informe a tu contador",
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
          a: "No. En nuestra validación, quienes ya trabajan con un contador fueron claros: la herramienta debe ser un complemento, no un reemplazo. Finora propone el análisis y la proyección; tu contador valida cada informe con un clic antes de que lo uses para decidir.",
        },
        {
          q: "¿Cómo protegen la seguridad de mis datos financieros?",
          a: "Fue la principal preocupación en la validación que hicimos, y la tomamos en serio: la información se transmite y almacena cifrada, con control de accesos, y vos decidís qué sistemas conectar y qué datos compartir.",
        },
        {
          q: "¿Qué es el “nivel de confianza” que muestra cada informe?",
          a: "Cada proyección se arma sobre un supuesto explícito (por ejemplo, “cobros a 38 días”) y muestra qué tan completa está la información detrás: si faltan movimientos bancarios o datos recientes, la confianza baja y te lo decimos, en vez de mostrar un número como si fuera certeza.",
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
          q: "¿Con qué frecuencia se actualiza el análisis?",
          a: "Vos elegís: la mayoría de las empresas que consultamos prefiere una actualización semanal, aunque también ofrecemos frecuencia mensual o en tiempo real si ya trabajás con un ERP conectado.",
        },
      ],
    },
    demoForm: {
      eyebrow: "Agendemos una demo",
      h2: "Contanos de tu empresa y te mostramos Finora en acción",
      p: "En 20 minutos te mostramos cómo se vería tu caja proyectada a 90 días, qué alertas tendrías hoy —con fecha y monto— y cómo se integraría con tu sistema actual.",
      bullets: [
        "Demo con la proyección armada sobre datos de ejemplo de tu sector",
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
        { href: "#voz", label: "How it talks" },
        { href: "#como-funciona", label: "How it works" },
        { href: "#validacion", label: "Validation" },
        { href: "#precios", label: "Pricing" },
        { href: "#faq", label: "FAQ" },
      ],
      cta: "Book a demo",
      openMenu: "Open menu",
    },
    hero: {
      badge: "AI-powered financial assistant for Uruguayan SMEs",
      h1: { line1: "Your cash,", highlight: "90 days", line2: "ahead." },
      p: "Finora connects to your Odoo or your spreadsheet, projects your cash flow 30, 60 and 90 days out, and warns you before you run out of money. Every number shows where it comes from, and your accountant validates it before you use it to decide.",
      ctaPrimary: "Book a demo",
      ctaSecondary: "See a real alert",
      integrations: "Integrates with Odoo, Excel/Google Sheets and other accounting systems you already use.",
      stats: [
        { value: "Multi-industry", label: "technology, healthcare, manufacturing, retail and more already validated it" },
        { value: "1 to 50+", label: "employees: the size range of the companies we surveyed" },
        { value: "Weekly", label: "the most-requested update frequency" },
      ],
      preview: {
        tabs: ["Cash", "P&L", "Collections", "Monthly report"],
        ctaButton: "Send to accountant",
        alertLabel: "Cash alert · 90-day projection",
        alertPrefix: "If invoice 1043 isn't paid by",
        alertDate: "November 10",
        alertMiddle: "your cash balance drops to",
        alertAmount: "US$ −45,500",
        alertEnd: ".",
        kpis: [
          { value: "US$ 117,500", label: "Cash on hand today" },
          { value: "38 days", label: "Average collection time" },
          { value: "31.4 %", label: "Gross margin this month" },
          { value: "3", label: "Tax filings due in 30 days" },
        ],
        chartLabel: "Cash balance · thousands US$",
        legend: { real: "Actual", projected: "Projected", confidence: "Confidence range" },
        xLabels: ["8/25", "Today", "10/20", "11/10", "11/24", "12/22"],
        chartMarker: "−46",
        tags: [
          "Data: Odoo · 1,284 transactions",
          "Assumption: 38-day collections",
          "Confidence: medium",
        ],
        pendingBadge: "Pending validation · Accountant",
        caption: "This is what your dashboard looks like. Sample figures.",
      },
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
          after: "30/60/90-day cash projection, updated on its own",
        },
        {
          before: "You find out about a cash shortfall when it's already too late",
          after: "An alert with the exact date and amount, weeks ahead",
        },
        {
          before: "Info is scattered across Odoo, spreadsheets and emails",
          after: "Everything connected to the system you already use, no duplicate entry",
        },
        {
          before: "One person has to interpret everything, with no time or backup",
          after: "Plain-language recommendations, one click away from your accountant",
        },
        {
          before: "Applying for financing means gathering paperwork blind",
          after: "A clear, organized monthly report, ready to present",
        },
      ],
      quote: "“It's not always clear what documentation is required or how much you should ask for”",
      quoteAttribution:
        "One of the most repeated takeaways from people who've tried to access bank financing in the last two years.",
    },
    voice: {
      eyebrow: "How Finora talks",
      h2: "No “model confidence score.” Just a date and an amount, the way you think about them.",
      p: "Our SME survey was clear about what holds this kind of tool back: fear about security, doubts about accuracy, and not understanding how the system reaches its conclusions. So Finora speaks plainly, always with a date and an amount, and always shows where every number comes from.",
      momentPre: "You sold the same as last month, but got paid",
      momentItalic: "twelve days later",
      momentPost: ".",
      momentCaption: "That's how the monthly report Finora builds on its own opens — and your accountant approves it before you ever see it.",
      colWeSay: "We say",
      colNoSay: "We don't say",
      pairs: [
        {
          weSay: "If invoice 1043 isn't paid, you run out of cash on November 10.",
          noSay: "Negative liquidity risk detected in period t+49.",
        },
        {
          weSay: "This month you spent 30% more on supplies than average.",
          noSay: "Month-over-month variance, line item 5.1.02: +30.2%.",
        },
        {
          weSay: "Medium confidence: August's bank transactions are missing.",
          noSay: "Model confidence score: 0.64.",
        },
        {
          weSay: "Pending your accountant's review.",
          noSay: "Report auto-generated by AI.",
        },
      ],
      footer:
        "And when we say a report is validated, it's because a person approved it. Finora never says so unless your accountant did.",
    },
    solution: {
      eyebrow: "The solution",
      h2: "An AI-powered financial assistant, always available to your team",
      p: "Finora takes the information you already generate in Odoo or your spreadsheet and turns it into clear projections, alerts and recommendations. We prioritized the features the companies we surveyed asked for most.",
      heroCard: {
        badge: "Most requested",
        title: "30/60/90-day cash projection",
        desc: "See how much cash you'll have before it runs short, on the same horizon your accountant uses to plan.",
      },
      topFeatures: [
        {
          label: "Alerts",
          title: "Alerts with a date and an amount",
          desc: "No “risk detected in period t+49”: we tell you which invoice, which day, and how much money is on the line, so you can act in time.",
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
          label: "Accountant",
          title: "Monthly report, one click from your accountant",
          desc: "Send the report for validation with one click. Nothing is marked approved unless your accountant approved it.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      h2: "From your data to a validated decision, in four steps",
      steps: [
        {
          title: "Connect Odoo or your spreadsheet",
          desc: "Link your accounting system (Odoo, Excel/Google Sheets or another) or enter the information manually. You choose what to share.",
        },
        {
          title: "Finora projects your cash",
          desc: "It processes your information and builds the 30/60/90-day projection, at the update frequency you need.",
        },
        {
          title: "Your accountant validates the report",
          desc: "Every conclusion shows the data and the assumption behind it. Your accountant reviews it with one click before it reaches you.",
        },
        {
          title: "You decide with a date and an amount",
          desc: "No guesswork: you know exactly which invoice, which day, and how much money is at stake.",
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
            "Every conclusion shows the data behind it, the assumption it used and its confidence level. The calculation can be reviewed and audited — it's not a black box.",
          italic: false,
        },
        {
          concern: "“That it would replace my accountant's judgment”",
          answer:
            "One of the companies we surveyed said this explicitly, and we agree: Finora proposes, your accountant validates. We never mark a report as approved unless a person approved it.",
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
            "30 and 60-day cash projection",
            "Alerts with a date and an amount",
            "Monthly executive report",
            "1 connected system",
          ],
        },
        {
          name: "Growth",
          audience: "Growing companies of 11 to 50 people",
          features: [
            "Everything in Starter",
            "90-day projection with confidence range",
            "Profitability analysis",
            "Scenario simulation",
            "Report sent to your accountant",
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
          a: "No. In our validation, people who already work with an accountant were clear about this: the tool should be a complement, not a replacement. Finora proposes the analysis and projections; your accountant validates every report with one click before you use it to decide.",
        },
        {
          q: "How do you protect the security of my financial data?",
          a: "This was the top concern in our validation, and we take it seriously: information is transmitted and stored encrypted, with access controls, and you decide which systems to connect and what data to share.",
        },
        {
          q: "What does the “confidence level” on each report mean?",
          a: "Every projection is built on an explicit assumption (for example, “collections in 38 days”) and shows how complete the data behind it is: if recent bank transactions are missing, confidence drops and we tell you, instead of showing a number as if it were certainty.",
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
          q: "How often is the analysis updated?",
          a: "You choose: most of the companies we surveyed prefer a weekly update, though we also offer monthly or real-time frequency if you already work with a connected ERP.",
        },
      ],
    },
    demoForm: {
      eyebrow: "Let's book a demo",
      h2: "Tell us about your company and we'll show you Finora in action",
      p: "In 20 minutes we'll show you what your 90-day cash projection would look like, what alerts you'd have today — with a date and an amount — and how it would integrate with your current system.",
      bullets: [
        "A demo with the projection built on sample data from your industry",
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
