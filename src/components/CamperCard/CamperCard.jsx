import StarGoldIcon from '../../icon/star-gold.svg?react';
import HeartIcon from '../../icon/heart.svg?react';
import LocIcon from '../../icon/loc.svg?react';

import BudgesBox from '../BudgesBox/BudgesBox';
import CSS from './CamperCard.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import clsx from 'clsx';
//

const getFavoriteClass = isFavorite => {
  return clsx(CSS.favorite, isFavorite && CSS.active);
};
export default function CamperCard({ items }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(items.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(items.id));
  };

  const { id, name, gallery, price, rating, reviews, location, description } = items;

  return (
    <>
      <div className={CSS.picBox}>
        <img src={gallery[0].thumb} alt={name} className={CSS.pic} />
      </div>
      <div className={CSS.infoBox}>
        <div className={CSS.title}>
          <h2 className={CSS.name}>{name}</h2>
          <div className={CSS.priceBox}>
            <p className={CSS.price}>€{price}.00</p>

            <div className={getFavoriteClass(isFavorite)} onClick={handleFavoriteClick}>
              <HeartIcon />
            </div>
          </div>{' '}
        </div>
        <div className={CSS.details}>
          <div className={CSS.star}>
            <StarGoldIcon />
          </div>
          <p className={CSS.rating}>
            {rating} ({reviews.length} Reviews)
          </p>

          <div className={CSS.locIcon}>
            <LocIcon />
          </div>
          <p className={CSS.location}>{location}</p>
        </div>
        <div className={CSS.description}>{description}</div>
        <BudgesBox items={items} />
        <Link to={`/catalog/${id}`}>
          <button type="button" className={CSS.button}>
            Show more
          </button>
        </Link>
      </div>
    </>
  );
}
