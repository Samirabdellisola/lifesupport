import { useRef } from 'react'
import styled from 'styled-components'
import { Camera } from 'lucide-react'

interface Props {
  photo: string | null
  onChange: (photo: string) => void
}

const ProfilePhotoSection = ({ photo, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    onChange(url)
  }

  return (
    <Section>
      <div className="avatar" onClick={() => inputRef.current?.click()}>
        {photo ? (
          <img src={photo} alt="Foto de perfil" />
        ) : (
          <div className="placeholder">
            <Camera size={28} />
          </div>
        )}
        <div className="overlay">
          <Camera size={16} />
          <span>Alterar</span>
        </div>
      </div>
      <p className="hint">Clique para alterar a foto de perfil</p>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} />
    </Section>
  )
}

export default ProfilePhotoSection

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  input[type='file'] {
    display: none;
  }

  .avatar {
    position: relative;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    background: #e5e7eb;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      color: #fff;
      font-size: 0.72rem;
      font-weight: 600;
      opacity: 0;
      transition: opacity 0.15s;
    }

    &:hover .overlay {
      opacity: 1;
    }
  }

  .hint {
    font-size: 0.78rem;
    color: #9ca3af;
    margin: 0;
  }
`
