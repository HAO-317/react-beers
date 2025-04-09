import { useState, useEffect } from 'react';
import axios from 'axios';
import { Beer } from '../types/Beer';
import '../styles/RandomBeer.css';

const RandomBeer = () => {
  const [beer, setBeer] = useState<Beer | null>(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
      console.log('Random Beer Data:', response.data);
      setBeer(response.data);
    } catch (error) {
      console.error('Failed to fetch random beer:', error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="random-beer">
      <img src={beer.image_url} alt={beer.name} className="random-beer-image" />
      <h1>{beer.name}</h1>
      <h3 className="random-beer-tagline">{beer.tagline}</h3>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Producer:</strong> {beer.contributed_by}</p>
      <button onClick={fetchRandomBeer} className="refresh-button">Refresh Random Beer</button>
    </div>
  );
};

export default RandomBeer;