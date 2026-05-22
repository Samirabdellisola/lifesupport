import { useState } from 'react'
import { useBoolean } from 'react-hanger'
import styled from 'styled-components'

interface Props {
  onLogin: (name: string, email: string) => void
}

const GuestView = ({ onLogin }: Props) => {
  const showingRegister = useBoolean(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(name, email)
  }

  return (
    <Container>
      <div className="logo">LifeSupport</div>
      <p className="subtitle">
        {showingRegister.value ? 'Crie sua conta' : 'Acesse sua conta'}
      </p>

      <div className="tabs">
        <button
          className={!showingRegister.value ? 'active' : ''}
          onClick={showingRegister.setFalse}
        >
          Entrar
        </button>
        <button
          className={showingRegister.value ? 'active' : ''}
          onClick={showingRegister.setTrue}
        >
          Cadastrar
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {showingRegister.value && (
          <div className="field">
            <label htmlFor="guest-name">Nome completo</label>
            <input
              id="guest-name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="field">
          <label htmlFor="guest-email">E-mail</label>
          <input
            id="guest-email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="guest-password">Senha</label>
          <input
            id="guest-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit">
          {showingRegister.value ? 'Criar conta' : 'Entrar'}
        </button>
      </form>
    </Container>
  )
}

export default GuestView

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  .logo {
    font-size: 1.6rem;
    font-weight: 700;
    color: #5bafd6;
    margin-bottom: 6px;
  }

  .subtitle {
    color: #666;
    font-size: 0.95rem;
    margin: 0 0 28px;
  }

  .tabs {
    display: flex;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #dde1e7;
    margin-bottom: 28px;

    button {
      flex: 1;
      padding: 10px;
      border: none;
      background: #f9fafb;
      color: #666;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;

      &.active {
        background: #5bafd6;
        color: #fff;
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
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

      &:focus {
        border-color: #5bafd6;
      }
    }
  }

  .submit {
    margin-top: 4px;
    padding: 12px;
    background: #5bafd6;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.88;
    }
  }
`
