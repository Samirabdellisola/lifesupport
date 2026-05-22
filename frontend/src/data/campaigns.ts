export interface CampaignMedia {
  type: 'image' | 'video'
  url: string
}

export type CampaignHelpType = 'Financeira' | 'Alimentos' | 'Roupas' | 'Serviços' | 'Outro'
export type CampaignStatus = 'Aberto' | 'Em andamento' | 'Concluído'

export interface CampaignUpdate {
  id: string
  message: string
  createdAt: string
}

export interface Campaign {
  id: string
  title: string
  requesterName: string
  description: string
  excerpt: string
  helpType: CampaignHelpType
  status: CampaignStatus
  coverImage: string
  media: CampaignMedia[]
  city: string
  state: string
  country: string
  createdAt: string
  goalAmount: number
  raisedAmount: number
  certified: boolean
  contactEmail: string
  contactPhone: string
  donationUrl: string
  externalReferences: string[]
  updates: CampaignUpdate[]
  creatorEmail?: string
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Tratamento para Ana após acidente grave',
    requesterName: 'Carlos Souza',
    description:
      'Ana, 34 anos, sofreu um grave acidente de trânsito em março de 2026 e necessita de cirurgia reconstrutiva e meses de fisioterapia. A família não tem condições de arcar com todos os custos do tratamento. Qualquer ajuda será fundamental para a recuperação dela e para que ela possa voltar a cuidar dos seus três filhos pequenos. Os recursos serão usados exclusivamente para despesas médicas, transporte às consultas e medicamentos prescritos.',
    excerpt: 'Ana precisa de cirurgia reconstrutiva após acidente de trânsito. Ajude a família a custear o tratamento.',
    helpType: 'Financeira',
    status: 'Em andamento',
    coverImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800' },
    ],
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    createdAt: '2026-03-15',
    goalAmount: 15000,
    raisedAmount: 9300,
    certified: true,
    contactEmail: 'carlos.souza@email.com',
    contactPhone: '+55 (11) 90000-1001',
    donationUrl: 'https://exemplo.com/doar/1',
    externalReferences: ['Laudo médico disponível mediante solicitação'],
    updates: [
      { id: '1-update-1', message: 'Primeira etapa do tratamento agendada para junho.', createdAt: '2026-04-12' },
    ],
  },
  {
    id: '2',
    title: 'Reconstrução da casa após enchente',
    requesterName: 'Maria Oliveira',
    description:
      'Em fevereiro de 2026, uma enchente devastou o bairro onde a família Oliveira morava há 20 anos. A casa foi completamente destruída e a família está abrigada na casa de parentes. Precisamos de ajuda para adquirir material de construção básico e pagar a mão de obra para reconstruir pelo menos os dois cômodos principais. Maria tem dois filhos de 8 e 12 anos e está desempregada desde que perdeu seu pequeno negócio na mesma enchente.',
    excerpt: 'Família perdeu tudo na enchente de fevereiro e precisa reconstruir sua casa urgentemente.',
    helpType: 'Financeira',
    status: 'Concluído',
    coverImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
    ],
    city: 'Porto Alegre',
    state: 'RS',
    country: 'Brasil',
    createdAt: '2026-02-28',
    goalAmount: 30000,
    raisedAmount: 30000,
    certified: true,
    contactEmail: 'maria.oliveira@email.com',
    contactPhone: '+55 (51) 90000-1002',
    donationUrl: 'https://exemplo.com/doar/2',
    externalReferences: ['Fotos dos danos anexadas à campanha'],
    updates: [
      { id: '2-update-1', message: 'Meta alcançada. A compra dos materiais foi iniciada.', createdAt: '2026-03-18' },
    ],
  },
  {
    id: '3',
    title: 'Medicamentos para criança com doença rara',
    requesterName: 'João Pereira',
    description:
      'Pedro, 7 anos, foi diagnosticado com uma doença metabólica rara que exige medicamentos de alto custo não cobertos pelo plano de saúde. O tratamento mensal ultrapassa R$ 4.000 e a família não consegue arcar com essa despesa. João, o pai, trabalha como motorista de aplicativo e a mãe cuida de Pedro em tempo integral devido à fragilidade da criança. O tratamento é essencial para evitar a progressão da doença.',
    excerpt: 'Pedro, 7 anos, precisa de medicamentos de alto custo para doença metabólica rara não coberta pelo plano.',
    helpType: 'Financeira',
    status: 'Aberto',
    coverImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800' },
    ],
    city: 'Belo Horizonte',
    state: 'MG',
    country: 'Brasil',
    createdAt: '2026-04-02',
    goalAmount: 4800,
    raisedAmount: 640,
    certified: false,
    contactEmail: 'joao.pereira@email.com',
    contactPhone: '+55 (31) 90000-1003',
    donationUrl: 'https://exemplo.com/doar/3',
    externalReferences: ['Receita médica atualizada'],
    updates: [],
  },
  {
    id: '4',
    title: 'Cadeira de rodas elétrica para veterano',
    requesterName: 'Lucia Fernández',
    description:
      'Roberto, 58 anos, veterano que perdeu a mobilidade das pernas em serviço, necessita de uma cadeira de rodas elétrica para recuperar sua independência. A cadeira manual atual não é adequada para sua condição e causa dores severas. Uma cadeira elétrica permitirá que ele se locomova sozinho, mantenha atividades sociais e preserve sua dignidade. Lucia, sua esposa, está coordenando a campanha após meses sem resposta das autoridades competentes.',
    excerpt: 'Veterano sem mobilidade nas pernas precisa de cadeira de rodas elétrica para recuperar independência.',
    helpType: 'Financeira',
    status: 'Em andamento',
    coverImage: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800' },
    ],
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    country: 'Argentina',
    createdAt: '2026-01-20',
    goalAmount: 12000,
    raisedAmount: 7450,
    certified: true,
    contactEmail: 'lucia.fernandez@email.com',
    contactPhone: '+54 11 9000-1004',
    donationUrl: 'https://exemplo.com/doar/4',
    externalReferences: ['Orçamento da cadeira elétrica'],
    updates: [],
  },
  {
    id: '5',
    title: 'Diálise para idosa sem cobertura médica',
    requesterName: 'Ahmed Hassan',
    description:
      'Fatima, 72 anos, necessita de sessões de diálise três vezes por semana devido a insuficiência renal crônica. Por ser imigrante, não possui cobertura de saúde pública e os custos das sessões são proibitivos. Ahmed, seu filho, trabalha em dois empregos para sustentar a família mas não consegue cobrir todas as despesas médicas. Sem diálise regular, a vida de Fatima está em risco. Cada sessão custa aproximadamente €120.',
    excerpt: 'Idosa imigrante de 72 anos precisa de ajuda para custear sessões de diálise vitais.',
    helpType: 'Financeira',
    status: 'Aberto',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800' },
    ],
    city: 'Lisboa',
    state: 'Lisboa',
    country: 'Portugal',
    createdAt: '2026-03-30',
    goalAmount: 8640,
    raisedAmount: 1200,
    certified: false,
    contactEmail: 'ahmed.hassan@email.com',
    contactPhone: '+351 910 000 105',
    donationUrl: 'https://exemplo.com/doar/5',
    externalReferences: ['Comprovante de orçamento das sessões'],
    updates: [],
  },
  {
    id: '6',
    title: 'Prótese para jovem após amputação',
    requesterName: 'Sophie Durand',
    description:
      'Lucas, 22 anos, teve o pé direito amputado após complicações de um acidente de moto. A prótese indicada pelos médicos para permitir que ele volte a caminhar normalmente custa €8.000 e o seguro cobre apenas €2.000. Lucas era estudante de educação física e sua meta é retomar os estudos e futuramente trabalhar como personal trainer. Sophie, sua mãe, está pedindo ajuda após esgotar todas as opções de financiamento público.',
    excerpt: 'Lucas, 22 anos, precisa de prótese de pé após amputação para voltar a caminhar e retomar seus estudos.',
    helpType: 'Financeira',
    status: 'Em andamento',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800' },
    ],
    city: 'Paris',
    state: 'Île-de-France',
    country: 'França',
    createdAt: '2026-04-18',
    goalAmount: 8000,
    raisedAmount: 5200,
    certified: true,
    contactEmail: 'sophie.durand@email.com',
    contactPhone: '+33 6 00 00 10 06',
    donationUrl: 'https://exemplo.com/doar/6',
    externalReferences: ['Orçamento da prótese recomendado pelo médico'],
    updates: [],
  },
]
