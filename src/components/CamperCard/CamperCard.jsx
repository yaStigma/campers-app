import { ReactComponent as StarIcon } from '../../icon/star.svg'
import CSS from './CamperCard.module.css'
export default function CamperCard({ items }) {
  const {
    id,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    TV,
    bathroom,
    kitchen,
    gas,
    radio,
    refrigerator,
    microwave,
    water,
  } = items;
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
          <img className={CSS.favorite} src="./public/icons/heart.svg" alt="favorite" />
       </div> </div>
        <div className={CSS.details}>
          {/* <img className={CSS.star} src="/public/icons/star.svg" alt="star" /> */}
         <div className={CSS.star}> <StarIcon/></div>
        
          <p>
            {rating} ({reviews.length} Reviews)
          </p>
          <img src="/public/icons/loc.svg" alt="location" />
          <p>{location}</p>
        </div>
        <div className={CSS.description}>{description}</div>
        <ul className={CSS.budges}>
            <li></li>
        </ul>
      </div>
    </>
  );
}
