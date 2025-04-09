import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to the World of Beer</h1>
      <div className="home-buttons">
        <Link to="/beers" className="home-button">All Beers</Link>
        <Link to="/random-beer" className="home-button">Random Beer</Link>
      </div>
    </div>
  );
};

export default Home;