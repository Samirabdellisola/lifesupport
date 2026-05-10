import { useState } from 'react'
import styled from 'styled-components'
import GuestView from './components/GuestView'
import ProfileSettings from './components/ProfileSettings'

export interface UserProfile {
  name: string
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

const EMPTY_PROFILE: UserProfile = {
  name: '',
  photo: null,
  address: { street: '', number: '', city: '', state: '', country: '', zip: '' },
  contacts: { phone: '', whatsapp: '', website: '' },
  participatesInRanking: false,
  isAuthenticated: false,
}

const ScreenUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState<UserProfile>(EMPTY_PROFILE)

  const handleLogin = (name: string) => {
    setProfile((prev) => ({ ...prev, name }))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setProfile(EMPTY_PROFILE)
  }

  return (
    <Screen>
      {isLoggedIn ? (
        <ProfileSettings profile={profile} onChange={setProfile} onLogout={handleLogout} />
      ) : (
        <GuestView onLogin={handleLogin} />
      )}
    </Screen>
  )
}

export default ScreenUser

const Screen = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px 64px;
`
