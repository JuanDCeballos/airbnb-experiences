import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
};

export default App;
