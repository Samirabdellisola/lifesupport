import styled from 'styled-components'
import { Phone, MessageCircle, Globe } from 'lucide-react'
import type { UserProfile } from '../../../data/authStorage'

interface Props {
  contacts: UserProfile['contacts']
  onChange: (contacts: UserProfile['contacts']) => void
}

const ContactSection = ({ contacts, onChange }: Props) => {
  const handleField = (field: keyof UserProfile['contacts'], value: string) => {
    onChange({ ...contacts, [field]: value })
  }

  return (
    <Section>
      <h3 className="section-title">Meios de contato</h3>
      <div className="fields">
        <div className="field">
          <div className="icon"><Phone size={15} /></div>
          <div className="input-wrap">
            <label htmlFor="contact-phone">Telefone</label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="+55 (11) 90000-0000"
              value={contacts.phone}
              onChange={(e) => handleField('phone', e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="icon"><MessageCircle size={15} /></div>
          <div className="input-wrap">
            <label htmlFor="contact-whatsapp">WhatsApp</label>
            <input
              id="contact-whatsapp"
              type="tel"
              placeholder="+55 (11) 90000-0000"
              value={contacts.whatsapp}
              onChange={(e) => handleField('whatsapp', e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="icon"><Globe size={15} /></div>
          <div className="input-wrap">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              type="url"
              placeholder="https://seusite.com"
              value={contacts.website}
              onChange={(e) => handleField('website', e.target.value)}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection

const Section = styled.div`
  .section-title {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #888;
    margin: 0 0 12px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border: 1px solid #dde1e7;
    border-radius: 10px;
    background: #f9fafb;

    .icon {
      color: #5bafd6;
      flex-shrink: 0;
    }

    .input-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;

      label {
        font-size: 0.72rem;
        font-weight: 600;
        color: #888;
      }

      input {
        border: none;
        background: transparent;
        font-size: 0.9rem;
        color: #333;
        outline: none;
        padding: 0;
      }
    }
  }
`
