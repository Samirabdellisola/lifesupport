import { useState } from 'react'
import styled from 'styled-components'
import { ShieldCheck, Lock, Upload } from 'lucide-react'

interface Props {
  isAuthenticated: boolean
}

const AuthenticateSection = ({ isAuthenticated }: Props) => {
  const [showDocuments, setShowDocuments] = useState(false)
  const [frontFileName, setFrontFileName] = useState('')
  const [backFileName, setBackFileName] = useState('')

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
        <>
          <button className="auth-btn" type="button" onClick={() => setShowDocuments((value) => !value)}>
            Solicitar autenticação
          </button>
          {showDocuments && (
            <div className="document-fields">
              <p className="document-title">Envie a imagem do documento de identificação</p>
              <label className="document-input" htmlFor="document-front">
                <Upload size={16} />
                <span>{frontFileName || 'Selecionar frente do documento'}</span>
              </label>
              <input
                id="document-front"
                type="file"
                accept="image/*"
                onChange={(e) => setFrontFileName(e.target.files?.[0]?.name || '')}
              />
              <label className="document-input" htmlFor="document-back">
                <Upload size={16} />
                <span>{backFileName || 'Selecionar verso do documento'}</span>
              </label>
              <input
                id="document-back"
                type="file"
                accept="image/*"
                onChange={(e) => setBackFileName(e.target.files?.[0]?.name || '')}
              />
              <p className="document-note">Os arquivos ainda não serão enviados nem processados.</p>
            </div>
          )}
        </>
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
    border: none;
    background: #5bafd6;
    color: #fff;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.88;
    }
  }

  .document-fields {
    background: #f9fafb;
    border: 1px solid #dde1e7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 12px;
    padding: 12px;

    input {
      display: none;
    }
  }

  .document-title {
    color: #555;
    font-size: 0.82rem;
    font-weight: 700;
    margin: 0;
  }

  .document-input {
    align-items: center;
    background: #fff;
    border: 1px dashed #c9d3df;
    border-radius: 8px;
    color: #1a1a2e;
    cursor: pointer;
    display: flex;
    font-size: 0.84rem;
    font-weight: 600;
    gap: 8px;
    padding: 10px;
  }

  .document-note {
    color: #888;
    font-size: 0.76rem;
    margin: 0;
  }
`
