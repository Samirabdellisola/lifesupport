import styled from 'styled-components'
import type { UserProfile } from '../../../data/authStorage'

interface Props {
  address: UserProfile['address']
  onChange: (address: UserProfile['address']) => void
}

const AddressSection = ({ address, onChange }: Props) => {
  const handleField = (field: keyof UserProfile['address'], value: string) => {
    onChange({ ...address, [field]: value })
  }

  return (
    <Section>
      <h3 className="section-title">Endereço</h3>
      <div className="grid">
        <div className="field full">
          <label>Rua / Avenida</label>
          <input
            type="text"
            placeholder="Nome da rua"
            value={address.street}
            onChange={(e) => handleField('street', e.target.value)}
          />
        </div>
        <div className="field short">
          <label>Número</label>
          <input
            type="text"
            placeholder="Nº"
            value={address.number}
            onChange={(e) => handleField('number', e.target.value)}
          />
        </div>
        <div className="field">
          <label>Cidade</label>
          <input
            type="text"
            placeholder="Cidade"
            value={address.city}
            onChange={(e) => handleField('city', e.target.value)}
          />
        </div>
        <div className="field short">
          <label>Estado / UF</label>
          <input
            type="text"
            placeholder="UF"
            value={address.state}
            onChange={(e) => handleField('state', e.target.value)}
          />
        </div>
        <div className="field">
          <label>País</label>
          <input
            type="text"
            placeholder="País"
            value={address.country}
            onChange={(e) => handleField('country', e.target.value)}
          />
        </div>
        <div className="field short">
          <label>CEP / ZIP</label>
          <input
            type="text"
            placeholder="00000-000"
            value={address.zip}
            onChange={(e) => handleField('zip', e.target.value)}
          />
        </div>
      </div>
    </Section>
  )
}

export default AddressSection

const Section = styled.div`
  .section-title {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    margin: 0 0 12px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &.full { grid-column: 1 / -1; }
    &.short { grid-column: span 1; }

    label {
      font-size: 0.78rem;
      font-weight: 600;
      color: #555;
    }

    input {
      padding: 9px 11px;
      border: 1px solid #dde1e7;
      border-radius: 8px;
      font-size: 0.88rem;
      outline: none;
      transition: border-color 0.15s;

      &:focus { border-color: #5bafd6; }
    }
  }
`
