import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MapPin, Calendar, User } from 'lucide-react'
import type { Campaign } from '../../../data/campaigns'
import { AppPaths } from '../../../routes/paths/AppPaths'

interface Props {
  campaign: Campaign
}

const CampaignCard = ({ campaign }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(AppPaths.campaign.goTo(campaign.id))
  }

  const formattedDate = new Date(campaign.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Card onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
      <img className="cover" src={campaign.coverImage} alt={campaign.title} loading="lazy" />
      <div className="body">
        <h2 className="title">{campaign.title}</h2>
        <div className="meta">
          <span><User size={13} /> {campaign.requesterName}</span>
          <span><MapPin size={13} /> {campaign.city}, {campaign.state}</span>
          <span><Calendar size={13} /> {formattedDate}</span>
        </div>
        <div className="tags">
          <span>{campaign.helpType}</span>
          <span>{campaign.status}</span>
        </div>
        <p className="excerpt">{campaign.excerpt}</p>
      </div>
    </Card>
  )
}

export default CampaignCard

const Card = styled.article`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  .cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .body {
    padding: 16px;
  }

  .title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 8px;
    line-height: 1.3;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 10px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;

    span {
      background: #f0f4f8;
      border-radius: 999px;
      color: #1a1a2e;
      font-size: 0.74rem;
      font-weight: 700;
      padding: 4px 9px;
    }
  }

  .excerpt {
    font-size: 0.88rem;
    color: #444;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
