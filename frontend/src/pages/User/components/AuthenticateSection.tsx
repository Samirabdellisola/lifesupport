import styled from 'styled-components'
import { ShieldCheck, Lock } from 'lucide-react'

interface Props {
  isAuthenticated: boolean
}

const AuthenticateSection = ({ isAuthenticated }: Props) => {
  return (
    <Section $authenticated={isAuthenticated}>
      <div className="info">
        <div className="icon">
          {isAuthenticated ? <ShieldCheck size={22} /> : <Lock size={22} />}
        </div>
        <div className="text">
          <p className="label">
            {isAuthenticated ? 'Usuário autenticado' : 'Autenticar usuário'}
          </p>
          <p className="description">
            {isAuthenticated
              ? 'Sua identidade foi verificada. O nome não pode mais ser alterado.'
              : 'Envie seus documentos para verificar sua identidade e ganhar mais credibilidade nas campanhas.'}
          </p>
        </div>
      </div>
      {!isAuthenticated && (
        <button className="auth-btn" disabled>
          Solicitar autenticação
        </button>
      )}
    </Section>
  )
}

export default AuthenticateSection

const Section = styled.div<{ $authenticated: boolean }>`
  padding: 16px;
  border-radius: 12px;
  border: 1.5px solid ${({ $authenticated }) => ($authenticated ? '#22c55e' : '#dde1e7')};
  background: ${({ $authenticated }) => ($authenticated ? '#f0fdf4' : '#fff')};

  .info {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    .icon {
      color: ${({ $authenticated }) => ($authenticated ? '#16a34a' : '#5bafd6')};
      flex-shrink: 0;
      margin-top: 2px;
    }

    .text {
      .label {
        font-size: 0.92rem;
        font-weight: 600;
        color: #1a1a2e;
        margin: 0 0 4px;
      }

      .description {
        font-size: 0.8rem;
        color: #666;
        margin: 0;
        line-height: 1.5;
      }
    }
  }

  .auth-btn {
    margin-top: 14px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #dde1e7;
    background: #f9fafb;
    color: #aaa;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: not-allowed;
  }
`
