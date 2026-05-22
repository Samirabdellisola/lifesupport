import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { loadAuthSession } from '../../data/authStorage'
import { loadCampaigns } from '../../data/campaignStorage'
import { AppPaths } from '../../routes/paths/AppPaths'
import CampaignCard from './components/CampaignCard'
import FeedFilters, { type FilterState } from './components/FeedFilters'

const PAGE_SIZE = 4

const INITIAL_FILTERS: FilterState = {
  title: '',
  requesterName: '',
  helpType: '',
  city: '',
  status: '',
  country: '',
  dateFrom: '',
  dateTo: '',
}

const ScreenHome = () => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const campaigns = loadCampaigns()
  const isLoggedIn = loadAuthSession().isLoggedIn

  const filtered = campaigns.filter((c) => {
    const matchTitle = c.title.toLowerCase().includes(filters.title.toLowerCase())
    const matchRequester = c.requesterName.toLowerCase().includes(filters.requesterName.toLowerCase())
    const matchHelpType = !filters.helpType || c.helpType === filters.helpType
    const matchCity = c.city.toLowerCase().includes(filters.city.toLowerCase())
    const matchCountry = c.country.toLowerCase().includes(filters.country.toLowerCase())
    const matchStatus = !filters.status || c.status === filters.status
    const matchFrom = !filters.dateFrom || c.createdAt >= filters.dateFrom
    const matchTo = !filters.dateTo || c.createdAt <= filters.dateTo
    return matchTitle && matchRequester && matchHelpType && matchCity && matchCountry && matchStatus && matchFrom && matchTo
  })

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const onFiltersChange = (next: FilterState) => {
    setFilters(next)
    setVisibleCount(PAGE_SIZE)
  }

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filtered.length))
  }, [filtered.length])

  const onIntersect = useCallback(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore()
      },
      { threshold: 0.1 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, loadMore])

  useEffect(onIntersect, [onIntersect])

  return (
    <Screen>
      <Header>
        <div>
          <h1>Campanhas</h1>
          <p>Encontre histórias que precisam de apoio agora.</p>
        </div>
        {isLoggedIn && (
          <button onClick={() => navigate(AppPaths.campaign.create)}>
            Criar campanha
          </button>
        )}
      </Header>
      <FeedFilters filters={filters} onChange={onFiltersChange} />
      <Feed>
        {visible.length === 0 ? (
          <EmptyState>Nenhuma campanha encontrada com os filtros aplicados.</EmptyState>
        ) : (
          visible.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        )}
      </Feed>
      {hasMore && <Sentinel ref={sentinelRef} />}
    </Screen>
  )
}

export default ScreenHome

const Screen = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 16px 64px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 4px;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  button {
    border: none;
    border-radius: 10px;
    background: #5bafd6;
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 11px 16px;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.88;
    }
  }
`

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const EmptyState = styled.p`
  text-align: center;
  color: #888;
  padding: 48px 0;
  font-size: 0.95rem;
`

const Sentinel = styled.div`
  height: 1px;
`
