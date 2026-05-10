import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft, MapPin, Calendar, User } from 'lucide-react'
import { campaigns } from '../../data/campaigns'
import { AppPaths } from '../../routes/paths/AppPaths'
import MediaCarousel from './components/MediaCarousel'
import CampaignActions from './components/CampaignActions'
import CertificationBadge from './components/CertificationBadge'
import FundingProgress from './components/FundingProgress'

const ScreenCampaign = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const campaign = campaigns.find((c) => c.id === id)

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

  return (
    <Screen>
      <BackButton onClick={handleBack}>
        <ArrowLeft size={16} /> Voltar
      </BackButton>

      <FundingProgress goalAmount={campaign.goalAmount} raisedAmount={campaign.raisedAmount} />

      <Header>
        <h1>{campaign.title}</h1>
        <div className="meta">
          <span><User size={14} /> {campaign.requesterName}</span>
          <span><MapPin size={14} /> {campaign.city}, {campaign.country}</span>
          <span><Calendar size={14} /> {formattedDate}</span>
        </div>
        <CampaignActions donationUrl={campaign.donationUrl} contact={campaign.contact} />
      </Header>

      <MediaCarousel coverImage={campaign.coverImage} media={campaign.media} />

      <Description>
        <h2>Sobre a campanha</h2>
        <p>{campaign.description}</p>
      </Description>

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
