import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form-pet">Cadastro de Pets</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
