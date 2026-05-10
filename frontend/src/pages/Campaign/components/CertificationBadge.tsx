import styled from 'styled-components'
import { ShieldCheck, ShieldOff } from 'lucide-react'

interface Props {
  certified: boolean
}

const CertificationBadge = ({ certified }: Props) => {
  return (
    <Badge $certified={certified}>
      <div className="icon">
        {certified ? <ShieldCheck size={32} /> : <ShieldOff size={32} />}
      </div>
      <div className="text">
        <p className="label">
          {certified ? 'Certificado pelo LifeSupport' : 'Não certificado'}
        </p>
        <p className="description">
          {certified
            ? 'Esta campanha foi verificada e certificada pela equipe do LifeSupport.'
            : 'Esta campanha ainda não passou pelo processo de verificação do LifeSupport.'}
        </p>
      </div>
    </Badge>
  )
}

export default CertificationBadge

const Badge = styled.div<{ $certified: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1.5px solid ${({ $certified }) => ($certified ? '#22c55e' : '#f59e0b')};
  background: ${({ $certified }) => ($certified ? '#f0fdf4' : '#fffbeb')};

  .icon {
    color: ${({ $certified }) => ($certified ? '#16a34a' : '#d97706')};
    flex-shrink: 0;
  }

  .text {
    .label {
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${({ $certified }) => ($certified ? '#15803d' : '#b45309')};
      margin: 0 0 2px;
    }

    .description {
      font-size: 0.88rem;
      color: #555;
      margin: 0;
    }
  }
`
