import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import styled from 'styled-components'
import { AppPaths } from '../paths/AppPaths'

const Navbar = () => {
  return (
    <Nav>
      <Link to={AppPaths.home} className="brand">
        LifeSupport
      </Link>
      <Link to={AppPaths.user} className="user-link" aria-label="Conta do usuário">
        <User size={24} />
      </Link>
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

  .user-link {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`