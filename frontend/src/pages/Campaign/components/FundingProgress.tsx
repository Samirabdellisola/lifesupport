import styled from 'styled-components'

interface Props {
  goalAmount: number
  raisedAmount: number
}

const FundingProgress = ({ goalAmount, raisedAmount }: Props) => {
  const percent = Math.min(Math.round((raisedAmount / goalAmount) * 100), 100)
  const completed = percent >= 100

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <Container>
      <div className="labels">
        <span className="raised">{formatCurrency(raisedAmount)} arrecadados</span>
        <span className="percent">{percent}%</span>
      </div>
      <Track>
        <Fill $percent={percent} $completed={completed} />
      </Track>
      <span className="goal">Meta: {formatCurrency(goalAmount)}</span>
    </Container>
  )
}

export default FundingProgress

const Track = styled.div`
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 99px;
  overflow: hidden;
`

const Fill = styled.div<{ $percent: number; $completed: boolean }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ $completed }) => ($completed ? '#22c55e' : '#5bafd6')};
  border-radius: 99px;
  transition: width 0.4s ease;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .labels {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .raised {
      font-size: 0.95rem;
      font-weight: 700;
      color: #1a1a2e;
    }

    .percent {
      font-size: 0.85rem;
      font-weight: 600;
      color: #5bafd6;
    }
  }

  .goal {
    font-size: 0.78rem;
    color: #888;
  }
`
