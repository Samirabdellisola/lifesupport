import { useState } from 'react'
import styled from 'styled-components'
import { Heart, Mail, MessageCircle, Phone, X } from 'lucide-react'
import { loadAuthSession } from '../../../data/authStorage'
import { createSupport, type SupportType } from '../../../data/supportStorage'

interface Props {
  campaignId: string
  campaignTitle: string
  contactEmail: string
  contactPhone: string
  onSupportCreated: () => void
}

const CampaignActions = ({
  campaignId,
  campaignTitle,
  contactEmail,
  contactPhone,
  onSupportCreated,
}: Props) => {
  const [showContact, setShowContact] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [supportType, setSupportType] = useState<SupportType>('Financeiro')
  const [estimatedValue, setEstimatedValue] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  const session = loadAuthSession()

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!session.isLoggedIn) {
      setFeedback('Entre na sua conta para registrar um apoio.')
      return
    }

    const support = createSupport({
      campaignId,
      campaignTitle,
      supporterName: session.profile.name,
      supporterEmail: session.profile.email,
      supportType,
      estimatedValue: Number(estimatedValue || 0),
      message,
    })

    setFeedback(`Apoio registrado. Você ganhou ${support.points} pontos.`)
    setEstimatedValue('')
    setMessage('')
    onSupportCreated()
  }

  return (
    <>
      <Actions>
        <button className="btn donate" type="button" onClick={() => setShowSupport(true)}>
          <Heart size={18} />
          Registrar apoio
        </button>
        <button className="btn contact" type="button" onClick={() => setShowContact(true)}>
          <MessageCircle size={18} />
          Entrar em contato
        </button>
      </Actions>

      {showContact && (
        <ModalBackdrop onClick={() => setShowContact(false)}>
          <Modal role="dialog" aria-modal="true" aria-label="Contato da campanha" onClick={(e) => e.stopPropagation()}>
            <button className="close" type="button" aria-label="Fechar" onClick={() => setShowContact(false)}>
              <X size={18} />
            </button>
            <h2>Contato da campanha</h2>
            <p>Use os dados informados pelo responsável para conversar sobre esta campanha.</p>
            <div className="contact-line">
              <Mail size={18} />
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div className="contact-line">
              <Phone size={18} />
              <a href={`tel:${contactPhone}`}>{contactPhone}</a>
            </div>
          </Modal>
        </ModalBackdrop>
      )}

      {showSupport && (
        <ModalBackdrop onClick={() => setShowSupport(false)}>
          <Modal role="dialog" aria-modal="true" aria-label="Registrar apoio" onClick={(e) => e.stopPropagation()}>
            <button className="close" type="button" aria-label="Fechar" onClick={() => setShowSupport(false)}>
              <X size={18} />
            </button>
            <h2>Registrar apoio</h2>
            <p>Este registro é interno e mockado no front, sem integração com pagamento real.</p>
            <form className="support-form" onSubmit={handleSupportSubmit}>
              <label htmlFor="support-type">Tipo de apoio</label>
              <select
                id="support-type"
                value={supportType}
                onChange={(e) => setSupportType(e.target.value as SupportType)}
              >
                <option value="Financeiro">Financeiro</option>
                <option value="Material">Material</option>
                <option value="Serviço">Serviço</option>
                <option value="Outro">Outro</option>
              </select>

              <label htmlFor="support-value">Valor estimado</label>
              <input
                id="support-value"
                type="number"
                min="0"
                step="1"
                value={estimatedValue}
                onChange={(e) => setEstimatedValue(e.target.value)}
                placeholder="Ex.: 100"
              />

              <label htmlFor="support-message">Mensagem opcional</label>
              <textarea
                id="support-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Deixe uma mensagem para o solicitante."
                rows={3}
              />

              {feedback && <p className="feedback">{feedback}</p>}
              <button className="submit" type="submit">Salvar apoio</button>
            </form>
          </Modal>
        </ModalBackdrop>
      )}
    </>
  )
}

export default CampaignActions

const Actions = styled.div`
  display: flex;
  gap: 12px;

  .btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: opacity 0.15s, transform 0.15s;
    text-decoration: none;

    &:hover {
      opacity: 0.88;
      transform: translateY(-1px);
    }

    &.donate {
      background: #5bafd6;
      color: #fff;
    }

    &.contact {
      background: #f0f4f8;
      color: #1a1a2e;
      border: 1px solid #dde1e7;
    }
  }
`

const ModalBackdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 16px;
  position: fixed;
  z-index: 200;
`

const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  padding: 28px 24px 24px;
  position: relative;
  width: 100%;

  .close {
    align-items: center;
    background: #f0f4f8;
    border: none;
    border-radius: 999px;
    color: #555;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    position: absolute;
    right: 14px;
    top: 14px;
    width: 32px;
  }

  h2 {
    color: #1a1a2e;
    font-size: 1.2rem;
    margin: 0 0 8px;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0 0 18px;
  }

  .contact-line {
    align-items: center;
    background: #f9fafb;
    border: 1px solid #dde1e7;
    border-radius: 10px;
    color: #5bafd6;
    display: flex;
    gap: 10px;
    margin-top: 10px;
    padding: 12px;

    a {
      color: #1a1a2e;
      font-size: 0.92rem;
      font-weight: 600;
      text-decoration: none;
    }
  }

  .support-form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      color: #555;
      font-size: 0.8rem;
      font-weight: 700;
    }

    input,
    select,
    textarea {
      border: 1px solid #dde1e7;
      border-radius: 8px;
      font: inherit;
      font-size: 0.9rem;
      outline: none;
      padding: 10px 12px;
      resize: vertical;

      &:focus {
        border-color: #5bafd6;
      }
    }

    .feedback {
      background: #f0fdf4;
      border-radius: 8px;
      color: #15803d;
      font-size: 0.82rem;
      margin: 4px 0 0;
      padding: 8px 10px;
    }

    .submit {
      background: #5bafd6;
      border: none;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 700;
      margin-top: 6px;
      padding: 11px;
    }
  }
`
