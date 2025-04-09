import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Beer } from '../types/Beer';
import '../styles/BeerDetails.css';

const BeerDetails = () => {
  const { beerId } = useParams<{ beerId: string }>();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        console.log('Beer Details Data:', response.data);
        setBeer(response.data);
      } catch (error) {
        console.error('Failed to fetch beer details:', error);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} className="beer-details-image" />
      <h1>{beer.name}</h1>
      <h3 className="beer-details-tagline">{beer.tagline}</h3>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Producer:</strong> {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;