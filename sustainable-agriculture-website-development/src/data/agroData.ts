export interface TechItem {
  id: string;
  title: string;
  category: 'agua' | 'solo' | 'emissoes' | 'energia' | 'todos';
  description: string;
  impact: string;
  iconName: string;
  imageUrl: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  stat: string;
  statLabel: string;
  iconName: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  imageUrl: string;
}

export interface SuccessCase {
  id: string;
  farmName: string;
  location: string;
  culture: string;
  results: {
    productivityIncrease: string;
    carbonReduction: string;
    waterSaved: string;
  };
  story: string;
  quote: string;
  ownerName: string;
  imageUrl: string;
}

export const impactStats = [
  {
    value: "66.3%",
    label: "do Território com Vegetação Nativa",
    description: "O Brasil preserva mais de 2/3 do seu território original, sendo a agricultura responsável pela conservação de 25% dessa área dentro de propriedades rurais.",
    icon: "ShieldCheck"
  },
  {
    value: "36 Milhões",
    label: "de Hectares com Plantio Direto",
    description: "Técnica que dispensa o revolvimento do solo, reduzindo drasticamente a erosão, mantendo a umidade e sequestrando carbono continuamente.",
    icon: "Sprout"
  },
  {
    value: "3.5x",
    label: "Crescimento de Bioinsumos",
    description: "A adoção de controle biológico e fertilizantes naturais no Brasil cresce a taxas muito superiores à média mundial, substituindo químicos.",
    icon: "TestTube2"
  },
  {
    value: "50 Milhões",
    label: "de Toneladas de CO₂ Equivalente",
    description: "Metas alcançadas pelo Plano ABC+ por meio da fixação biológica de nitrogênio e integração de sistemas sustentáveis.",
    icon: "CloudRain"
  }
];

export const pillarsData: PillarItem[] = [
  {
    id: "ilpf",
    title: "Integração Lavoura-Pecuária-Floresta (ILPF)",
    subtitle: "Sinergia perfeita que otimiza o uso da terra",
    description: "O sistema ILPF alterna ou combina atividades agrícolas, pecuárias e florestais em uma mesma área. Isso quebra o ciclo de pragas, melhora o conforto térmico do gado, gera madeira e grãos e promove um balanço de carbono altamente favorável.",
    benefits: [
      "Aumento da matéria orgânica e fertilidade natural do solo",
      "Redução da temperatura local para o bem-estar animal",
      "Diversificação de renda para o produtor durante o ano todo",
      "Sequestro de até 10 toneladas de CO₂ por hectare/ano"
    ],
    stat: "+35%",
    statLabel: "de rentabilidade média por hectare",
    iconName: "Layers"
  },
  {
    id: "bioinsumos",
    title: "Bioinsumos e Controle Biológico",
    subtitle: "A força da própria natureza a favor da produtividade",
    description: "O uso de microrganismos (fungos, bactérias e vírus benéficos) e inimigos naturais para combater pragas e doenças, além de bioestimulantes que promovem a fixação de nitrogênio e solubilização de fósforo no solo.",
    benefits: [
      "Redução drástica no uso de defensivos e fertilizantes de síntese química",
      "Preservação dos polinizadores e da fauna benéfica local",
      "Garantia de alimentos com menos resíduos e maior valor agregado",
      "Menor custo de produção a médio e longo prazo"
    ],
    stat: "60%",
    statLabel: "dos produtores brasileiros já utilizam biológicos",
    iconName: "Dna"
  },
  {
    id: "precisao",
    title: "Agricultura de Precisão e Agro 4.0",
    subtitle: "Cada gota e cada grama aplicados no lugar certo",
    description: "Utilização de imagens de satélite, drones, sensores de condutividade de solo e telemetria para mapear a variabilidade da lavoura. Os insumos são aplicados a taxas variáveis, eliminando o desperdício.",
    benefits: [
      "Economia de até 30% no uso de água via irrigação inteligente",
      "Otimização da aplicação de nitrogênio, evitando a lixiviação nos rios",
      "Redução no consumo de óleo diesel com rotas otimizadas por GPS",
      "Previsibilidade e monitoramento de safras em tempo real"
    ],
    stat: "-25%",
    statLabel: "de redução no uso de insumos por hectare",
    iconName: "Cpu"
  },
  {
    id: "regenerativa",
    title: "Recuperação de Pastagens e Carbono Neutro",
    subtitle: "Transformando passivos ambientais em sumidouros de carbono",
    description: "A degradação de pastagens é um dos maiores desafios do país. Com técnicas de manejo rotacionado, adubação verde e correção de solo, pastos degradados voltam a ter alta lotação e capturam carbono no solo em profundidade.",
    benefits: [
      "Evita a abertura de novas áreas e o desmatamento",
      "Produção da aclamada 'Carne Carbono Neutro' (CCN)",
      "Recuperação das nascentes e do lençol freático",
      "Acesso a linhas de financiamento verdes (Green Bonds)"
    ],
    stat: "15 Milhões",
    statLabel: "de hectares degradados como meta de recuperação",
    iconName: "Recycle"
  }
];

export const technologiesData: TechItem[] = [
  {
    id: "drone-pulverizacao",
    title: "Drones de Aplicação Localizada",
    category: "emissoes",
    description: "Aeronaves remotamente pilotadas com inteligência artificial que identificam reboleiras de plantas daninhas e aplicam defensivos apenas onde é estritamente necessário.",
    impact: "Redução de até 80% no volume de calda química aplicada.",
    iconName: "Navigation",
    imageUrl: "https://images.pexels.com/photos/34182315/pexels-photo-34182315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "irrigacao-iot",
    title: "Irrigação de Precisão baseada em IoT",
    category: "agua",
    description: "Sensores de umidade do solo conectados à nuvem que acionam pivôs centrais apenas nos momentos de real déficit hídrico da planta, considerando a previsão do tempo.",
    impact: "Economia de 30% a 40% no consumo de água e energia elétrica.",
    iconName: "Droplets",
    imageUrl: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "energia-solar-pivo",
    title: "Usinas Solares para Irrigação",
    category: "energia",
    description: "Instalação de painéis fotovoltaicos integrados às estruturas rurais e flutuantes em açudes para alimentar os sistemas de bombeamento e resfriamento.",
    impact: "Autossuficiência energética e zero emissões no bombeamento.",
    iconName: "Sun",
    imageUrl: "https://images.pexels.com/photos/20858785/pexels-photo-20858785.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "fixacao-biologica",
    title: "Bactérias Promotoras de Crescimento",
    category: "solo",
    description: "Inoculantes de última geração que colonizam as raízes e capturam o nitrogênio presente no ar, transferindo-o diretamente para a planta de forma 100% limpa.",
    impact: "Substituição total da adubação nitrogenada de cobertura na soja.",
    iconName: "Sparkles",
    imageUrl: "https://images.pexels.com/photos/21973966/pexels-photo-21973966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "rastreabilidade-blockchain",
    title: "Rastreabilidade por Blockchain",
    category: "emissoes",
    description: "Registros imutáveis que provam que o lote de grãos ou carne não é oriundo de áreas de desmatamento ilegal ou sobreposição de terras indígenas.",
    impact: "Abertura dos mercados mais exigentes da Europa e Ásia com prêmio de preço.",
    iconName: "Link",
    imageUrl: "https://images.pexels.com/photos/34677188/pexels-photo-34677188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "manejo-biologico-onfarm",
    title: "Biofábricas On-Farm",
    category: "solo",
    description: "Biorreatores instalados dentro da própria fazenda que permitem ao produtor multiplicar microrganismos benéficos com alta pureza e baixo custo.",
    impact: "Autonomia na gestão da saúde do solo e economia de até 70% em insumos.",
    iconName: "Factory",
    imageUrl: "https://images.pexels.com/photos/5027612/pexels-photo-5027612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

export const successCases: SuccessCase[] = [
  {
    id: "fazenda-sao-jose",
    farmName: "Fazenda São José",
    location: "Rio Verde, Goiás",
    culture: "Soja, Milho e Pecuária de Corte (ILPF)",
    results: {
      productivityIncrease: "+22%",
      carbonReduction: "-4.2 ton CO₂/ha",
      waterSaved: "28%"
    },
    story: "A Fazenda São José enfrentava a degradação acelerada de suas pastagens e compactação do solo. Ao implementar a Integração Lavoura-Pecuária-Floresta, plantando linhas de eucalipto consorciadas com braquiária e rotação de soja, a propriedade transformou seu microclima. O gado ganhou peso mais rápido devido à sombra, e a produtividade da soja bateu recordes graças à ciclagem de nutrientes proporcionada pelas raízes do capim.",
    quote: "Muitos diziam que plantar árvores no meio da lavoura iria atrapalhar as máquinas. Hoje, nossa fazenda retém muito mais água, o solo está vivo e nossa rentabilidade nunca foi tão alta.",
    ownerName: "Carlos Eduardo Mendonça",
    imageUrl: "https://images.pexels.com/photos/5027612/pexels-photo-5027612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "sitio-vale-verde",
    farmName: "Sítio Vale Verde",
    location: "Petrolina, Pernambuco",
    culture: "Fruticultura Irrigada (Manga e Uva)",
    results: {
      productivityIncrease: "+18%",
      carbonReduction: "100% de energia limpa",
      waterSaved: "42%"
    },
    story: "Localizada no semiárido, a gestão da água sempre foi o fator crítico. Com a adoção de sondas de capacitância e um sistema inteligente de microaspersão alimentado por uma usina solar própria, o Sítio Vale Verde reduziu pela metade o desperdício de água. Além disso, a aplicação de controle biológico com ácaros predadores eliminou a necessidade de inseticidas agressivos.",
    quote: "O equilíbrio entre produzir no semiárido e respeitar a caatinga nos abriu as portas dos supermercados mais exigentes da Europa. Sustentabilidade é nosso passaporte.",
    ownerName: "Mariana Costa Albuquerque",
    imageUrl: "https://images.pexels.com/photos/20858785/pexels-photo-20858785.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "estancia-santo-antonio",
    farmName: "Estância Santo Antônio",
    location: "Dourados, Mato Grosso do Sul",
    culture: "Grãos e Bioinsumos On-Farm",
    results: {
      productivityIncrease: "+15%",
      carbonReduction: "-3.1 ton CO₂/ha",
      waterSaved: "20%"
    },
    story: "Pioneira no uso de biofábricas próprias para a multiplicação de *Bacillus subtilis* e *Trichoderma*, a Estância conseguiu reverter um quadro grave de mofo-branco que ameaçava as safras. A saúde do solo foi recuperada, aumentando o teor de matéria orgânica e a capacidade de retenção hídrica, permitindo que a lavoura resistisse a um veranico severo sem perdas significativas.",
    quote: "A natureza já tem as respostas para a maioria das nossas pragas. Quando paramos de lutar contra o meio ambiente e começamos a usar a biologia a nosso favor, o custo cai e o solo agradece.",
    ownerName: "Roberto e Helena Zanatta",
    imageUrl: "https://images.pexels.com/photos/34677188/pexels-photo-34677188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

export const articlesData: ArticleItem[] = [
  {
    id: "o-futuro-dos-mercados-de-carbono",
    title: "O Futuro dos Mercados de Carbono para o Produtor Rural",
    category: "Economia Verde",
    readTime: "6 min de leitura",
    summary: "Como as práticas de agricultura regenerativa estão permitindo que fazendas brasileiras emitam e vendam créditos de carbono no mercado internacional.",
    content: [
      "O mercado de créditos de carbono deixou de ser uma promessa distante para se tornar uma realidade lucrativa no campo brasileiro. Com a crescente pressão global por cadeias de suprimentos descarbonizadas, o produtor que adota boas práticas agrícolas está diante de uma nova fonte de receita.",
      "Práticas como o Plantio Direto contínuo, a rotação de culturas com adubação verde e a recuperação de pastagens degradadas promovem o sequestro direto de carbono no solo. Empresas de tecnologia e certificadoras já conseguem mensurar esse ganho com precisão através de amostragens de solo e modelagens de satélite.",
      "Para acessar esse mercado, o primeiro passo é a realização de um inventário de emissões e remoções da propriedade. Projetos agrupados (em formato de cooperativas ou integradoras) têm reduzido os custos de auditoria, permitindo que pequenos e médios produtores também recebam por seus serviços ambientais.",
      "Além da venda direta dos créditos, o balanço positivo de carbono facilita o acesso a empréstimos com juros mais baixos, conhecidos como Green Bonds ou Títulos Verdes, criando um ciclo virtuoso onde a preservação financia a modernização."
    ],
    author: {
      name: "Dr. Fernando S. Silveira",
      role: "Especialista em Finanças Verdes",
      avatar: "https://images.pexels.com/photos/5027612/pexels-photo-5027612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    publishDate: "12 de Maio, 2025",
    imageUrl: "https://images.pexels.com/photos/34677188/pexels-photo-34677188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "bioinsumos-revolucao-silenciosa",
    title: "Bioinsumos: A Revolução Silenciosa que Restaura a Microbiologia",
    category: "Inovação",
    readTime: "8 min de leitura",
    summary: "Um mergulho na ciência dos defensivos biológicos e como eles garantem altas produtividades sem esgotar os recursos naturais.",
    content: [
      "Por décadas, o modelo agrícola global baseou-se na esterilização do solo e na eliminação química de qualquer organismo que não fosse a planta cultivada. Hoje, compreendemos que um solo saudável é um ecossistema complexo e vivo, onde bilhões de microrganismos trabalham em simbiose com as raízes.",
      "Os bioinsumos representam a vanguarda dessa nova mentalidade. O uso de fungos como o *Beauveria bassiana* para o controle de insetos ou bactérias como o *Azospirillum brasilense* para a fixação de nitrogênio mostra que é possível manter as pragas abaixo do nível de dano econômico sem gerar resistência ou contaminar o lençol freático.",
      "O Brasil assumiu a liderança mundial nesse setor. O Programa Nacional de Bioinsumos fortaleceu a regulamentação e incentivou tanto o surgimento de grandes indústrias biológicas quanto a produção 'On-Farm', onde o produtor cultiva seus próprios microrganismos com o suporte de agrônomos especializados.",
      "O resultado prático é visível: plantas mais enraizadas, maior tolerância ao estresse hídrico e uma redução substancial na pegada de carbono do produto final, garantindo competitividade internacional."
    ],
    author: {
      name: "Dra. Amanda Nogueira",
      role: "Pesquisadora em Microbiologia do Solo",
      avatar: "https://images.pexels.com/photos/5027612/pexels-photo-5027612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    publishDate: "28 de Abril, 2025",
    imageUrl: "https://images.pexels.com/photos/21973966/pexels-photo-21973966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: "o-codigo-florestal-brasileiro",
    title: "Código Florestal: O Maior Ativo de Sustentabilidade do Agro",
    category: "Legislação",
    readTime: "5 min de leitura",
    summary: "Entenda por que a legislação ambiental brasileira é uma das mais rigorosas do mundo e como usá-la como diferencial competitivo.",
    content: [
      "O Código Florestal Brasileiro (Lei 12.651/2012) impõe aos produtores rurais a obrigação de destinar entre 20% e 80% de suas propriedades para a preservação da vegetação nativa, a título de Reserva Legal, além de proteger integralmente as Áreas de Preservação Permanente (APPs) ao longo de rios e nascentes.",
      "Nenhum outro país com agricultura de relevância global exige que o setor privado arfe com a conservação de parcelas tão expressivas de suas terras sem compensação financeira direta. Isso significa que cada tonelada de soja, milho ou carne exportada pelo Brasil carrega um componente embutido de conservação florestal.",
      "A implementação do Cadastro Ambiental Rural (CAR) trouxe transparência, permitindo o monitoramento via satélite de mais de 6 milhões de propriedades. O grande desafio atual é transformar esse cumprimento legal em um selo de valor reconhecido pelos consumidores finais.",
      "Iniciativas de rastreabilidade e certificação já utilizam os dados do CAR para comprovar que a produção é livre de desmatamento, transformando o que antes era visto como um fardo burocrático no nosso maior argumento de vendas global."
    ],
    author: {
      name: "Henrique V. de Barros",
      role: "Advogado e Consultor do Agronegócio",
      avatar: "https://images.pexels.com/photos/5027612/pexels-photo-5027612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200"
    },
    publishDate: "10 de Março, 2025",
    imageUrl: "https://images.pexels.com/photos/34677185/pexels-photo-34677185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

export const faqData = [
  {
    question: "É realmente possível aumentar a produção sem abrir novas áreas de mata?",
    answer: "Sim, absolutamente. O Brasil possui cerca de 160 milhões de hectares de pastagens, sendo que mais da metade apresenta algum grau de degradação. Ao converter pastos degradados em lavouras ou aplicar técnicas de intensificação (como a ILPF), podemos dobrar a produção de grãos e carnes do país apenas otimizando as áreas já antropizadas, sem a necessidade de derrubar uma única árvore."
  },
  {
    question: "Como o pequeno produtor pode ter acesso às tecnologias sustentáveis do Agro 4.0?",
    answer: "A tecnologia no campo está se democratizando rapidamente. O uso de drones para pulverização e controle biológico, por exemplo, muitas vezes é contratado como serviço (prestação de serviços por hectares), não exigindo que o pequeno produtor compre a aeronave. Além disso, cooperativas agrícolas e linhas de crédito governamentais, como o Pronaf Bioeconomia, oferecem juros subsidiados para a aquisição de sistemas de energia solar e bioinsumos."
  },
  {
    question: "O que são bioinsumos e por que eles são considerados o futuro do controle de pragas?",
    answer: "Bioinsumos são produtos desenvolvidos a partir de enzimas, extratos vegetais, microrganismos (vírus, bactérias e fungos) ou macroorganismos (insetos benéficos) destinados à nutrição ou proteção das plantas. Eles são o futuro porque não deixam resíduos tóxicos nos alimentos, não contaminam os recursos hídricos e, ao contrário dos químicos, não geram resistência rápida nas pragas, mantendo o equilíbrio biológico da lavoura."
  },
  {
    question: "Qual é o papel da agricultura no combate às mudanças climáticas?",
    answer: "A agricultura é o único setor produtivo que tem a capacidade intrínseca de reverter as emissões, funcionando como um sumidouro de carbono. Enquanto a indústria e os transportes apenas tentam reduzir suas emissões, uma fazenda com Plantio Direto, rotação de culturas e solos bem nutridos retira ativamente o gás carbônico da atmosfera por meio da fotossíntese e o armazena de forma estável no solo sob a forma de matéria orgânica."
  },
  {
    question: "O que é o Índice de Sustentabilidade Agro (ISA) calculado no simulador?",
    answer: "O ISA é uma métrica educacional desenvolvida para esta plataforma que avalia o grau de maturidade sustentável de uma propriedade rural com base em suas práticas de manejo, uso de recursos hídricos, matriz energética e conservação do solo. Ele ajuda o produtor a identificar pontos de melhoria para alcançar o status de 'Fazenda Regenerativa' e acessar prêmios de mercado."
  }
];
