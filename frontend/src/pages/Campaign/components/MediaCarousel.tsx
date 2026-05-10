import { useState } from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CampaignMedia } from '../../../data/campaigns'

interface Props {
  coverImage: string
  media: CampaignMedia[]
}

const MediaCarousel = ({ coverImage, media }: Props) => {
  const slides = [
    { type: 'image' as const, url: coverImage },
    ...media.filter((m) => m.url !== coverImage),
  ]

  const [current, setCurrent] = useState(0)

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const handleNext = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  const slide = slides[current]

  return (
    <Carousel>
      {slide.type === 'video' ? (
        <video className="media-item" src={slide.url} controls />
      ) : (
        <img className="media-item" src={slide.url} alt={`Slide ${current + 1}`} />
      )}

      {slides.length > 1 && (
        <>
          <button className="nav prev" onClick={handlePrev} aria-label="Anterior">
            <ChevronLeft size={20} />
          </button>
          <button className="nav next" onClick={handleNext} aria-label="Próximo">
            <ChevronRight size={20} />
          </button>
          <div className="dots">
            {slides.map((_, i) => (
              <span key={i} className={i === current ? 'active' : ''} />
            ))}
          </div>
        </>
      )}
    </Carousel>
  )
}

export default MediaCarousel

const Carousel = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  aspect-ratio: 16 / 9;

  .media-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  video.media-item {
    outline: none;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.45);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    transition: background 0.15s;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    &.prev { left: 12px; }
    &.next { right: 12px; }
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transition: background 0.15s;

      &.active {
        background: #fff;
      }
    }
  }
`
