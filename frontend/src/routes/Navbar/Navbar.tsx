import { Link } from 'react-router-dom'
import { Trophy, User } from 'lucide-react'
import styled from 'styled-components'
import { AppPaths } from '../paths/AppPaths'

const Navbar = () => {
  return (
    <Nav>
      <Link to={AppPaths.home} className="brand">
        LifeSupport
      </Link>
      <div className="links">
        <Link to={AppPaths.rankings} className="nav-link">
          <Trophy size={18} />
          Rankings
        </Link>
        <Link to={AppPaths.user} className="user-link" aria-label="Conta do usuário">
          <User size={24} />
        </Link>
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 56px;
  background-color: #5bafd6;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;

  .brand {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.5px;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .nav-link,
  .user-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`