import experiences from '../assets/Experiences.png';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-container-image'>
        <img src={experiences} className='img' />
      </div>
      <div className='hero-container-info'>
        <h1 className='hero-container-title'>Online Experiences</h1>
        <p className='hero-container-desc'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
