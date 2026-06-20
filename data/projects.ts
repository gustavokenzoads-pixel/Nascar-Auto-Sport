// ============================================================
// data/projects.ts — NASCAR Auto Sport
// ============================================================
//
// IMAGENS: coloque os arquivos em /public/images/projects/<id>/
//   - antes.webp  → imagem "antes" do projeto
//   - depois.webp → imagem "depois" do projeto
//
// Exemplo: /public/images/projects/b20-bitelo/antes.webp
//
// Enquanto as imagens não estiverem prontas, os cards mostram
// o placeholder padrão automaticamente.
// ============================================================

export type ProjectCategory =
  | 'funilaria-pintura'
  | 'tunning'
  | 'estetica'
  | 'performance'
  | 'martelinho'
  | 'restauracao'

export type YoutubeLink = {
  url: string
  label?: string
}

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  extraCategories?: ProjectCategory[]
  tags: string[]
  description: string
  beforeImage: string
  afterImage: string
  highlight: boolean
  year: number
  client?: string
  isFamoso?: boolean
  famosoInfo?: string
  youtubeLinks?: YoutubeLink[]
}

export const categoryLabels: Record<ProjectCategory, string> = {
  'funilaria-pintura': 'Funilaria & Pintura',
  'tunning': 'Tunning',
  'estetica': 'Estética',
  'performance': 'Alta Performance',
  'martelinho': 'Martelinho de Ouro',
  'restauracao': 'Restauração',
}

export const projects: Project[] = [

  // ============================================================
  // FAMOSOS — mantidos do código original
  // ============================================================

  {
    id: 'famoso-bruna-genoin',
    title: 'Bruna Genoin — Nissan 350Z',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Nissan 350Z', 'Funilaria', 'Pintura', 'Estética', 'Tunning'],
    description:
      'Transformação completa do 350Z da influencer Bruna Genoin: funilaria, pintura nova, estética detalhada e pacote de tunning.',
    beforeImage: '/imagesprojects/1antes.webp',
    afterImage: '/imagesprojects/1depois.webp',
    highlight: true,
    year: 2024,
    client: 'Bruna Genoin',
    isFamoso: true,
    youtubeLinks: [
      { url: 'https://www.youtube.com/watch?v=UJPQyIFYcR8&t', label: 'Ver no YouTube' },
    ],
  },

  {
    id: 'famoso-mesquitinha',
    title: 'Mesquitinha — BMW E36 Drift',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['BMW E36', 'Drift', 'Funilaria', 'Pintura', 'Tunning'],
    description:
      'Preparação da BMW E36 de drift do Mesquitinha: funilaria pesada, nova pintura, estética e pacote de tunning para pista.',
    beforeImage: '/imagesprojects/2antes.webp',
    afterImage: '/imagesprojects/2depois.webp',
    highlight: true,
    year: 2024,
    client: 'Luiz Mesquita — Mesquitinha',
    isFamoso: true,
    youtubeLinks: [
      { url: 'https://www.youtube.com/watch?v=kXpC3fUXoyE', label: 'Ver no YouTube' },
    ],
  },

  {
    id: 'famoso-rato-borrachudo',
    title: 'Rato Borrachudo — Kombi Corujinha',
    category: 'restauracao',
    extraCategories: [],
    tags: ['Kombi', 'Corujinha', 'Restauração', 'Web Série'],
    description:
      'Restauração épica da Kombi Corujinha — projeto com mais de 50 episódios publicados no YouTube acompanhando cada etapa do trabalho.',
    beforeImage: '/imagesprojects/3antes.webp',
    afterImage: '/imagesprojects/3depois.webp',
    highlight: true,
    year: 2023,
    client: 'Rato Borrachudo',
    isFamoso: true,
    famosoInfo: 'Web série com +50 vídeos',
    youtubeLinks: [
      {
        url: 'https://www.youtube.com/watch?v=GYURcFGm-1I&list=PLxxmCvgp90IqEkjvECdtL-EyoCSOIm4zV',
        label: 'Ver Web Série (+50 eps)',
      },
    ],
  },

  {
    id: 'famoso-igor-3k',
    title: 'Igor 3K (Flow Podcast) — Ford Fusion',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['Ford Fusion', 'Pintura Completa', 'Troca de Cor', 'Flow Podcast'],
    description:
      'Pintura completa com troca de cor no Ford Fusion do Igor 3K, co-fundador do Flow Podcast.',
    beforeImage: '/imagesprojects/4antes.webp',
    afterImage: '/imagesprojects/4depois.webp',
    highlight: true,
    year: 2024,
    client: 'Igor 3K — Flow Podcast',
    isFamoso: true,
    youtubeLinks: [
      { url: 'https://www.youtube.com/watch?v=PsM1fsVSC_c', label: 'Vídeo 1' },
      { url: 'https://www.youtube.com/watch?v=EfKtHty0DV8', label: 'Vídeo 2' },
    ],
  },

  // ============================================================
  // PROJETOS DA LISTA DO NEY — 48 projetos
  // ============================================================

  // 1
  {
    id: 'b20-bitelo',
    title: 'B20 do Bitelo',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura', 'estetica'],
    tags: ['Chevrolet B20', 'Funilaria', 'Pintura', 'Estética', 'Restauração'],
    description:
      'Restauração completa da B20 do Bitelo: funilaria, pintura e estética em uma das caminhonetes mais icônicas do canal.',
    beforeImage: '/imagesprojects/5antes.webp',
    afterImage: '/imagesprojects/5depois.webp',
    highlight: true,
    year: 2026,
    client: 'Bitelo',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=TR13OLiHVuk', label: 'Ver no YouTube' }],
  },

  // 2
  {
    id: 'hyundai-i30-polemico',
    title: 'Hyundai i30 Polêmico',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['Hyundai i30', 'Recuperação', 'Funilaria', 'Pintura'],
    description:
      'Recuperação e reforma completa do Hyundai i30 com funilaria e pintura do início ao fim.',
    beforeImage: '/imagesprojects/7antes.webp',
    afterImage: '/imagesprojects/7depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=s-qKxAa1zMQ', label: 'Ver no YouTube' }],
  },

  // 3
  {
    id: 'mark2-drift',
    title: 'Mark 2 Drift — Fred Monteiro',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Toyota Mark 2', 'Drift', 'Recuperação', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Recuperação, funilaria, pintura e estética completa no Mark 2 de drift do Fred Monteiro.',
    beforeImage: '/imagesprojects/8antes.webp',
    afterImage: '/imagesprojects/8depois.webp',
    highlight: true,
    year: 2024,
    client: 'Fred Monteiro',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=kbygCCy7nhE', label: 'Ver no YouTube' }],
  },

  // 4
  {
    id: 'honda-city-alargado',
    title: 'Honda City Alargado',
    category: 'funilaria-pintura',
    extraCategories: ['tunning', 'performance'],
    tags: ['Honda City', 'Alargado', 'Funilaria', 'Pintura', 'Tunning', 'Performance'],
    description:
      'Honda City com kit alargado: funilaria e pintura completa, tunning e upgrades de performance.',
    beforeImage: '/imagesprojects/9antes.webp',
    afterImage: '/imagesprojects/9depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=jYyF-fuJFbM', label: 'Ver no YouTube' }],
  },

  // 5
  {
    id: 'volvo-xc60-lito',
    title: 'Volvo XC60 — Lito (Aviões e Músicas)',
    category: 'estetica',
    extraCategories: ['funilaria-pintura'],
    tags: ['Volvo XC60', 'Pintura', 'Estética'],
    description:
      'Pintura e estética completa no Volvo XC60 do cantor Lito da banda Aviões e Músicas.',
    beforeImage: '/imagesprojects/10antes.webp',
    afterImage: '/imagesprojects/10depois.webp',
    highlight: true,
    year: 2024,
    client: 'Lito Sousa — Aviões e Músicas',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=FBPzZbmNAlk', label: 'Ver no YouTube' }],
  },

  // 6
  {
    id: 'fiat-bravo-tjet',
    title: 'Fiat Bravo T-JET',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Fiat Bravo', 'T-JET', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética completa no Fiat Bravo T-JET.',
    beforeImage: '/imagesprojects/11antes.webp',
    afterImage: '/imagesprojects/11depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=JxZKYMJJ7LA', label: 'Ver no YouTube' }],
  },

  // 7
  {
    id: 'subaru-shark',
    title: 'Subaru Shark',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Subaru', 'Shark', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Transformação do Subaru Shark com funilaria, pintura e estética completa.',
    beforeImage: '/imagesprojects/12antes.webp',
    afterImage: '/imagesprojects/12depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=C0ok1bHbaIk', label: 'Ver no YouTube' }],
  },

  // 8
  {
    id: 'subaru-wrx-autosuperbr',
    title: 'Subaru WRX — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Subaru WRX', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Subaru WRX do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/13antes.webp',
    afterImage: '/imagesprojects/13depois.webp',
    highlight: true,
    year: 2024,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=c2qUO2DsmPY', label: 'Ver no YouTube' }],
  },

  // 9
  {
    id: 'supra-renato-garcia',
    title: 'Toyota Supra — Renato Garcia',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Toyota Supra', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética na icônica Supra de Renato Garcia, um dos maiores influenciadores automotivos do Brasil.',
    beforeImage: '/imagesprojects/14antes.webp',
    afterImage: '/imagesprojects/14depois.webp',
    highlight: true,
    year: 2024,
    client: 'Renato Garcia',
    isFamoso: true,
    famosoInfo: '31M seguidores',
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=EXfnu8U2Urs', label: 'Ver no YouTube' }],
  },

  // 10
  {
    id: '350z-preto',
    title: 'Nissan 350Z Preto',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Nissan 350Z', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura interna e estética completa no Nissan 350Z na cor preta.',
    beforeImage: '/imagesprojects/15antes.webp',
    afterImage: '/imagesprojects/15depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=M7uVRkBhbHk', label: 'Ver no YouTube' }],
  },

  // 11
  {
    id: 'parati-gti',
    title: 'Parati GTi',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['VW Parati', 'GTi', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética na clássica Parati GTi.',
    beforeImage: '/imagesprojects/16antes.webp',
    afterImage: '/imagesprojects/16depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=6wsRORZeuTA', label: 'Ver no YouTube' }],
  },

  // 12
  {
    id: 'parati-low-cars',
    title: 'Parati Low Cars',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['VW Parati', 'Low Cars', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética na Parati do projeto Low Cars.',
    beforeImage: '/imagesprojects/17antes.webp',
    afterImage: '/imagesprojects/17depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=OC-FCFwN2Ic', label: 'Ver no YouTube' }],
  },

  // 13
  {
    id: '240sx-erick-medici',
    title: 'Nissan 240SX — Erick Medici',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['Nissan 240SX', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura completa no Nissan 240SX do Erick Medici.',
    beforeImage: '/imagesprojects/18antes.webp',
    afterImage: '/imagesprojects/18depois.webp',
    highlight: true,
    year: 2024,
    client: 'Erick Medici',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=j690437cBVA', label: 'Ver no YouTube' }],
  },

  // 14
  {
    id: 'eclipse-fast-furious',
    title: 'Mitsubishi Eclipse — Fast and Furious',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Mitsubishi Eclipse', 'Fast and Furious', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Eclipse temático de Velozes e Furiosos.',
    beforeImage: '/imagesprojects/19antes.webp',
    afterImage: '/imagesprojects/19depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=89tMq1vSOCw', label: 'Ver no YouTube' }],
  },

  // 15
  {
    id: 'marea-prata-24',
    title: 'Fiat Marea Prata 2.4',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Fiat Marea', '2.4', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética completa no Fiat Marea Prata 2.4.',
    beforeImage: '/imagesprojects/20antes.webp',
    afterImage: '/imagesprojects/20depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=8tPsavZLrIE', label: 'Ver no YouTube' }],
  },

  // 16
  {
    id: 'marea-turbo-nicolas',
    title: 'Fiat Marea Turbo — Nicolas',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Fiat Marea', 'Turbo', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética completa no Fiat Marea Turbo do Nicolas.',
    beforeImage: '/imagesprojects/21antes.webp',
    afterImage: '/imagesprojects/21depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=eN2Ele12ZzY', label: 'Ver no YouTube' }],
  },

  // 17
  {
    id: 'ford-ka-polemico',
    title: 'Ford Ka Polêmico',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Ford Ka', 'Recuperação', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Recuperação completa, funilaria, pintura e estética no Ford Ka polêmico.',
    beforeImage: '/imagesprojects/22antes.webp',
    afterImage: '/imagesprojects/22depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=Y6j8yjuYtX8', label: 'Ver no YouTube' }],
  },

  // 18
  {
    id: 'passat-verde-autosuperbr',
    title: 'VW Passat Verde — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['VW Passat', 'Verde', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura completa no VW Passat Verde do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/23antes.webp',
    afterImage: '/imagesprojects/23depois.webp',
    highlight: false,
    year: 2023,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=a6drXmx5dro', label: 'Ver no YouTube' }],
  },

  // 19
  {
    id: 'passat-marrom-autosuperbr',
    title: 'VW Passat Marrom — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['VW Passat', 'Marrom', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura completa no VW Passat Marrom do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/24antes.webp',
    afterImage: '/imagesprojects/24depois.webp',
    highlight: false,
    year: 2023,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=aUvEN3yO-6w', label: 'Ver no YouTube' }],
  },

  // 20
  {
    id: 'audi-s3-autosuperbr',
    title: 'Audi S3 — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['Audi S3', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura no Audi S3 do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/25antes.webp',
    afterImage: '/imagesprojects/25depois.webp',
    highlight: false,
    year: 2023,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=kw6kKWg1-Cs', label: 'Ver no YouTube' }],
  },

  // 21
  {
    id: 'saveiro-autosuperbr',
    title: 'VW Saveiro — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['VW Saveiro', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética na Saveiro do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/26antes.webp',
    afterImage: '/imagesprojects/26depois.webp',
    highlight: false,
    year: 2023,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=AvCfgufjdP8', label: 'Ver no YouTube' }],
  },

  // 22
  {
    id: 'gtr-r35-liberty-walk',
    title: 'Nissan GTR R35 Godzilla — Liberty Walk',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Nissan GTR', 'R35', 'Liberty Walk', 'Recuperação', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Recuperação, funilaria, pintura, estética e customização completa no GTR R35 com kit Liberty Walk.',
    beforeImage: '/imagesprojects/27antes.webp',
    afterImage: '/imagesprojects/27depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=pq1zIN0YX6U', label: 'Ver no YouTube' }],
  },

  // 23
  {
    id: 'corvette-drift-david',
    title: 'Corvette Drift — David Almonacid',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Corvette', 'Drift', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Corvette de drift do David Almonacid.',
    beforeImage: '/imagesprojects/28antes.webp',
    afterImage: '/imagesprojects/28depois.webp',
    highlight: true,
    year: 2024,
    client: 'David Almonacid',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=fBDGyrHxy1g', label: 'Ver no YouTube' }],
  },

  // 24
  {
    id: 'civic-4d-azul',
    title: 'Honda Civic 4D Garage Azul',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Honda Civic', '4D Garage', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética completa no Honda Civic azul do 4D Garage.',
    beforeImage: '/imagesprojects/29antes.webp',
    afterImage: '/imagesprojects/29depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=D_hKv8BTe4U', label: 'Ver no YouTube' }],
  },

  // 25
  {
    id: 'a3-pocinha-garage',
    title: 'Audi A3 — Pocinha Garage',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'performance', 'tunning'],
    tags: ['Audi A3', 'Pocinha Garage', 'Funilaria', 'Pintura', 'Estética', 'Alta Performance', 'Customização'],
    description:
      'Funilaria, pintura, alta performance, customização e estética completa no Audi A3 da Pocinha Garage.',
    beforeImage: '/imagesprojects/30antes.webp',
    afterImage: '/imagesprojects/30depois.webp',
    highlight: true,
    year: 2024,
    client: 'Pocinha Garage',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=7qgQFTAq3_w', label: 'Ver no YouTube' }],
  },

  // 26
  {
    id: 'ram-1500',
    title: 'RAM 1500',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['RAM 1500', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Funilaria, pintura, estética e customização completa na RAM 1500.',
    beforeImage: '/imagesprojects/31antes.webp',
    afterImage: '/imagesprojects/31depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=CUpqnMMOQAE', label: 'Ver no YouTube' }],
  },

  // 27
  {
    id: 'chevette-drift-dark-garage',
    title: 'Chevette Drift — Dark Garage',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['Chevette', 'Drift', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura no Chevette de drift do Dark Garage.',
    beforeImage: '/imagesprojects/32antes.webp',
    afterImage: '/imagesprojects/32depois.webp',
    highlight: true,
    year: 2023,
    client: 'Dark Garage',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=kATKODsSmtY', label: 'Ver no YouTube' }],
  },

  // 28
  {
    id: 'mercedes-c180-branca',
    title: 'Mercedes C180 Branca',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Mercedes C180', 'Recuperação', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Recuperação, funilaria, pintura, estética e customização na Mercedes C180 Branca.',
    beforeImage: '/imagesprojects/33antes.webp',
    afterImage: '/imagesprojects/33depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=n9bS6Sub4Rw', label: 'Ver no YouTube' }],
  },

  // 29
  {
    id: 'f150-lightning-dj-heron',
    title: 'Ford F-150 Lightning — DJ Heron (Velozes e Furiosos)',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Ford F-150', 'Lightning', 'Velozes e Furiosos', 'DJ Heron', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Funilaria, pintura, estética e customização temática de Velozes e Furiosos na F-150 Lightning do DJ Heron.',
    beforeImage: '/imagesprojects/34antes.webp',
    afterImage: '/imagesprojects/34depois.webp',
    highlight: true,
    year: 2024,
    client: 'DJ Heron',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=v26eDXyjZnw', label: 'Ver no YouTube' }],
  },

  // 30
  {
    id: 'honda-fit-teto-solar',
    title: 'Honda Fit — Teto Solar de Tiguan',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning', 'performance'],
    tags: ['Honda Fit', 'Teto Solar', 'Funilaria', 'Pintura', 'Estética', 'Customização', 'Alta Performance'],
    description:
      'Funilaria, pintura, estética, customização e alta performance com instalação de teto solar de Tiguan no Honda Fit.',
    beforeImage: '/imagesprojects/35antes.webp',
    afterImage: '/imagesprojects/35depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=60Gq6GtxcC0', label: 'Ver no YouTube' }],
  },

  // 31
  {
    id: 'bmw-328i-touring',
    title: 'BMW 328i Touring',
    category: 'funilaria-pintura',
    extraCategories: [],
    tags: ['BMW 328i', 'Touring', 'Funilaria', 'Pintura'],
    description:
      'Funilaria e pintura completa na BMW 328i Touring.',
    beforeImage: '/imagesprojects/36antes.webp',
    afterImage: '/imagesprojects/36depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=EJ1y2nLFdgU', label: 'Ver no YouTube' }],
  },

  // 32
  {
    id: 'jeep-compass-transformado',
    title: 'Jeep Compass Transformado',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Jeep Compass', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Jeep Compass transformado.',
    beforeImage: '/imagesprojects/37antes.webp',
    afterImage: '/imagesprojects/37depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=UJLfXhQdtsc', label: 'Ver no YouTube' }],
  },

  // 33
  {
    id: 'peugeot-308-transformado',
    title: 'Peugeot 308 Transformado',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Peugeot 308', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Funilaria, pintura, estética e customização completa no Peugeot 308 transformado.',
    beforeImage: '/imagesprojects/38antes.webp',
    afterImage: '/imagesprojects/38depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=9scltZVN4wo', label: 'Ver no YouTube' }],
  },

  // 34
  {
    id: 'lancer-para-evo-x',
    title: 'Mitsubishi Lancer para Evo X',
    category: 'tunning',
    extraCategories: ['funilaria-pintura', 'estetica'],
    tags: ['Mitsubishi Lancer', 'Evo X', 'Customização', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Customização, funilaria, pintura e estética na transformação do Lancer em Evo X.',
    beforeImage: '/imagesprojects/39antes.webp',
    afterImage: '/imagesprojects/39depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=XKJAfbfOa24', label: 'Ver no YouTube' }],
  },

  // 35
  {
    id: 'subaru-sti-jabuti',
    title: 'Subaru WRX STi — Jabuti',
    category: 'tunning',
    extraCategories: ['estetica'],
    tags: ['Subaru STi', 'Jabuti', 'Customização', 'Estética'],
    description:
      'Customização e estética completa no Subaru WRX STi Jabuti.',
    beforeImage: '/imagesprojects/40antes.webp',
    afterImage: '/imagesprojects/40depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=wnFLyXO4Y74', label: 'Ver no YouTube' }],
  },

  // 36
  {
    id: 'ranger-nascar-ep1',
    title: 'Ford Ranger NASCAR — EP1',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning', 'performance'],
    tags: ['Ford Ranger', 'Funilaria', 'Pintura', 'Estética', 'Customização', 'Alta Performance'],
    description:
      'Funilaria, pintura, estética, customização e alta performance na Ford Ranger da NASCAR — primeiro episódio da série.',
    beforeImage: '/imagesprojects/41antes.webp',
    afterImage: '/imagesprojects/41depois.webp',
    highlight: true,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=eFuUuvgxNJ4', label: 'Ver no YouTube' }],
  },

  // 37
  {
    id: 'fusca-restaurado',
    title: 'Fusca 100% Restaurado',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura'],
    tags: ['VW Fusca', 'Restauração', 'Funilaria', 'Pintura'],
    description:
      'Restauração 100% do Fusca clássico: funilaria e pintura do início ao fim.',
    beforeImage: '/imagesprojects/42antes.webp',
    afterImage: '/imagesprojects/42depois.webp',
    highlight: true,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=f3mH0pHDcEw', label: 'Ver no YouTube' }],
  },

  // 38
  {
    id: 'opala-restaurado',
    title: 'Opala Restaurado',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura'],
    tags: ['Chevrolet Opala', 'Restauração', 'Funilaria', 'Pintura'],
    description:
      'Restauração completa do Opala com funilaria e pintura impecáveis.',
    beforeImage: '/imagesprojects/43antes.webp',
    afterImage: '/imagesprojects/43depois.webp',
    highlight: true,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=q_nDgZmvirM', label: 'Ver no YouTube' }],
  },

  // 39
  {
    id: 'gol-diferentao-autosuperbr',
    title: 'VW Gol Diferentão — AutoSuperBr',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['VW Gol', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Gol Diferentão do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/44antes.webp',
    afterImage: '/imagesprojects/44depois.webp',
    highlight: false,
    year: 2023,
    client: 'AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=oB2mT-O9M74', label: 'Ver no YouTube' }],
  },

  // 40
  {
    id: 'maverick-4-portas',
    title: 'Ford Maverick 4 Portas',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura'],
    tags: ['Ford Maverick', '4 Portas', 'Restauração', 'Funilaria', 'Pintura'],
    description:
      'Restauração, funilaria e pintura completa na Ford Maverick 4 portas.',
    beforeImage: '/imagesprojects/45antes.webp',
    afterImage: '/imagesprojects/45depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=SFvexjbuvik', label: 'Ver no YouTube' }],
  },

  // 41
  {
    id: 's15-monaliza-tokyo-drift',
    title: 'Nissan S15 Monaliza — Tokyo Drift',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'performance', 'tunning'],
    tags: ['Nissan S15', 'Tokyo Drift', 'Thiago Bortoto', 'Funilaria', 'Pintura', 'Estética', 'Alta Performance', 'Customização'],
    description:
      'Funilaria, pintura, estética, alta performance e customização no S15 Monaliza de Tokyo Drift do Thiago Bortoto.',
    beforeImage: '/imagesprojects/46antes.webp',
    afterImage: '/imagesprojects/46depois.webp',
    highlight: true,
    year: 2024,
    client: 'Thiago Bortoto',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=v1ip7CuPsUI', label: 'Ver no YouTube' }],
  },

  // 42
  {
    id: 'monza-envemo-conversivel',
    title: 'Monza Envemo Conversível',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Chevrolet Monza', 'Envemo', 'Conversível', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no raro Monza Envemo Conversível.',
    beforeImage: '/imagesprojects/47antes.webp',
    afterImage: '/imagesprojects/47depois.webp',
    highlight: true,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=OTjZju6T55E', label: 'Ver no YouTube' }],
  },

  // 43
  {
    id: 'volvo-850-restaurado',
    title: 'Volvo 850 Restaurado',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura'],
    tags: ['Volvo 850', 'Recuperação', 'Funilaria', 'Pintura'],
    description:
      'Recuperação, funilaria e pintura completa no clássico Volvo 850.',
    beforeImage: '/imagesprojects/48antes.webp',
    afterImage: '/imagesprojects/48depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=cdTi7TlgHK8', label: 'Ver no YouTube' }],
  },

  // 44
  {
    id: 'civic-track-day',
    title: 'Honda Civic Track Day PT',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura', 'estetica'],
    tags: ['Honda Civic', 'Track Day', 'Restauração', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Restauração, funilaria, pintura e estética no Honda Civic preparado para Track Day.',
    beforeImage: '/imagesprojects/49antes.webp',
    afterImage: '/imagesprojects/49depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=HBbEn2_wdbA', label: 'Ver no YouTube' }],
  },

  // 45
  {
    id: 'pontiac-gto-judge',
    title: 'Pontiac GTO "The Judge" 1968',
    category: 'funilaria-pintura',
    extraCategories: ['estetica', 'tunning'],
    tags: ['Pontiac GTO', 'The Judge', '1968', 'Funilaria', 'Pintura', 'Estética', 'Customização'],
    description:
      'Funilaria, pintura, estética e customização no icônico Pontiac GTO "The Judge" de 1968.',
    beforeImage: '/imagesprojects/50antes.webp',
    afterImage: '/imagesprojects/50depois.webp',
    highlight: true,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=jIB2AIq7sEQ', label: 'Ver no YouTube' }],
  },

  // 46
  {
    id: 'bmw-x1-teto-panoramico',
    title: 'BMW X1 — Teto Panorâmico',
    category: 'funilaria-pintura',
    extraCategories: ['tunning', 'performance'],
    tags: ['BMW X1', 'Teto Panorâmico', 'Funilaria', 'Pintura', 'Customização', 'Alta Performance'],
    description:
      'Funilaria, pintura, customização e alta performance na BMW X1 com teto panorâmico.',
    beforeImage: '/imagesprojects/51antes.webp',
    afterImage: '/imagesprojects/51depois.webp',
    highlight: false,
    year: 2024,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=zW_emykHNXk', label: 'Ver no YouTube' }],
  },

  // 47
  {
    id: 'caravan-restaurada',
    title: 'Chevrolet Caravan Restaurada',
    category: 'restauracao',
    extraCategories: ['funilaria-pintura'],
    tags: ['Chevrolet Caravan', 'Restauração', 'Funilaria', 'Pintura'],
    description:
      'Restauração completa da Caravan com funilaria e pintura impecáveis.',
    beforeImage: '/imagesprojects/52antes.webp',
    afterImage: '/imagesprojects/52depois.webp',
    highlight: false,
    year: 2023,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=dhbDAK5k-S8', label: 'Ver no YouTube' }],
  },

  // 48
  {
    id: 'astra-autosuperbr-lucas-fontana',
    title: 'Chevrolet Astra — Lucas Fontana (AutoSuperBr)',
    category: 'funilaria-pintura',
    extraCategories: ['estetica'],
    tags: ['Chevrolet Astra', 'Lucas Fontana', 'Funilaria', 'Pintura', 'Estética'],
    description:
      'Funilaria, pintura e estética no Chevrolet Astra do Lucas Fontana do canal AutoSuperBr.',
    beforeImage: '/imagesprojects/53antes.webp',
    afterImage: '/imagesprojects/53depois.webp',
    highlight: true,
    year: 2024,
    client: 'Lucas Fontana — AutoSuperBr',
    isFamoso: true,
    youtubeLinks: [{ url: 'https://www.youtube.com/watch?v=3UoI3jrIXvk', label: 'Ver no YouTube' }],
  },
]