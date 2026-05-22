import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft } from 'lucide-react'
import { loadAuthSession } from '../../data/authStorage'
import { createCampaign } from '../../data/campaignStorage'
import type { CampaignHelpType } from '../../data/campaigns'
import { AppPaths } from '../../routes/paths/AppPaths'

const ScreenCampaignCreate = () => {
  const navigate = useNavigate()
  const session = loadAuthSession()
  const [title, setTitle] = useState('')
  const [requesterName, setRequesterName] = useState(session.profile.name)
  const [description, setDescription] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [helpType, setHelpType] = useState<CampaignHelpType>('Financeira')
  const [coverImage, setCoverImage] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('Brasil')
  const [goalAmount, setGoalAmount] = useState('')
  const [externalReferences, setExternalReferences] = useState('')
  const [contactEmail, setContactEmail] = useState(session.profile.email)
  const [contactPhone, setContactPhone] = useState(
    session.profile.contacts.whatsapp || session.profile.contacts.phone
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newCampaign = createCampaign({
      title,
      requesterName,
      description,
      excerpt,
      helpType,
      status: 'Aberto',
      coverImage,
      media: [{ type: 'image', url: coverImage }],
      city,
      state,
      country,
      goalAmount: Number(goalAmount),
      contactEmail,
      contactPhone,
      externalReferences: externalReferences
        .split('\n')
        .map((reference) => reference.trim())
        .filter(Boolean),
      updates: [],
      creatorEmail: session.profile.email,
    })

    navigate(AppPaths.campaign.goTo(newCampaign.id))
  }

  if (!session.isLoggedIn) {
    return (
      <Screen>
        <BackButton onClick={() => navigate(AppPaths.home)}>
          <ArrowLeft size={16} /> Voltar
        </BackButton>
        <Card>
          <h1>Entre para criar uma campanha</h1>
          <p>Você precisa estar logado para registrar uma nova campanha.</p>
          <button onClick={() => navigate(AppPaths.user)}>Ir para login</button>
        </Card>
      </Screen>
    )
  }

  return (
    <Screen>
      <BackButton onClick={() => navigate(AppPaths.home)}>
        <ArrowLeft size={16} /> Voltar
      </BackButton>

      <FormCard onSubmit={handleSubmit}>
        <div className="header">
          <h1>Criar campanha</h1>
          <p>Preencha as informações principais para publicar seu pedido de ajuda.</p>
        </div>

        <div className="field">
          <label htmlFor="campaign-title">Título</label>
          <input
            id="campaign-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex.: Tratamento médico urgente"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-requester">Nome do responsável</label>
          <input
            id="campaign-requester"
            value={requesterName}
            onChange={(e) => setRequesterName(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-excerpt">Resumo</label>
          <textarea
            id="campaign-excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Explique em poucas palavras o objetivo da campanha."
            rows={3}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-help-type">Tipo de ajuda necessária</label>
          <select
            id="campaign-help-type"
            value={helpType}
            onChange={(e) => setHelpType(e.target.value as CampaignHelpType)}
            required
          >
            <option value="Financeira">Financeira</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Roupas">Roupas</option>
            <option value="Serviços">Serviços</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="campaign-description">Descrição completa</label>
          <textarea
            id="campaign-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Conte a história, os custos e como a ajuda será usada."
            rows={7}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-cover">URL da imagem de capa</label>
          <input
            id="campaign-cover"
            type="url"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://..."
            required
          />
        </div>

        <div className="grid">
          <div className="field">
            <label htmlFor="campaign-city">Cidade</label>
            <input
              id="campaign-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="campaign-state">Estado</label>
            <input
              id="campaign-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="campaign-country">País</label>
          <input
            id="campaign-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-references">Links ou referências externas</label>
          <textarea
            id="campaign-references"
            value={externalReferences}
            onChange={(e) => setExternalReferences(e.target.value)}
            placeholder="Informe um link ou referência por linha, se houver."
            rows={3}
          />
        </div>

        <div className="field">
          <label htmlFor="campaign-goal">Meta de arrecadação</label>
          <input
            id="campaign-goal"
            type="number"
            min="1"
            step="1"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            placeholder="15000"
            required
          />
        </div>

        <div className="grid">
          <div className="field">
            <label htmlFor="campaign-email">E-mail de contato</label>
            <input
              id="campaign-email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="campaign-phone">Telefone de contato</label>
            <input
              id="campaign-phone"
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="+55 (11) 90000-0000"
              required
            />
          </div>
        </div>

        <button className="submit" type="submit">Publicar campanha</button>
      </FormCard>
    </Screen>
  )
}

export default ScreenCampaignCreate

const Screen = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px 64px;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #5bafd6;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
  padding: 0;

  &:hover {
    opacity: 0.75;
  }
`

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 28px 24px;
  text-align: center;

  h1 {
    color: #1a1a2e;
    font-size: 1.35rem;
    margin: 0 0 8px;
  }

  p {
    color: #666;
    margin: 0 0 20px;
  }

  button {
    background: #5bafd6;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 12px 20px;
  }
`

const FormCard = styled.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px;

  .header {
    margin-bottom: 4px;

    h1 {
      color: #1a1a2e;
      font-size: 1.35rem;
      margin: 0 0 6px;
    }

    p {
      color: #666;
      font-size: 0.9rem;
      margin: 0;
    }
  }

  .grid {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      color: #555;
      font-size: 0.8rem;
      font-weight: 600;
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
      transition: border-color 0.15s;

      &:focus {
        border-color: #5bafd6;
      }
    }
  }

  .submit {
    background: #5bafd6;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 700;
    margin-top: 6px;
    padding: 12px;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.88;
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`
