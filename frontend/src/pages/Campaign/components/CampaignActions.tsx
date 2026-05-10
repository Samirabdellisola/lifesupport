import styled from 'styled-components'
import { Heart, MessageCircle } from 'lucide-react'

interface Props {
  donationUrl: string
  contact: string
}

const CampaignActions = ({ donationUrl, contact }: Props) => {
  return (
    <Actions>
      <a className="btn donate" href={donationUrl} target="_blank" rel="noopener noreferrer">
        <Heart size={18} />
        Doar
      </a>
      <a className="btn contact" href={`mailto:${contact}`}>
        <MessageCircle size={18} />
        Entrar em contato
      </a>
    </Actions>
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
