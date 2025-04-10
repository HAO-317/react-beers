import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';


const NotFound = () => {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', color: '#fff' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#f5c518' }}>Back to Home</a>
    </div>
  );
};


const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'; 

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;