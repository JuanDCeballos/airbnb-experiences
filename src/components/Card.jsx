import Star from '../assets/Star.png';

const Card = ({ img, rating, reviewCount, location, title, price }) => {
  return (
    <div className='card-container'>
      <div className='card-container-main'>
        <img src={`/${img}`} className='card-container-img' />
        <p className='card-container-status'>SOLD OUT</p>
      </div>
      <div>
        <div className='card-container-rating'>
          <img src={Star} className='card-container-rating-star' />
          <p className='text'> {rating} </p>
          <p className='text'> {`(${reviewCount})`} </p>
          <p className='text'> • </p>
          <p className='text'> {location} </p>
        </div>
        <p className='text'>{title}</p>
        <div className='card-container-desc'>
          <p className='text'>From $</p>
          <p className='text'>{price} </p>
          <p className='text'> / person</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
