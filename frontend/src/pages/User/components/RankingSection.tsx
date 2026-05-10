import styled from 'styled-components'
import { Trophy } from 'lucide-react'

interface Props {
  participates: boolean
  onChange: (value: boolean) => void
}

const RankingSection = ({ participates, onChange }: Props) => {
  return (
    <Section onClick={() => onChange(!participates)}>
      <div className="icon">
        <Trophy size={22} />
      </div>
      <div className="text">
        <p className="label">Participar do ranking</p>
        <p className="description">
          Apareça na lista de pessoas que mais ajudaram campanhas no LifeSupport.
        </p>
      </div>
      <Toggle $active={participates}>
        <span className="thumb" />
      </Toggle>
    </Section>
  )
}

export default RankingSection

const Toggle = styled.div<{ $active: boolean }>`
  flex-shrink: 0;
  width: 44px;
  height: 24px;
  border-radius: 99px;
  background: ${({ $active }) => ($active ? '#5bafd6' : '#dde1e7')};
  position: relative;
  transition: background 0.2s;
  cursor: pointer;

  .thumb {
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? '23px' : '3px')};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: left 0.2s;
  }
`

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border: 1px solid #dde1e7;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #f9fafb;
  }

  .icon {
    color: #f59e0b;
    flex-shrink: 0;
  }

  .text {
    flex: 1;

    .label {
      font-size: 0.92rem;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0 0 2px;
    }

    .description {
      font-size: 0.8rem;
      color: #888;
      margin: 0;
    }
  }
`
