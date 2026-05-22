import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  clearAuthSession,
  EMPTY_PROFILE,
  loadAuthSession,
  saveAuthSession,
  type AuthSession,
} from '../../data/authStorage'
import GuestView from './components/GuestView'
import ProfileSettings from './components/ProfileSettings'

const ScreenUser = () => {
  const [session, setSession] = useState<AuthSession>(() => loadAuthSession())
  const { isLoggedIn, profile } = session

  useEffect(() => {
    if (isLoggedIn) saveAuthSession(session)
  }, [isLoggedIn, session])

  const handleLogin = (name: string, email: string) => {
    setSession({
      isLoggedIn: true,
      profile: { ...EMPTY_PROFILE, name: name || email, email },
    })
  }

  const handleLogout = () => {
    clearAuthSession()
    setSession({ isLoggedIn: false, profile: EMPTY_PROFILE })
  }

  return (
    <Screen>
      {isLoggedIn ? (
        <ProfileSettings
          profile={profile}
          onChange={(nextProfile) => setSession({ isLoggedIn: true, profile: nextProfile })}
          onLogout={handleLogout}
        />
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
