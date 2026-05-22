import styled from 'styled-components'
import { Award, HeartHandshake } from 'lucide-react'
import { loadSupportsByUser, sumUserPoints } from '../../../data/supportStorage'

interface Props {
  userEmail: string
}

const SupportHistorySection = ({ userEmail }: Props) => {
  const supports = loadSupportsByUser(userEmail)
  const totalPoints = sumUserPoints(userEmail)

  return (
    <Section>
      <div className="summary">
        <Award size={22} />
        <div>
          <p className="label">Meus pontos</p>
          <strong>{totalPoints} pontos</strong>
          <p className="hint">A pontuação é calculada pelo tipo de apoio e valor estimado informado.</p>
        </div>
      </div>

      <h3>Histórico de apoios</h3>
      {supports.length === 0 ? (
        <p className="empty">Nenhum apoio registrado ainda.</p>
      ) : (
        <div className="history">
          {supports.map((support) => (
            <article key={support.id}>
              <HeartHandshake size={18} />
              <div>
                <strong>{support.campaignTitle}</strong>
                <p>
                  {support.supportType} de{' '}
                  {support.estimatedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} -{' '}
                  {support.points} pontos
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}

export default SupportHistorySection

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .summary {
    align-items: flex-start;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 12px;
    color: #f59e0b;
    display: flex;
    gap: 12px;
    padding: 14px;

    .label {
      color: #1a1a2e;
      font-size: 0.92rem;
      font-weight: 700;
      margin: 0 0 2px;
    }

    strong {
      color: #1a1a2e;
      display: block;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .hint {
      color: #666;
      font-size: 0.78rem;
      line-height: 1.45;
      margin: 0;
    }
  }

  h3 {
    color: #888;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 0;
    text-transform: uppercase;
  }

  .empty {
    color: #888;
    font-size: 0.85rem;
    margin: 0;
  }

  .history {
    display: flex;
    flex-direction: column;
    gap: 10px;

    article {
      align-items: flex-start;
      background: #f9fafb;
      border: 1px solid #dde1e7;
      border-radius: 10px;
      color: #5bafd6;
      display: flex;
      gap: 10px;
      padding: 12px;

      strong {
        color: #1a1a2e;
        font-size: 0.9rem;
      }

      p {
        color: #666;
        font-size: 0.8rem;
        margin: 2px 0 0;
      }
    }
  }
`
