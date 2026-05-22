import styled from 'styled-components'

export interface FilterState {
  title: string
  requesterName: string
  helpType: string
  city: string
  status: string
  country: string
  dateFrom: string
  dateTo: string
}

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
}

const FeedFilters = ({ filters, onChange }: Props) => {
  const handleChange = (field: keyof FilterState, value: string) => {
    onChange({ ...filters, [field]: value })
  }

  return (
    <FiltersContainer>
      <div className="filters-grid">
        <div className="field">
          <label htmlFor="filter-title">Campanha</label>
          <input
            id="filter-title"
            type="text"
            placeholder="Nome da campanha"
            value={filters.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-requester">Solicitante</label>
          <input
            id="filter-requester"
            type="text"
            placeholder="Nome do solicitante"
            value={filters.requesterName}
            onChange={(e) => handleChange('requesterName', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-help-type">Tipo de ajuda</label>
          <select
            id="filter-help-type"
            value={filters.helpType}
            onChange={(e) => handleChange('helpType', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Financeira">Financeira</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Roupas">Roupas</option>
            <option value="Serviços">Serviços</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="filter-city">Cidade</label>
          <input
            id="filter-city"
            type="text"
            placeholder="Cidade"
            value={filters.city}
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-status">Status</label>
          <select
            id="filter-status"
            value={filters.status}
            onChange={(e) => handleChange('status', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Aberto">Aberto</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="filter-country">País</label>
          <input
            id="filter-country"
            type="text"
            placeholder="País"
            value={filters.country}
            onChange={(e) => handleChange('country', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-date-from">Data inicial</label>
          <input
            id="filter-date-from"
            type="date"
            value={filters.dateFrom}
            onChange={(e) => handleChange('dateFrom', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-date-to">Data final</label>
          <input
            id="filter-date-to"
            type="date"
            value={filters.dateTo}
            onChange={(e) => handleChange('dateTo', e.target.value)}
          />
        </div>
      </div>
    </FiltersContainer>
  )
}

export default FeedFilters

const FiltersContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  margin-bottom: 24px;

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #555;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    input,
    select {
      padding: 8px 10px;
      border: 1px solid #dde1e7;
      border-radius: 8px;
      font-size: 0.88rem;
      color: #333;
      background: #f9fafb;
      outline: none;
      transition: border-color 0.15s;

      &:focus {
        border-color: #5bafd6;
        background: #fff;
      }
    }
  }
`
