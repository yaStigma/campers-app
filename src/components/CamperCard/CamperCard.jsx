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
        <img src={gallery[0].thumb} alt={name} />
      </div>
      <div className={CSS.infoBox}>
        <div className={CSS.title}>
          <h2>{name}</h2>
          <p>€{price}.00</p>
          <img src="./public/icons/heart.svg" alt="favorite" />
        </div>
        <div className={CSS.details}>
          <img src="/public/icons/star.svg" alt="star" />
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
