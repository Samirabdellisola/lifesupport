import styled from 'styled-components'
import { LogOut } from 'lucide-react'
import type { UserProfile } from '../../../data/authStorage'
import ProfilePhotoSection from './ProfilePhotoSection'
import AddressSection from './AddressSection'
import ContactSection from './ContactSection'
import RankingSection from './RankingSection'
import AuthenticateSection from './AuthenticateSection'
import SupportHistorySection from './SupportHistorySection'

interface Props {
  profile: UserProfile
  onChange: (profile: UserProfile) => void
  onLogout: () => void
}

const ProfileSettings = ({ profile, onChange, onLogout }: Props) => {
  const handleField = <K extends keyof UserProfile>(key: K, value: UserProfile[K]) => {
    onChange({ ...profile, [key]: value })
  }

  return (
    <Container>
      <div className="header">
        <h1>Meu perfil</h1>
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={16} />
          Sair
        </button>
      </div>

      <ProfilePhotoSection
        photo={profile.photo}
        onChange={(photo) => handleField('photo', photo)}
      />

      <Divider />

      <div className="field">
        <label htmlFor="profile-name">Nome completo</label>
        <input
          id="profile-name"
          type="text"
          placeholder="Seu nome"
          value={profile.name}
          disabled={profile.isAuthenticated}
          onChange={(e) => handleField('name', e.target.value)}
        />
        {profile.isAuthenticated && (
          <span className="locked-hint">Nome bloqueado após autenticação</span>
        )}
      </div>

      <Divider />

      <AddressSection
        address={profile.address}
        onChange={(address) => handleField('address', address)}
      />

      <Divider />

      <ContactSection
        contacts={profile.contacts}
        onChange={(contacts) => handleField('contacts', contacts)}
      />

      <Divider />

      <RankingSection
        participates={profile.participatesInRanking}
        onChange={(value) => handleField('participatesInRanking', value)}
      />

      <Divider />

      <SupportHistorySection userEmail={profile.email} />

      <Divider />

      <AuthenticateSection isAuthenticated={profile.isAuthenticated} />
    </Container>
  )
}

export default ProfileSettings

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 24px 0;
`

const Container = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h1 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #1a1a2e;
      margin: 0;
    }

    .logout-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: 1px solid #dde1e7;
      border-radius: 8px;
      padding: 7px 12px;
      font-size: 0.82rem;
      font-weight: 600;
      color: #888;
      cursor: pointer;
      transition: color 0.15s, border-color 0.15s;

      &:hover {
        color: #e53e3e;
        border-color: #e53e3e;
      }
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 0.8rem;
      font-weight: 600;
      color: #555;
    }

    input {
      padding: 10px 12px;
      border: 1px solid #dde1e7;
      border-radius: 8px;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.15s;
      background: #fff;

      &:focus { border-color: #5bafd6; }

      &:disabled {
        background: #f5f5f5;
        color: #999;
        cursor: not-allowed;
      }
    }

    .locked-hint {
      font-size: 0.75rem;
      color: #aaa;
    }
  }
`
