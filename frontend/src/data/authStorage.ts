export interface UserProfile {
  name: string
  email: string
  photo: string | null
  address: {
    street: string
    number: string
    city: string
    state: string
    country: string
    zip: string
  }
  contacts: {
    phone: string
    whatsapp: string
    website: string
  }
  participatesInRanking: boolean
  isAuthenticated: boolean
}

export interface AuthSession {
  isLoggedIn: boolean
  profile: UserProfile
}

const AUTH_STORAGE_KEY = 'lifesupport:auth-session'

export const EMPTY_PROFILE: UserProfile = {
  name: '',
  email: '',
  photo: null,
  address: { street: '', number: '', city: '', state: '', country: '', zip: '' },
  contacts: { phone: '', whatsapp: '', website: '' },
  participatesInRanking: false,
  isAuthenticated: false,
}

export const EMPTY_AUTH_SESSION: AuthSession = {
  isLoggedIn: false,
  profile: EMPTY_PROFILE,
}

const canUseStorage = () => typeof window !== 'undefined' && Boolean(window.localStorage)

export const loadAuthSession = (): AuthSession => {
  if (!canUseStorage()) return EMPTY_AUTH_SESSION

  const stored = window.localStorage.getItem(AUTH_STORAGE_KEY)
  if (!stored) return EMPTY_AUTH_SESSION

  try {
    const parsed = JSON.parse(stored) as Partial<AuthSession>
    return {
      isLoggedIn: Boolean(parsed.isLoggedIn),
      profile: {
        ...EMPTY_PROFILE,
        ...parsed.profile,
        address: { ...EMPTY_PROFILE.address, ...parsed.profile?.address },
        contacts: { ...EMPTY_PROFILE.contacts, ...parsed.profile?.contacts },
      },
    }
  } catch {
    return EMPTY_AUTH_SESSION
  }
}

export const saveAuthSession = (session: AuthSession) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
}

export const clearAuthSession = () => {
  if (!canUseStorage()) return
  window.localStorage.removeItem(AUTH_STORAGE_KEY)
}
