import { campaigns, type Campaign } from './campaigns'

export type CampaignInput = Omit<Campaign, 'id' | 'createdAt' | 'raisedAmount' | 'certified' | 'donationUrl'>

const CAMPAIGNS_STORAGE_KEY = 'lifesupport:created-campaigns'

const canUseStorage = () => typeof window !== 'undefined' && Boolean(window.localStorage)

const normalizeCampaign = (campaign: Campaign): Campaign => ({
  ...campaign,
  helpType: campaign.helpType || 'Financeira',
  status: campaign.status || 'Aberto',
  state: campaign.state || '',
  externalReferences: campaign.externalReferences || [],
  updates: campaign.updates || [],
})

export const loadCreatedCampaigns = (): Campaign[] => {
  if (!canUseStorage()) return []

  const stored = window.localStorage.getItem(CAMPAIGNS_STORAGE_KEY)
  if (!stored) return []

  try {
    return (JSON.parse(stored) as Campaign[]).map(normalizeCampaign)
  } catch {
    return []
  }
}

export const loadCampaigns = (): Campaign[] => [
  ...loadCreatedCampaigns(),
  ...campaigns.map(normalizeCampaign),
]

export const saveCreatedCampaigns = (createdCampaigns: Campaign[]) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(CAMPAIGNS_STORAGE_KEY, JSON.stringify(createdCampaigns))
}

export const createCampaign = (input: CampaignInput): Campaign => {
  const newCampaign: Campaign = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString().slice(0, 10),
    raisedAmount: 0,
    certified: false,
    donationUrl: '#',
  }

  saveCreatedCampaigns([newCampaign, ...loadCreatedCampaigns()])
  return newCampaign
}

export const updateCreatedCampaign = (campaignId: string, updater: (campaign: Campaign) => Campaign): Campaign | null => {
  const createdCampaigns = loadCreatedCampaigns()
  const nextCampaigns = createdCampaigns.map((campaign) =>
    campaign.id === campaignId ? updater(campaign) : campaign
  )
  const updatedCampaign = nextCampaigns.find((campaign) => campaign.id === campaignId) || null

  saveCreatedCampaigns(nextCampaigns)
  return updatedCampaign
}
