import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft, MapPin, Calendar, User } from 'lucide-react'
import { loadAuthSession } from '../../data/authStorage'
import { loadCampaigns, updateCreatedCampaign } from '../../data/campaignStorage'
import { loadSupportsByCampaign, sumFinancialSupports } from '../../data/supportStorage'
import type { CampaignStatus } from '../../data/campaigns'
import { AppPaths } from '../../routes/paths/AppPaths'
import MediaCarousel from './components/MediaCarousel'
import CampaignActions from './components/CampaignActions'
import CertificationBadge from './components/CertificationBadge'
import FundingProgress from './components/FundingProgress'

const ScreenCampaign = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [refreshKey, setRefreshKey] = useState(0)
  const [updateMessage, setUpdateMessage] = useState('')

  const campaign = loadCampaigns().find((c) => c.id === id)
  const session = loadAuthSession()

  const handleBack = () => navigate(AppPaths.home)

  if (!campaign) {
    return (
      <NotFound>
        <p>Campanha não encontrada.</p>
        <BackButton onClick={handleBack}>
          <ArrowLeft size={16} /> Voltar ao início
        </BackButton>
      </NotFound>
    )
  }

  const formattedDate = new Date(campaign.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const campaignSupports = loadSupportsByCampaign(campaign.id)
  const displayedRaisedAmount = campaign.raisedAmount + sumFinancialSupports(campaign.id)
  const isCampaignOwner = Boolean(campaign.creatorEmail && campaign.creatorEmail === session.profile.email)

  const handleStatusChange = (status: CampaignStatus) => {
    const updated = updateCreatedCampaign(campaign.id, (current) => ({ ...current, status }))
    if (updated) setRefreshKey((value) => value + 1)
  }

  const handleAddUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    const message = updateMessage.trim()
    if (!message) return

    const updated = updateCreatedCampaign(campaign.id, (current) => ({
      ...current,
      updates: [
        { id: crypto.randomUUID(), message, createdAt: new Date().toISOString().slice(0, 10) },
        ...current.updates,
      ],
    }))

    if (updated) {
      setUpdateMessage('')
      setRefreshKey((value) => value + 1)
    }
  }

  return (
    <Screen data-refresh={refreshKey}>
      <BackButton onClick={handleBack}>
        <ArrowLeft size={16} /> Voltar
      </BackButton>

      <FundingProgress goalAmount={campaign.goalAmount} raisedAmount={displayedRaisedAmount} />

      <Header>
        <h1>{campaign.title}</h1>
        <div className="meta">
          <span><User size={14} /> {campaign.requesterName}</span>
          <span><MapPin size={14} /> {campaign.city}, {campaign.state}</span>
          <span><Calendar size={14} /> {formattedDate}</span>
        </div>
        <Tags>
          <span>{campaign.helpType}</span>
          <span>{campaign.status}</span>
        </Tags>
        <CampaignActions
          campaignId={campaign.id}
          campaignTitle={campaign.title}
          contactEmail={campaign.contactEmail}
          contactPhone={campaign.contactPhone}
          onSupportCreated={() => setRefreshKey((value) => value + 1)}
        />
      </Header>

      <MediaCarousel coverImage={campaign.coverImage} media={campaign.media} />

      <Description>
        <h2>Sobre a campanha</h2>
        <p>{campaign.description}</p>
      </Description>

      {campaign.externalReferences.length > 0 && (
        <InfoSection>
          <h2>Referências externas</h2>
          <ul>
            {campaign.externalReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </InfoSection>
      )}

      <InfoSection>
        <h2>Atualizações da campanha</h2>
        {campaign.updates.length === 0 ? (
          <p>Nenhuma atualização publicada ainda.</p>
        ) : (
          <ul>
            {campaign.updates.map((update) => (
              <li key={update.id}>
                <strong>{new Date(update.createdAt).toLocaleDateString('pt-BR')}:</strong> {update.message}
              </li>
            ))}
          </ul>
        )}
      </InfoSection>

      {isCampaignOwner && (
        <OwnerPanel>
          <h2>Gerenciar meu pedido</h2>
          <label htmlFor="campaign-status">Status do pedido</label>
          <select
            id="campaign-status"
            value={campaign.status}
            onChange={(e) => handleStatusChange(e.target.value as CampaignStatus)}
          >
            <option value="Aberto">Aberto</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>

          <form onSubmit={handleAddUpdate}>
            <label htmlFor="campaign-update">Nova atualização</label>
            <textarea
              id="campaign-update"
              value={updateMessage}
              onChange={(e) => setUpdateMessage(e.target.value)}
              placeholder="Compartilhe uma novidade sobre o andamento do pedido."
              rows={3}
            />
            <button type="submit">Publicar atualização</button>
          </form>

          <h3>Apoios recebidos</h3>
          {campaignSupports.length === 0 ? (
            <p>Nenhum apoio registrado para este pedido.</p>
          ) : (
            <ul>
              {campaignSupports.map((support) => (
                <li key={support.id}>
                  {support.supporterName} registrou apoio {support.supportType.toLowerCase()} de{' '}
                  {support.estimatedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  {support.message && `: ${support.message}`}
                </li>
              ))}
            </ul>
          )}
        </OwnerPanel>
      )}

      <Divider />

      <CertificationBadge certified={campaign.certified} />
    </Screen>
  )
}

export default ScreenCampaign

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
  cursor: pointer;
  color: #5bafd6;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0;
  margin-bottom: 24px;

  &:hover {
    opacity: 0.75;
  }
`

const Header = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 12px;
    line-height: 1.3;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 20px;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;

  span {
    background: #f0f4f8;
    border-radius: 999px;
    color: #1a1a2e;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 5px 10px;
  }
`

const Description = styled.div`
  margin: 28px 0;

  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 12px;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.75;
    margin: 0;
  }
`

const InfoSection = styled.div`
  margin: 28px 0;

  h2 {
    color: #1a1a2e;
    font-size: 1.1rem;
    margin: 0 0 12px;
  }

  p,
  li {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }
`

const OwnerPanel = styled.div`
  background: #fff;
  border: 1px solid #dde1e7;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 28px 0;
  padding: 18px;

  h2,
  h3 {
    color: #1a1a2e;
    margin: 0;
  }

  h2 {
    font-size: 1.1rem;
  }

  h3 {
    font-size: 0.95rem;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    color: #555;
    font-size: 0.8rem;
    font-weight: 700;
  }

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

  button {
    background: #5bafd6;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 11px;
  }

  p,
  li {
    color: #555;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 28px 0;
`

const NotFound = styled.div`
  text-align: center;
  padding: 80px 16px;
  color: #888;

  p { font-size: 1rem; }
`
