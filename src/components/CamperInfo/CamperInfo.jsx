import StarGoldIcon from '../../icon/star-gold.svg?react';
import LocIcon from '../../icon/loc.svg?react';

import CSS from './CamperInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperID } from '../../redux/campers/operations';
import { selectCamperId } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//
export default function CamperInfo() {
    const dispatch = useDispatch();
    const camperData = useSelector(selectCamperId);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchCamperID(id));
        }
    }, [dispatch, id]);

    if (!camperData) {
        return <div>Loading...</div>; // Или ваш компонент Loader
    }

    const { name, rating, reviews, location, price, description, gallery } = camperData;
    return (
        <div className={CSS.wrapper}>
            <h2 className={CSS.name}>{name}</h2>
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
            <p className={CSS.price}>€{price}.00</p>

                <ul className={CSS.gallery}>
                          {gallery.map(({ thumb, original }) => (
                                      <li className={CSS.card} key={original} >
                                        <img src={thumb} alt={name} className={CSS.foto} />
                                      </li>
                                    ))}
                        </ul>

        <div className={CSS.description}>{description}</div>
        </div>
    );
}
