export type SupportType = 'Financeiro' | 'Material' | 'Serviço' | 'Outro'

export interface SupportRecord {
  id: string
  campaignId: string
  campaignTitle: string
  supporterName: string
  supporterEmail: string
  supportType: SupportType
  estimatedValue: number
  message: string
  points: number
  createdAt: string
}

export interface SupportInput {
  campaignId: string
  campaignTitle: string
  supporterName: string
  supporterEmail: string
  supportType: SupportType
  estimatedValue: number
  message: string
}

const SUPPORTS_STORAGE_KEY = 'lifesupport:supports'

const canUseStorage = () => typeof window !== 'undefined' && Boolean(window.localStorage)

export const calculateSupportPoints = (supportType: SupportType, estimatedValue: number) => {
  if (supportType === 'Financeiro') return Math.max(10, Math.round(estimatedValue / 10))
  if (estimatedValue > 0) return Math.max(10, Math.round(estimatedValue / 20))
  return 25
}

export const loadSupports = (): SupportRecord[] => {
  if (!canUseStorage()) return []

  const stored = window.localStorage.getItem(SUPPORTS_STORAGE_KEY)
  if (!stored) return []

  try {
    return JSON.parse(stored) as SupportRecord[]
  } catch {
    return []
  }
}

export const saveSupports = (supports: SupportRecord[]) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(SUPPORTS_STORAGE_KEY, JSON.stringify(supports))
}

export const createSupport = (input: SupportInput): SupportRecord => {
  const support: SupportRecord = {
    ...input,
    id: crypto.randomUUID(),
    points: calculateSupportPoints(input.supportType, input.estimatedValue),
    createdAt: new Date().toISOString().slice(0, 10),
  }

  saveSupports([support, ...loadSupports()])
  return support
}

export const loadSupportsByCampaign = (campaignId: string) =>
  loadSupports().filter((support) => support.campaignId === campaignId)

export const loadSupportsByUser = (supporterEmail: string) =>
  loadSupports().filter((support) => support.supporterEmail === supporterEmail)

export const sumFinancialSupports = (campaignId: string) =>
  loadSupportsByCampaign(campaignId)
    .filter((support) => support.supportType === 'Financeiro')
    .reduce((total, support) => total + support.estimatedValue, 0)

export const sumUserPoints = (supporterEmail: string) =>
  loadSupportsByUser(supporterEmail).reduce((total, support) => total + support.points, 0)
