import { Link } from 'react-router-dom';
import logo from '../assets/img/beer.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Bier Logo" className="navbar-logo" />
      </Link>
      <Link to="/" className="navbar-link">Back to Home</Link>
    </nav>
  );
};

export default Navbar;