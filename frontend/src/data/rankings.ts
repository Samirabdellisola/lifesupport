export interface HelperRanking {
  id: string
  name: string
  city: string
  helpedCampaigns: number
  donatedAmount: number
  points: number
}

export const monthlyHelpers: HelperRanking[] = [
  {
    id: '1',
    name: 'Marina Costa',
    city: 'São Paulo',
    helpedCampaigns: 18,
    donatedAmount: 4200,
    points: 420,
  },
  {
    id: '2',
    name: 'Rafael Mendes',
    city: 'Belo Horizonte',
    helpedCampaigns: 15,
    donatedAmount: 3650,
    points: 365,
  },
  {
    id: '3',
    name: 'Bianca Rocha',
    city: 'Porto Alegre',
    helpedCampaigns: 13,
    donatedAmount: 2980,
    points: 298,
  },
  {
    id: '4',
    name: 'Diego Martins',
    city: 'Lisboa',
    helpedCampaigns: 11,
    donatedAmount: 2440,
    points: 244,
  },
  {
    id: '5',
    name: 'Camila Fernandes',
    city: 'Curitiba',
    helpedCampaigns: 9,
    donatedAmount: 1900,
    points: 190,
  },
]
