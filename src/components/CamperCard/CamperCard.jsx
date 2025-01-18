import  StarGoldIcon  from '../../icon/star-gold.svg?react'
import HeartIcon from '../../icon/heart.svg?react'
import LocIcon from '../../icon/loc.svg?react'
import BadgesCard from '../BadgesCard/BadgesCard'

import CSS from './CamperCard.module.css'
import { Link } from 'react-router-dom'
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

  const budges = [
      { id: 1, name: 'AC', stat:AC, icon: './icons/AC.svg' },
      { id: 2, name: 'Bathroom', stat:bathroom, icon: './icons/Bathroom.svg' },
      { id: 3, name: 'Kitchen', stat:kitchen, icon: './icons/Kitchen.svg' },
      { id: 4, name: 'TV', stat:TV, icon: './icons/TV.svg' },
      { id: 5, name: 'Gas', stat:gas, icon: './icons/gas.svg' },
      { id: 6, name: 'Radio', stat:radio, icon: './icons/Radio.svg' },
      { id: 7, name: 'Refrigerator', stat:refrigerator, icon: './icons/Refrigerator.svg' },
      { id: 8, name: 'Microwave', stat:microwave, icon: './icons/microwave.svg' },
      { id: 9, name: 'Water', stat:water, icon: './icons/Water.svg' }
  ]

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
          {/* <img className={CSS.favorite} src="./public/icons/heart.svg" alt="favorite" /> */}
       <div className={CSS.favorite}><HeartIcon /></div>
       </div> </div>
        <div className={CSS.details}>
          {/* <img className={CSS.star} src="/public/icons/star.svg" alt="star" /> */}
         <div className={CSS.star}><StarGoldIcon/></div>
                  <p className={CSS.rating}>
            {rating} ({reviews.length} Reviews)
          </p>
          {/* <img src="/public/icons/loc.svg" alt="location" /> */}
          
          <div className={CSS.locIcon}><LocIcon /></div>
          <p className={CSS.location}>{location}</p>
        </div>
        <div className={CSS.description}>{description}</div>
        <ul className={CSS.budges}>
          {budges.map(({ id, name, stat, icon }) => (
                      <li className={CSS.card} key={id}>
                        <BadgesCard key={id} id={id} name={name} stat={stat} icon={icon} />
                      </li>
                    ))}
        </ul>
        <Link to={`/catalog/${id}`} >    
<button type="button" className={CSS.button}>
Show more
      </button>
      </Link>
      </div>
   
    </>
  );
}
