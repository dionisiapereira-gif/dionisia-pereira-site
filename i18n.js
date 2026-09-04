/* Translations dictionary and language switcher for Dionísia Pereira's site */
(function () {
  var translations = {
    "skip": { pt: "Saltar para o conteúdo principal", en: "Skip to main content" },
    "brand.tag": { pt: "Comunicação · Marketing · Coaching", en: "Communication · Marketing · Coaching" },

    "nav.ariaLabel": { pt: "Navegação principal", en: "Main navigation" },
    "nav.sobre": { pt: "Sobre", en: "About" },
    "nav.servicos": { pt: "Serviços", en: "Services" },
    "nav.percurso": { pt: "Percurso", en: "Journey" },
    "nav.portfolio": { pt: "Portfólio", en: "Portfolio" },
    "nav.skills": { pt: "Skills", en: "Skills" },
    "nav.contacto": { pt: "Contacto", en: "Contact" },
    "nav.cta": { pt: "Vamos conversar", en: "Let's talk" },

    "menu.toggleLabel": { pt: "Abrir menu", en: "Open menu" },

    "theme.toggleToDark": { pt: "Alternar para modo escuro", en: "Switch to dark mode" },
    "theme.toggleToLight": { pt: "Alternar para modo claro", en: "Switch to light mode" },

    "hero.eyebrow": { pt: "Comunicação · Marketing · Coaching", en: "Communication · Marketing · Coaching" },
    "hero.title": {
      pt: "Duas décadas a transformar <em>ideias</em> em comunicação de marcas e pessoas.",
      en: "Two decades turning <em>ideas</em> into communication for brands and people."
    },
    "hero.sub": {
      pt: "Sou a Dionísia Pereira, comunicadora, consultora de marketing e coach. Ajudo marcas e pessoas a comunicar com mais clareza, mais alma e mais resultados. Atualmente disponível para colaborações remotas, em regime part-time e horário flexível.",
      en: "I'm Dionísia Pereira, a communicator, marketing consultant and coach. I help brands and people communicate with more clarity, more soul and more results. Currently available for remote collaborations, part-time and with flexible hours."
    },
    "hero.link": { pt: "Ver o meu percurso →", en: "See my journey →" },
    "hero.badge.remote": { pt: "100% remoto", en: "100% remote" },
    "hero.badge.parttime": { pt: "Regime part-time", en: "Part-time schedule" },
    "hero.badge.flexible": { pt: "Horário flexível", en: "Flexible hours" },
    "hero.portraitAlt": { pt: "Retrato de Dionísia Pereira", en: "Portrait of Dionísia Pereira" },
    "hero.portraitTag": {
      pt: "<strong>+20 anos</strong>\n      de experiência em Comunicação &amp; Marketing",
      en: "<strong>+20 years</strong>\n      of experience in Communication &amp; Marketing"
    },

    "about.eyebrow": { pt: "Sobre mim", en: "About me" },
    "about.title": {
      pt: "Uma comunicadora nata, apaixonada por palavras, ideias e pessoas",
      en: "A born communicator, passionate about words, ideas and people"
    },
    "about.visualAlt": {
      pt: "Bloco de notas, caneta de tinta permanente e flores secas sobre uma mesa, em tons quentes",
      en: "Notebook, fountain pen and dried flowers on a table, in warm tones"
    },
    "about.stat1": { pt: "anos em Comunicação &amp; Marketing", en: "years in Communication &amp; Marketing" },
    "about.stat2": { pt: "colaborações simultâneas geridas com sucesso", en: "simultaneous collaborations managed successfully" },
    "about.stat3": { pt: "idiomas de trabalho", en: "working languages" },
    "about.p1": {
      pt: "Comunicadora nata e apaixonada por palavras, ideias e pessoas. Assim me defino depois de duas décadas dedicadas à Comunicação e ao Marketing.",
      en: "A born communicator, passionate about words, ideas and people. That's how I'd describe myself after two decades dedicated to Communication and Marketing."
    },
    "about.p2": {
      pt: "Ao longo do meu percurso destaquei-me pela liderança de equipas, pela criatividade estratégica e pela empatia no relacionamento interpessoal, seja a dirigir a comunicação de uma marca, a organizar um evento internacional ou a escrever o texto certo para o momento certo.",
      en: "Throughout my career I've stood out for team leadership, strategic creativity and empathy in interpersonal relationships, whether directing a brand's communication, organising an international event, or writing the right words for the right moment."
    },
    "about.p3": {
      pt: "Nos últimos anos abracei o coaching e a formação como extensão natural da minha vocação: ajudar os outros a crescer, a alinhar-se com o seu propósito e a viver com mais bem-estar. Sou uma profissional versátil, positiva e resiliente, com forte capacidade de adaptação e uma visão holística de cada projeto.",
      en: "In recent years I've embraced coaching and training as a natural extension of my calling: helping others grow, align with their purpose and live with more wellbeing. I'm a versatile, positive and resilient professional, with a strong capacity to adapt and a holistic view of every project."
    },
    "about.p4": {
      pt: "Hoje, concilio várias colaborações remotas e part-time em simultâneo, a prova viva de que consigo entregar valor real com autonomia, flexibilidade e organização, esteja eu onde estiver.",
      en: "Today, I juggle several remote, part-time collaborations at once, living proof that I can deliver real value with autonomy, flexibility and organisation, wherever I am."
    },
    "about.tag1": { pt: "Liderança de equipas", en: "Team leadership" },
    "about.tag2": { pt: "Criatividade estratégica", en: "Strategic creativity" },
    "about.tag3": { pt: "Empatia", en: "Empathy" },
    "about.tag4": { pt: "Visão holística", en: "Holistic vision" },
    "about.tag5": { pt: "Resiliência", en: "Resilience" },
    "about.tag6": { pt: "Capacidade de adaptação", en: "Adaptability" },

    "services.eyebrow": { pt: "O que posso fazer por si", en: "What I can do for you" },
    "services.title": {
      pt: "Serviços pensados para colaborações remotas e flexíveis",
      en: "Services designed for remote and flexible collaborations"
    },
    "services.lede": {
      pt: "Do primeiro rascunho à última métrica, apoio marcas, negócios e pessoas com o mesmo cuidado, esteja eu na sua equipa a tempo parcial ou como consultora externa.",
      en: "From the first draft to the last metric, I support brands, businesses and people with the same care, whether I'm part of your team part-time or working as an external consultant."
    },
    "services.card1.title": { pt: "Marketing Digital &amp; Social Media", en: "Digital Marketing &amp; Social Media" },
    "services.card1.desc": {
      pt: "Gestão de redes sociais, Paid Media, produção de conteúdo e análise de resultados: tudo o que uma marca precisa para crescer online.",
      en: "Social media management, Paid Media, content production and results analysis: everything a brand needs to grow online."
    },
    "services.card2.title": { pt: "Copywriting, Branding &amp; Storytelling", en: "Copywriting, Branding &amp; Storytelling" },
    "services.card2.desc": {
      pt: "Textos que vendem e marcas com voz própria: copywriting, guiões, branding e storytelling para todos os pontos de contacto.",
      en: "Copy that sells and brands with a voice of their own: copywriting, scripts, branding and storytelling for every touchpoint."
    },
    "services.card3.title": { pt: "Coaching de Bem-Estar &amp; Negócios", en: "Wellbeing &amp; Business Coaching" },
    "services.card3.desc": {
      pt: "Sessões 1:1 ou em grupo, mentoria entre pares e facilitação de workshops, para equipas e pessoas que querem crescer com propósito.",
      en: "1:1 or group sessions, peer mentoring and workshop facilitation, for teams and people who want to grow with purpose."
    },
    "services.card4.title": { pt: "Formação &amp; Facilitação", en: "Training &amp; Facilitation" },
    "services.card4.desc": {
      pt: "Formadora certificada, com experiência em marketing digital, comunicação empresarial e desenvolvimento pessoal.",
      en: "Certified trainer, with experience in digital marketing, business communication and personal development."
    },
    "services.card5.title": { pt: "Consultoria de Comunicação &amp; RP", en: "Communication &amp; PR Consulting" },
    "services.card5.desc": {
      pt: "Planos de comunicação, relações públicas e organização de eventos, com feiras e congressos internacionais já no currículo.",
      en: "Communication plans, public relations and event organisation, with international trade fairs and conferences already on the résumé."
    },
    "services.card6.title": { pt: "Acolhimento &amp; Experiência do Cliente", en: "Hospitality &amp; Customer Experience" },
    "services.card6.desc": {
      pt: "Gestão de hospitalidade e experiências memoráveis, com foco na satisfação e na fidelização.",
      en: "Hospitality management and memorable experiences, focused on satisfaction and loyalty."
    },

    "divider.quote": {
      pt: "“Ajudar os outros a crescer, a alinhar-se com o seu propósito e a viver com mais bem-estar, essa é a missão que carrego em cada projeto.”",
      en: "“Helping others grow, align with their purpose and live with more wellbeing — that's the mission I carry into every project.”"
    },

    "journey.eyebrow": { pt: "Percurso profissional", en: "Professional journey" },
    "journey.title": {
      pt: "De duas décadas de direção de marketing a uma agenda part-time por escolha",
      en: "From two decades of marketing leadership to a part-time schedule by choice"
    },
    "journey.lede": {
      pt: "Hoje concilio, com sucesso, várias colaborações remotas em simultâneo, a experiência mais concreta de que a flexibilidade não custa qualidade.",
      en: "Today I successfully juggle several remote collaborations at once — the clearest proof that flexibility doesn't cost quality."
    },
    "journey.item1.period": { pt: "Setembro 2026 a atual", en: "September 2026 to present" },
    "journey.item1.desc": {
      pt: "Coordenação de projetos de mobilidade Erasmus+, da candidatura ao acompanhamento dos participantes; gestão de parcerias internacionais, orçamentos e conformidade com os requisitos do programa.",
      en: "Coordination of Erasmus+ mobility projects, from application to participant support; management of international partnerships, budgets and compliance with programme requirements."
    },
    "journey.item2.period": { pt: "Novembro 2024 a Setembro 2026", en: "November 2024 to September 2026" },
    "journey.item2.desc": {
      pt: "Gestão de hospitalidade dinâmica focada em elevar a satisfação dos hóspedes; operações eficientes e cultura de serviço personalizada; liderança de equipas de alto desempenho.",
      en: "Dynamic hospitality management focused on boosting guest satisfaction; efficient operations and a personalised service culture; leadership of high-performing teams."
    },
    "journey.item3.period": { pt: "Dezembro 2024 a Agosto 2026", en: "December 2024 to August 2026" },
    "journey.item3.role": { pt: "Consultora de Comunicação e Marketing", en: "Communication and Marketing Consultant" },
    "journey.item3.desc": {
      pt: "Produção de conteúdos e gestão de social media e Paid Media; desenvolvimento de estratégias de comunicação e marketing digital, numa colaboração que terminou com a venda da empresa.",
      en: "Content production and management of social media and Paid Media; development of communication and digital marketing strategies, in a collaboration that ended with the company's sale."
    },
    "journey.item4.period": { pt: "2022 a atual", en: "2022 to present" },
    "journey.item4.role": { pt: "Community &amp; Social Media Manager, Relações Públicas", en: "Community &amp; Social Media Manager, Public Relations" },
    "journey.item4.desc": {
      pt: "Gestão de comunidade online, análise de marketing digital, coaching entre pares, mentoria em bem-estar e facilitação de grupos de estudo.",
      en: "Online community management, digital marketing analysis, peer coaching, wellbeing mentoring and study group facilitation."
    },
    "journey.item5.period": { pt: "Dezembro 2023 a 2024", en: "December 2023 to 2024" },
    "journey.item5.role": { pt: "Consultora de Comunicação e Marketing", en: "Communication and Marketing Consultant" },
    "journey.item5.desc": {
      pt: "Desenvolvimento de estratégias de comunicação e marketing, gestão de redes sociais, relações públicas, copywriting e storytelling de marca.",
      en: "Development of communication and marketing strategies, social media management, public relations, copywriting and brand storytelling."
    },
    "journey.item6.period": { pt: "Outubro 2008 a Dezembro 2023", en: "October 2008 to December 2023" },
    "journey.item6.role": { pt: "Diretora de Comunicação e Marketing", en: "Communication and Marketing Director" },
    "journey.item6.desc": {
      pt: "Direção estratégica e criativa da marca; organização de eventos internacionais, feiras e congressos; coordenação de lojas e vitrinismo; copywriting.",
      en: "Strategic and creative brand direction; organisation of international events, trade fairs and conferences; store and window-display coordination; copywriting."
    },
    "journey.item7.period": { pt: "Janeiro 2001 a Setembro 2008", en: "January 2001 to September 2008" },
    "journey.item7.role": { pt: "Diretora de Marketing", en: "Marketing Director" },
    "journey.item7.desc": {
      pt: "Direção de marketing e comunicação estratégica; execução do plano de comunicação e marketing; organização de eventos.",
      en: "Strategic marketing and communication direction; execution of the communication and marketing plan; event organisation."
    },

    "portfolio.eyebrow": { pt: "Marcas com quem trabalhei", en: "Brands I've worked with" },
    "portfolio.title": { pt: "Portfólio", en: "Portfolio" },
    "portfolio.lede": {
      pt: "Marcas e comunidades onde geri comunicação e marketing de ponta a ponta: da loja à feira internacional, e da estratégia à gestão diária de uma comunidade online.",
      en: "Brands and communities where I managed communication and marketing end-to-end: from the shop floor to international trade fairs, and from strategy to the daily management of an online community."
    },
    "portfolio.card1.imgAlt": {
      pt: "Ateliê de produção artesanal de calçado, representativo do setor calçado ortopédico",
      en: "Artisanal footwear production workshop, representative of the orthopaedic footwear sector"
    },
    "portfolio.card1.meta": { pt: "Nimco Made4You &middot; Outubro 2008 a Dezembro 2023", en: "Nimco Made4You &middot; October 2008 to December 2023" },
    "portfolio.card1.title": { pt: "Diretora de Comunicação e Marketing", en: "Communication and Marketing Director" },
    "portfolio.card1.desc": {
      pt: "Direção estratégica e criativa da marca Nimco Made4You, fabricante portuguesa de calçado ortopédico com produção em Cesar, Oliveira de Azeméis, e distribuição internacional. Ao longo de 15 anos desenvolvi estratégias de comunicação e marketing digital, geri redes sociais, e representei a marca em relações públicas e feiras internacionais do setor, como a OST-Messe (Colónia, Alemanha) e a OTWorld, para além de copywriting, branding e storytelling de marca.",
      en: "Strategic and creative direction of the Nimco Made4You brand, a Portuguese orthopaedic footwear manufacturer based in Cesar, Oliveira de Azeméis, with international distribution. Over 15 years I developed communication and digital marketing strategies, managed social media, and represented the brand in public relations and international trade fairs in the sector, such as OST-Messe (Cologne, Germany) and OTWorld, as well as copywriting, branding and brand storytelling."
    },
    "portfolio.link.site": { pt: "Site oficial", en: "Official website" },
    "portfolio.link.catalog": { pt: "Catálogo", en: "Catalog" },
    "portfolio.card1.link.fair": { pt: "Feira OST-Messe", en: "OST-Messe Trade Fair" },

    "portfolio.card2.imgAlt": {
      pt: "Quarto minimalista com roupa de cama de linho, representativo do setor de colchões e descanso",
      en: "Minimalist bedroom with linen bedding, representative of the mattress and sleep sector"
    },
    "portfolio.card2.meta": { pt: "Colunex Portugal &middot; Janeiro 2001 a Setembro 2008", en: "Colunex Portugal &middot; January 2001 to September 2008" },
    "portfolio.card2.title": { pt: "Diretora de Marketing", en: "Marketing Director" },
    "portfolio.card2.desc": {
      pt: "Direção de marketing e comunicação estratégica na Colunex, marca portuguesa de colchões, camas e almofadas fundada em 1986 em Recarei, Paredes. Execução do plano de comunicação e marketing, organização de eventos, coordenação de lojas e vitrinismo e copywriting, num período de forte crescimento da marca em Portugal que antecedeu a sua expansão para mais de 40 mercados internacionais.",
      en: "Strategic marketing and communication direction at Colunex, a Portuguese mattress, bed and pillow brand founded in 1986 in Recarei, Paredes. Execution of the communication and marketing plan, event organisation, store and window-display coordination and copywriting, during a period of strong brand growth in Portugal that preceded its expansion into more than 40 international markets."
    },
    "portfolio.card2.link.case": { pt: "Caso de sucesso", en: "Success story" },

    "portfolio.card3.imgAlt": {
      pt: "Chamada de vídeo de apoio entre pares em ambiente acolhedor, representativa de uma comunidade online de bem-estar",
      en: "Peer support video call in a warm setting, representative of an online wellbeing community"
    },
    "portfolio.card3.meta": { pt: "Food Addiction Reset Community (ARC) &middot; 2022 a atual", en: "Food Addiction Reset Community (ARC) &middot; 2022 to present" },
    "portfolio.card3.title": { pt: "Community &amp; Social Media Manager, Relações Públicas", en: "Community &amp; Social Media Manager, Public Relations" },
    "portfolio.card3.desc": {
      pt: "Gestão de comunidade online e redes sociais da Addiction Reset Community (ARC), liderada pela Dr.&nbsp;Joan Ifland, dedicada à recuperação da adição a alimentos processados. Produção de conteúdos, gestão de Paid Media e análise de marketing digital, a par de coaching entre pares, mentoria em bem-estar e facilitação de grupos de estudo para uma comunidade internacional.",
      en: "Online community and social media management for the Addiction Reset Community (ARC), led by Dr.&nbsp;Joan Ifland, dedicated to recovery from processed food addiction. Content production, Paid Media management and digital marketing analysis, alongside peer coaching, wellbeing mentoring and study group facilitation for an international community."
    },

    "portfolio.card4.imgAlt": {
      pt: "Mesa de trabalho com computador portátil a mostrar gráficos de redes sociais, bloco de notas e caneta, ambiente de consultoria independente",
      en: "Work desk with a laptop showing social media analytics charts, a notebook and pen, representing independent consulting work"
    },
    "portfolio.card4.meta": { pt: "Consultoria Independente &middot; 2022 a atual", en: "Independent Consulting &middot; 2022 to present" },
    "portfolio.card4.title": { pt: "Consultora Independente de Marketing, Comunicação e Negócios", en: "Independent Marketing, Communication and Business Consultant" },
    "portfolio.card4.desc": {
      pt: "Em paralelo às colaborações com marcas e comunidades, atuo como consultora independente de marketing, comunicação, social media e negócios, apoiando pequenas empresas e profissionais na definição de estratégia, produção de conteúdos e gestão de redes sociais, sempre com foco na eficiência e no crescimento sustentável do negócio.",
      en: "Alongside my collaborations with brands and communities, I work as an independent marketing, communication, social media and business consultant, helping small businesses and professionals with strategy, content production and social media management, always focused on efficiency and sustainable business growth."
    },

    "imagebreak.alt": {
      pt: "Espaço de trabalho remoto acolhedor, com computador portátil, café e planta, em luz natural quente",
      en: "Cosy remote workspace with a laptop, coffee and a plant, in warm natural light"
    },
    "imagebreak.caption": {
      pt: "O meu escritório é onde estiver: só preciso de boa luz, café e Wi-Fi.",
      en: "My office is wherever I am: all I need is good light, coffee and Wi-Fi."
    },

    "skills.eyebrow": { pt: "Skills &amp; Formação", en: "Skills &amp; Education" },
    "skills.title": {
      pt: "Ferramentas, línguas e formação ao serviço de cada projeto",
      en: "Tools, languages and training at the service of every project"
    },
    "skills.mainTitle": { pt: "Competências principais", en: "Core Skills" },
    "skills.tag1": { pt: "Relações Públicas", en: "Public Relations" },
    "skills.tag2": { pt: "Acolhimento", en: "Hospitality" },
    "skills.tag3": { pt: "Consultoria em Comunicação e Marketing", en: "Communication and Marketing Consulting" },
    "skills.tag4": { pt: "Gestão de Marketing Digital", en: "Digital Marketing Management" },
    "skills.tag5": { pt: "Paid Media", en: "Paid Media" },
    "skills.tag6": { pt: "Social Media", en: "Social Media" },
    "skills.tag7": { pt: "Produção de Conteúdo", en: "Content Production" },
    "skills.tag8": { pt: "Copywriting e Storytelling", en: "Copywriting and Storytelling" },
    "skills.tag9": { pt: "Formação e Educação", en: "Training and Education" },
    "skills.tag10": { pt: "Coaching de Bem-Estar e Negócios", en: "Wellbeing and Business Coaching" },
    "skills.tag11": { pt: "Gestão de Eventos", en: "Event Management" },
    "skills.tag12": { pt: "Cultura e Línguas Estrangeiras", en: "Foreign Languages and Culture" },
    "skills.toolsTitle": { pt: "Ferramentas", en: "Tools" },
    "skills.langsTitle": { pt: "Idiomas", en: "Languages" },
    "skills.lang1.name": { pt: "Português", en: "Portuguese" },
    "skills.lang1.level": { pt: "Nativo", en: "Native" },
    "skills.lang2.name": { pt: "Inglês", en: "English" },
    "skills.lang2.level": { pt: "Fluente", en: "Fluent" },
    "skills.lang3.name": { pt: "Francês", en: "French" },
    "skills.lang3.level": { pt: "Fluente", en: "Fluent" },
    "skills.lang4.name": { pt: "Espanhol", en: "Spanish" },
    "skills.lang4.level": { pt: "Avançado", en: "Advanced" },
    "skills.lang5.name": { pt: "Holandês", en: "Dutch" },
    "skills.lang5.level": { pt: "Inicial", en: "Basic" },
    "skills.eduTitle": { pt: "Formação Académica", en: "Academic Education" },
    "skills.edu1.title": { pt: "Pós-Graduação em Comunicação Empresarial", en: "Postgraduate Diploma in Business Communication" },
    "skills.edu2.title": { pt: "Pós-Graduação em Marketing: Branding", en: "Postgraduate Diploma in Marketing: Branding" },
    "skills.edu3.title": { pt: "Licenciatura em Relações Internacionais: Culturais e Políticas", en: "Bachelor's Degree in International Relations: Cultural and Political Studies" },
    "skills.certsTitle": { pt: "Certificações", en: "Certifications" },
    "skills.cert1.title": { pt: "Certificação de Formador", en: "Trainer Certification" },
    "skills.cert4.title": { pt: "Marketing Digital Avançado", en: "Advanced Digital Marketing" },

    "why.eyebrow": { pt: "Porque trabalhar comigo", en: "Why work with me" },
    "why.title": { pt: "Uma colaboradora remota pronta desde o primeiro dia", en: "A remote collaborator ready from day one" },
    "why.visualAlt": {
      pt: "Canto de escritório em casa, com computador portátil, chá e flores secas, ambiente calmo e luminoso",
      en: "Home office corner, with a laptop, tea and dried flowers, calm and bright setting"
    },
    "why.item1.title": { pt: "20+ anos de experiência", en: "20+ years of experience" },
    "why.item1.desc": {
      pt: "Percurso sólido em marcas nacionais e internacionais, da direção de marketing ao coaching.",
      en: "A solid track record across national and international brands, from marketing leadership to coaching."
    },
    "why.item2.title": { pt: "Já faço isto em simultâneo", en: "I already do this simultaneously" },
    "why.item2.desc": {
      pt: "Concilio com sucesso várias colaborações part-time: autonomia e organização comprovadas todos os dias.",
      en: "I successfully juggle several part-time collaborations: autonomy and organisation proven every day."
    },
    "why.item3.title": { pt: "4 idiomas de trabalho", en: "4 working languages" },
    "why.item3.desc": {
      pt: "Português, inglês e francês fluentes, espanhol avançado: pronta para equipas e clientes internacionais.",
      en: "Fluent in Portuguese, English and French, advanced Spanish: ready for international teams and clients."
    },
    "why.item4.title": { pt: "Ferramentas no domínio total", en: "Full command of the tools" },
    "why.item4.desc": {
      pt: "Social Media, Paid Media, Photoshop, Illustrator, InDesign e WordPress: sem curva de aprendizagem.",
      en: "Social Media, Paid Media, Photoshop, Illustrator, InDesign and WordPress: no learning curve."
    },
    "why.item5.title": { pt: "Entregas no prazo, sempre", en: "Always on time, always delivered" },
    "why.item5.desc": {
      pt: "Comunicação clara e cumprimento de prazos, com a mesma exigência de quando lidero uma equipa inteira.",
      en: "Clear communication and deadlines met, with the same rigour as when leading a whole team."
    },
    "why.item6.title": { pt: "Visão holística", en: "Holistic vision" },
    "why.item6.desc": {
      pt: "Junto a criatividade estratégica à empatia e ao coaching: para pensar cada projeto como um todo.",
      en: "I bring together strategic creativity, empathy and coaching, to approach every project as a whole."
    },

    "contact.title": {
      pt: "Disponível para uma colaboração remota, part-time e à sua medida",
      en: "Available for a remote, part-time collaboration tailored to you"
    },
    "contact.lede": {
      pt: "Se procura alguém com experiência comprovada, criatividade e a flexibilidade de um regime part-time remoto, escreva-me. Respondo com todo o gosto.",
      en: "If you're looking for someone with proven experience, creativity and the flexibility of a remote part-time schedule, drop me a line. I'll be glad to reply."
    },
    "contact.emailBtn": { pt: "Enviar email", en: "Send email" },
    "contact.linkedinBtn": { pt: "Ver LinkedIn", en: "View LinkedIn" },
    "contact.lbl.phone": { pt: "Telefone", en: "Phone" },
    "contact.lbl.location": { pt: "Localização", en: "Location" },

    "footer.copyright": { pt: "© 2026 Dionísia Pereira · Comunicação · Marketing · Coaching", en: "© 2026 Dionísia Pereira · Communication · Marketing · Coaching" },
    "footer.backToTop": { pt: "Voltar ao topo ↑", en: "Back to top ↑" },

    "meta.title": { pt: "Dionísia Pereira · Comunicação, Marketing & Coaching", en: "Dionísia Pereira · Communication, Marketing & Coaching" },
    "meta.description": {
      pt: "Dionísia Pereira: mais de 20 anos em Comunicação, Marketing e Coaching. Disponível para colaborações remotas, em regime part-time e horário flexível.",
      en: "Dionísia Pereira: more than 20 years in Communication, Marketing and Coaching. Available for remote collaborations, part-time and with flexible hours."
    },
    "meta.ogDescription": {
      pt: "Mais de 20 anos em Comunicação, Marketing e Coaching. Disponível para colaborações remotas, part-time e flexíveis.",
      en: "More than 20 years in Communication, Marketing and Coaching. Available for remote, part-time and flexible collaborations."
    }
  };

  window.__lang = "pt";

  window.i18nThemeLabel = function (currentIsDark) {
    var lang = window.__lang || "pt";
    var key = currentIsDark ? "theme.toggleToLight" : "theme.toggleToDark";
    return translations[key][lang];
  };

  function updateLangButton(lang) {
    var btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;
    btn.textContent = lang === "pt" ? "EN" : "PT";
    btn.setAttribute("aria-label", lang === "pt" ? "View site in English" : "Ver site em português");
  }

  function updateThemeButtonLabel(lang) {
    var themeBtn = document.querySelector("[data-theme-toggle]");
    if (!themeBtn) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-label", translations[isDark ? "theme.toggleToLight" : "theme.toggleToDark"][lang]);
  }

  function applyLanguage(lang) {
    window.__lang = lang;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-PT");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[key]) el.textContent = translations[key][lang];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (translations[key]) el.innerHTML = translations[key][lang];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (translations[key]) el.setAttribute("alt", translations[key][lang]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (translations[key]) el.setAttribute("aria-label", translations[key][lang]);
    });

    var titleKey = translations["meta.title"];
    if (titleKey) document.title = titleKey[lang];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations["meta.description"]) metaDesc.setAttribute("content", translations["meta.description"][lang]);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && titleKey) ogTitle.setAttribute("content", titleKey[lang]);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && translations["meta.ogDescription"]) ogDesc.setAttribute("content", translations["meta.ogDescription"][lang]);

    updateLangButton(lang);
    updateThemeButtonLabel(lang);
  }

  var langBtn = document.querySelector("[data-lang-toggle]");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var newLang = window.__lang === "pt" ? "en" : "pt";
      applyLanguage(newLang);
      try {
        localStorage.setItem("site-lang", newLang);
      } catch (e) {}
    });
  }

  updateLangButton("pt");

  var saved = null;
  try {
    saved = localStorage.getItem("site-lang");
  } catch (e) {}
  if (saved === "en") {
    applyLanguage("en");
  }
})();
