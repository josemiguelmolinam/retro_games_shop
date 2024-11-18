const faq = {
  context: `
    JDM Legends es una empresa especializada en la importación de coches clásicos japoneses desde Japón.
    Nuestra misión es proporcionar vehículos auténticos y de alta calidad a los entusiastas de los coches japoneses en Europa.
    Operamos desde Tokio (Japón) y Palma de Mallorca (España).
    Ofrecemos servicios como:
    - Selección de vehículos clásicos.
    - Inspección opcional de vehículos.
    - Normalmente, todos nuestros coches con destino a España se descargan en el puerto de Barcelona, ya sea en contenedor o mediante el sistema Ro-Ro. Sin embargo, existe la posibilidad de explorar rutas alternativas para descargar en el puerto de Valencia o el puerto de Santander, dependiendo de la disponibilidad. Si deseas más información sobre estas opciones, no dudes en consultarnos. ¡Estaremos encantados de ayudarte!
    - Entrega puerta a puerta dentro de España (con un coste adicional).
    También participamos en meetings automovilísticos con un stand exclusivo de JDM Legends.
    Si necesitas un coche para circuito, ya sea para drifting o grip, podemos localizarlo según tus especificaciones.
    En JDM Legends, queremos recordarte que la homologación, el registro y los trámites legales necesarios en el país de destino son responsabilidad del cliente. Si tienes alguna duda sobre este proceso, estaremos encantados de orientarte en lo que podamos. ¡Gracias por tu comprensión!
    Nuestro CEO, Jose Miguel Molina, es un entusiasta y experto en el mundo de los coches japoneses, cuya pasión por estos vehículos únicos lo ha acompañado desde hace muchos años. Su dedicación lo llevó a fundar y liderar JDM Legends con un enfoque en ofrecer a los entusiastas europeos acceso a auténticos clásicos japoneses. Con una mezcla de compromiso, experiencia y amor por la cultura automovilística de Japón, nuestro CEO y su equipo se aseguran de que cada vehículo importado cumpla con los estándares de calidad más altos, transmitiendo su pasión a cada cliente y colaborador de la empresa.
  `,
  questions: [
    // Información de contacto
    {
      keywords: ["ceo", "fundador", "quién dirige", "quién es el ceo"],
      responses: {
        en: "Our CEO is Jose Miguel Molina, passionate about connecting Japanese car enthusiasts with high-quality vehicles.",
        es: "Nuestro CEO es Jose Miguel Molina, apasionado por conectar a los entusiastas de los coches japoneses con vehículos de alta calidad.",
      },
    },
    {
      keywords: ["contact", "cómo contactar", "soporte", "email", "correo", "correo electrónico"],
      responses: {
        en: "You can contact us via email at: jdmlegendsimports@gmail.com.",
        es: "Puedes contactarnos por correo electrónico en: jdmlegendsimports@gmail.com.",
      },
    },
    // Redes sociales
    {
      keywords: ["social media", "redes sociales", "instagram", "youtube", "twitter"],
      responses: {
        en: `
          Follow us on social media:
          - [Instagram](https://www.instagram.com/jdmlegendsimports/)
          - [YouTube](https://www.youtube.com/@JDMLegendsImports)
          - [Twitter](https://x.com/JDMLegendsCars)
        `,
        es: `
          Síguenos en redes sociales:
          - [Instagram](https://www.instagram.com/jdmlegendsimports/)
          - [YouTube](https://www.youtube.com/@JDMLegendsImports)
          - [Twitter](https://x.com/JDMLegendsCars)
        `,
      },
    },
    // Ubicación
    {
      keywords: ["where", "ubicación", "sede", "dirección", "address"],
      responses: {
        en: "JDM Legends operates from Tokyo, Japan, and Palma de Mallorca, Spain.",
        es: "JDM Legends opera desde Tokio, Japón, y Palma de Mallorca, España.",
      },
    },
    // Servicios de transporte
    {
      keywords: ["shipping", "envío", "delivery", "transporte", "puertos"],
      responses: {
        en: "Normally, all our cars destined for Spain are unloaded at the Port of Barcelona, whether in a container or via the Ro-Ro system. Alternative routes for unloading at the Port of Valencia or Santander may be explored based on availability. Contact us for more details.",
        es: "Normalmente, todos nuestros coches con destino a España se descargan en el puerto de Barcelona, ya sea en contenedor o mediante el sistema Ro-Ro. Existe la posibilidad de explorar rutas alternativas para descargar en el puerto de Valencia o el puerto de Santander, dependiendo de la disponibilidad. Contáctanos para más detalles.",
      },
    },
    {
      keywords: ["door-to-door", "entrega a domicilio", "puerta a puerta"],
      responses: {
        en: "We offer door-to-door delivery within Spain for an additional cost. Contact us for details.",
        es: "Ofrecemos entrega puerta a puerta dentro de España por un coste adicional. Contáctanos para más detalles.",
      },
    },
    // Servicios generales
    {
      keywords: ["services", "servicios", "qué ofrecen", "what do you offer"],
      responses: {
        en: `
          Our services include:
          - Vehicle sourcing.
          - Optional inspections.
          - Secure shipping to Europe.
          - Door-to-door delivery in Spain.
        `,
        es: `
          Nuestros servicios incluyen:
          - Selección de vehículos.
          - Inspecciones opcionales.
          - Envío seguro a Europa.
          - Entrega puerta a puerta en España.
        `,
      },
    },
    {
      keywords: ["special requests", "peticiones especiales", "custom orders"],
      responses: {
        en: "If you have a specific request, we will do our best to meet your needs. Contact us for details.",
        es: "Si tienes una petición específica, haremos todo lo posible por cumplir tus necesidades. Contáctanos para más información.",
      },
    },
    // Legalidad y trámites
    {
      keywords: ["registro", "registrar", "homologación", "país", "legalizar", "legalización"],
      responses: {
        en: "We do not handle homologation or registration processes. These are the customer's responsibility.",
        es: "No nos encargamos de los trámites de homologación ni de registro. Estos son responsabilidad del cliente.",
      },
    },
    // Modelos icónicos
    {
      keywords: ["models", "modelos", "coches japoneses", "Japanese cars"],
      responses: {
        en: `
          Iconic Japanese models we can source:
          - Toyota: Supra MK4, AE86, Celica GT-Four, MR2.
          - Nissan: Skyline GT-R, Silvia S15, Fairlady Z.
          - Mazda: RX-7, RX-8, MX-5 Miata.
          - Honda: NSX, Civic Type R, S2000.
          - Subaru: Impreza WRX STI, BRZ.
          - Mitsubishi: Lancer Evolution, 3000GT.
        `,
        es: `
          Modelos japoneses icónicos que podemos localizar:
          - Toyota: Supra MK4, AE86, Celica GT-Four, MR2.
          - Nissan: Skyline GT-R, Silvia S15, Fairlady Z.
          - Mazda: RX-7, RX-8, MX-5 Miata.
          - Honda: NSX, Civic Type R, S2000.
          - Subaru: Impreza WRX STI, BRZ.
          - Mitsubishi: Lancer Evolution, 3000GT.
        `,
      },
    },
    // Vehículos para circuito
    {
      keywords: ["track", "circuit", "drift", "grip", "circuito", "pista"],
      responses: {
        en: "We can source vehicles for drifting, grip, or other circuit needs. Let us know your requirements!",
        es: "Podemos localizar vehículos para drifting, grip u otras necesidades de circuito. ¡Dinos tus requisitos!",
      },
    },
    // Devoluciones
    {
      keywords: ["returns", "devoluciones", "policy", "política"],
      responses: {
        en: "All sales are final due to the nature of the service. We do not accept returns.",
        es: "Todas las ventas son finales debido a la naturaleza del servicio. No aceptamos devoluciones.",
      },
    },
  ],
};

export default faq;
