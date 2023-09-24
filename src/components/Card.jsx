import Star from '../assets/Star.png';

const Card = (items) => {
  let badgeText;
  if (items.items.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (items.items.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card-container'>
      {badgeText !== undefined && (
        <div className='card-container-status'>{badgeText}</div>
      )}
      <div className='card-container-main'>
        <img src={`/${items.items.coverImg}`} className='card-container-img' />
      </div>
      <div>
        <div className='card-container-rating'>
          <img src={Star} className='card-container-rating-star' />
          <p className='text'> {items.items.stats.rating} </p>
          <p className='text'> {`(${items.items.stats.reviewCount})`} </p>
          <p className='text'> • </p>
          <p className='text'> {items.items.location} </p>
        </div>
        <p className='text'>{items.items.title}</p>
        <div className='card-container-desc'>
          <p className='text'>From $</p>
          <p className='text'>{items.items.price} </p>
          <p className='text'> / person</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
