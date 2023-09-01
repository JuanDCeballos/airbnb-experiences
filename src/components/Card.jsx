import Swimming from '../assets/Swimming.png';
import Star from '../assets/Star.png';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-container-main">
        <img src={Swimming} className="card-container-img" />
        <p className="card-container-status">SOLD OUT</p>
      </div>
      <div>
        <div className="card-container-rating">
          <img src={Star} className="card-container-rating-star" />
          <p className="text"> 5.0 </p>
          <p className="text"> (6) </p>
          <p className="text"> · </p>
          <p className="text"> USA </p>
        </div>
        <p className="text">Life lessons with Katie Zaferes</p>
        <div className="card-container-desc">
          <p className="text">From $</p>
          <p className="text">136 </p>
          <p className="text"> / person</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
