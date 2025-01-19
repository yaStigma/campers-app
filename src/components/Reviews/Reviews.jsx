import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperID } from '../../redux/campers/operations';
import { selectCamperId } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarGoldIcon from '../../icon/star-gold.svg?react';
import StarGrayIcon from '../../icon/star.svg?react';
import CSS from './Reviews.module.css';
import Loader from '../Loader/Loader';
export default function Reviews() {
  const dispatch = useDispatch();
  const camperData = useSelector(selectCamperId);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(fetchCamperID(id));
    }
  }, [dispatch, id]);

  if (!camperData) {
    return <Loader />;
  }
  const { reviews } = camperData;

  function renderStars(reviewer_rating) {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => {
      return index < reviewer_rating ? <StarGoldIcon key={index} /> : <StarGrayIcon key={index} />;
    });
  }

  return (
    <ul className={CSS.wrapper}>
      {reviews.map(({ id, comment, reviewer_name, reviewer_rating }) => (
        <li key={id} className={CSS.commentBox}>
          <div className={CSS.person}>
            <span className={CSS.avatar}>{reviewer_name.charAt(0).toUpperCase()}</span>
            <div>
              <p className={CSS.name}>{reviewer_name}</p>
              <div>{renderStars(reviewer_rating)}</div>
            </div>
          </div>
          <div className={CSS.comment}>{comment}</div>
        </li>
      ))}
    </ul>
  );
}
