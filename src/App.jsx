import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            price={item.price}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
