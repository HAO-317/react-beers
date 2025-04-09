import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Beer } from '../types/Beer';
import beerCup from '../assets/img/beer.svg'; 
import '../styles/AllBeers.css';

const AllBeers = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        console.log('API Data Structure:', response.data);
        setBeers(response.data);
      } catch (error) {
        console.error('Failed to fetch beers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="all-beers">
      <h1 className="all-beers-title">All Beers</h1>
      {isLoading ? (
        <div className="loading-container">
          <img src={beerCup} alt="Loading Beer Cup" className="beer-loader" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="beer-grid">
          {beers.map((beer) => (
            <div key={beer._id} className="beer-card">
              <img src={beer.image_url} alt={beer.name} className="beer-image" />
              <h2>{beer.name}</h2>
              <p className="beer-tagline">{beer.tagline}</p>
              <p>Producer: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`} className="beer-link">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBeers;