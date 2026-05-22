import styled from 'styled-components'
import { HeartHandshake, Medal, Trophy } from 'lucide-react'
import { monthlyHelpers } from '../../data/rankings'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const ScreenRankings = () => {
  return (
    <Screen>
      <Header>
        <Trophy size={30} />
        <div>
          <h1>Maiores ajudantes do mês</h1>
          <p>Pessoas que mais apoiaram campanhas no LifeSupport neste mês.</p>
        </div>
      </Header>

      <RankingList>
        {monthlyHelpers.map((helper, index) => (
          <RankingCard key={helper.id}>
            <div className="position">
              <Medal size={22} />
              <span>{index + 1}</span>
            </div>
            <div className="info">
              <h2>{helper.name}</h2>
              <p>{helper.city}</p>
            </div>
            <div className="stats">
              <span>
                <HeartHandshake size={16} />
                {helper.helpedCampaigns} campanhas
              </span>
              <strong>{helper.points} pontos</strong>
              <small>{currencyFormatter.format(helper.donatedAmount)} em apoios</small>
            </div>
          </RankingCard>
        ))}
      </RankingList>

      <Criteria>
        <h2>Como os pontos são calculados</h2>
        <p>
          No mock atual, apoios financeiros geram pelo menos 10 pontos e usam o valor estimado como base.
          Apoios materiais, serviços e outros também geram pontos para incentivar participação recorrente.
        </p>
        <p>
          Usuários que desativarem a participação no ranking no perfil não devem aparecer publicamente
          quando esses dados vierem do backend.
        </p>
      </Criteria>
    </Screen>
  )
}

export default ScreenRankings

const Screen = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px 64px;
`

const Header = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  color: #f59e0b;
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  padding: 22px;

  h1 {
    color: #1a1a2e;
    font-size: 1.45rem;
    margin: 0 0 4px;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
`

const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const RankingCard = styled.article`
  align-items: center;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  display: grid;
  gap: 14px;
  grid-template-columns: auto 1fr auto;
  padding: 16px;

  .position {
    align-items: center;
    background: #fffbeb;
    border-radius: 12px;
    color: #f59e0b;
    display: flex;
    gap: 6px;
    padding: 10px 12px;

    span {
      color: #1a1a2e;
      font-weight: 800;
    }
  }

  .info {
    h2 {
      color: #1a1a2e;
      font-size: 1rem;
      margin: 0 0 2px;
    }

    p {
      color: #888;
      font-size: 0.85rem;
      margin: 0;
    }
  }

  .stats {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      align-items: center;
      color: #666;
      display: flex;
      font-size: 0.82rem;
      gap: 5px;
    }

    strong {
      color: #16a34a;
      font-size: 0.95rem;
    }

    small {
      color: #888;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    grid-template-columns: auto 1fr;

    .stats {
      align-items: flex-start;
      grid-column: 2;
    }
  }
`

const Criteria = styled.section`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  margin-top: 20px;
  padding: 18px;

  h2 {
    color: #1a1a2e;
    font-size: 1rem;
    margin: 0 0 8px;
  }

  p {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.6;
    margin: 0 0 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
