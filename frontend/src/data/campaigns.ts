export interface CampaignMedia {
  type: 'image' | 'video'
  url: string
}

export interface Campaign {
  id: string
  title: string
  requesterName: string
  description: string
  excerpt: string
  coverImage: string
  media: CampaignMedia[]
  city: string
  country: string
  createdAt: string
  goalAmount: number
  raisedAmount: number
  certified: boolean
  contact: string
  donationUrl: string
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Tratamento para Ana após acidente grave',
    requesterName: 'Carlos Souza',
    description:
      'Ana, 34 anos, sofreu um grave acidente de trânsito em março de 2026 e necessita de cirurgia reconstrutiva e meses de fisioterapia. A família não tem condições de arcar com todos os custos do tratamento. Qualquer ajuda será fundamental para a recuperação dela e para que ela possa voltar a cuidar dos seus três filhos pequenos. Os recursos serão usados exclusivamente para despesas médicas, transporte às consultas e medicamentos prescritos.',
    excerpt: 'Ana precisa de cirurgia reconstrutiva após acidente de trânsito. Ajude a família a custear o tratamento.',
    coverImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800' },
    ],
    city: 'São Paulo',
    country: 'Brasil',
    createdAt: '2026-03-15',
    goalAmount: 15000,
    raisedAmount: 9300,
    certified: true,
    contact: 'carlos.souza@email.com',
    donationUrl: 'https://exemplo.com/doar/1',
  },
  {
    id: '2',
    title: 'Reconstrução da casa após enchente',
    requesterName: 'Maria Oliveira',
    description:
      'Em fevereiro de 2026, uma enchente devastou o bairro onde a família Oliveira morava há 20 anos. A casa foi completamente destruída e a família está abrigada na casa de parentes. Precisamos de ajuda para adquirir material de construção básico e pagar a mão de obra para reconstruir pelo menos os dois cômodos principais. Maria tem dois filhos de 8 e 12 anos e está desempregada desde que perdeu seu pequeno negócio na mesma enchente.',
    excerpt: 'Família perdeu tudo na enchente de fevereiro e precisa reconstruir sua casa urgentemente.',
    coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
    ],
    city: 'Porto Alegre',
    country: 'Brasil',
    createdAt: '2026-02-28',
    goalAmount: 30000,
    raisedAmount: 30000,
    certified: true,
    contact: 'maria.oliveira@email.com',
    donationUrl: 'https://exemplo.com/doar/2',
  },
  {
    id: '3',
    title: 'Medicamentos para criança com doença rara',
    requesterName: 'João Pereira',
    description:
      'Pedro, 7 anos, foi diagnosticado com uma doença metabólica rara que exige medicamentos de alto custo não cobertos pelo plano de saúde. O tratamento mensal ultrapassa R$ 4.000 e a família não consegue arcar com essa despesa. João, o pai, trabalha como motorista de aplicativo e a mãe cuida de Pedro em tempo integral devido à fragilidade da criança. O tratamento é essencial para evitar a progressão da doença.',
    excerpt: 'Pedro, 7 anos, precisa de medicamentos de alto custo para doença metabólica rara não coberta pelo plano.',
    coverImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800' },
    ],
    city: 'Belo Horizonte',
    country: 'Brasil',
    createdAt: '2026-04-02',
    goalAmount: 4800,
    raisedAmount: 640,
    certified: false,
    contact: 'joao.pereira@email.com',
    donationUrl: 'https://exemplo.com/doar/3',
  },
  {
    id: '4',
    title: 'Cadeira de rodas elétrica para veterano',
    requesterName: 'Lucia Fernández',
    description:
      'Roberto, 58 anos, veterano que perdeu a mobilidade das pernas em serviço, necessita de uma cadeira de rodas elétrica para recuperar sua independência. A cadeira manual atual não é adequada para sua condição e causa dores severas. Uma cadeira elétrica permitirá que ele se locomova sozinho, mantenha atividades sociais e preserve sua dignidade. Lucia, sua esposa, está coordenando a campanha após meses sem resposta das autoridades competentes.',
    excerpt: 'Veterano sem mobilidade nas pernas precisa de cadeira de rodas elétrica para recuperar independência.',
    coverImage: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800' },
    ],
    city: 'Buenos Aires',
    country: 'Argentina',
    createdAt: '2026-01-20',
    goalAmount: 12000,
    raisedAmount: 7450,
    certified: true,
    contact: 'lucia.fernandez@email.com',
    donationUrl: 'https://exemplo.com/doar/4',
  },
  {
    id: '5',
    title: 'Diálise para idosa sem cobertura médica',
    requesterName: 'Ahmed Hassan',
    description:
      'Fatima, 72 anos, necessita de sessões de diálise três vezes por semana devido a insuficiência renal crônica. Por ser imigrante, não possui cobertura de saúde pública e os custos das sessões são proibitivos. Ahmed, seu filho, trabalha em dois empregos para sustentar a família mas não consegue cobrir todas as despesas médicas. Sem diálise regular, a vida de Fatima está em risco. Cada sessão custa aproximadamente €120.',
    excerpt: 'Idosa imigrante de 72 anos precisa de ajuda para custear sessões de diálise vitais.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800' },
    ],
    city: 'Lisboa',
    country: 'Portugal',
    createdAt: '2026-03-30',
    goalAmount: 8640,
    raisedAmount: 1200,
    certified: false,
    contact: 'ahmed.hassan@email.com',
    donationUrl: 'https://exemplo.com/doar/5',
  },
  {
    id: '6',
    title: 'Prótese para jovem após amputação',
    requesterName: 'Sophie Durand',
    description:
      'Lucas, 22 anos, teve o pé direito amputado após complicações de um acidente de moto. A prótese indicada pelos médicos para permitir que ele volte a caminhar normalmente custa €8.000 e o seguro cobre apenas €2.000. Lucas era estudante de educação física e sua meta é retomar os estudos e futuramente trabalhar como personal trainer. Sophie, sua mãe, está pedindo ajuda após esgotar todas as opções de financiamento público.',
    excerpt: 'Lucas, 22 anos, precisa de prótese de pé após amputação para voltar a caminhar e retomar seus estudos.',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800' },
    ],
    city: 'Paris',
    country: 'França',
    createdAt: '2026-04-18',
    goalAmount: 8000,
    raisedAmount: 5200,
    certified: true,
    contact: 'sophie.durand@email.com',
    donationUrl: 'https://exemplo.com/doar/6',
  },
]
