import BudgesBox from '../BudgesBox/BudgesBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperID } from '../../redux/campers/operations';
import { selectCamperId } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CSS from './Features.module.css';
import Loader from '../Loader/Loader';
export default function Features() {
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
  const { form, length, width, height, tank, consumption } = camperData;
  return (
    <div className={CSS.wrapper}>
      <BudgesBox items={camperData} />
      <div className={CSS.details}>
        <p className={CSS.title}>Vehicle details</p>
        <hr className={CSS.line} />
        <div className={CSS.textBox}>
          <p className={CSS.text}>Form</p>
          <p className={CSS.text}>{form}</p>
        </div>
        <div className={CSS.textBox}>
          <p className={CSS.text}>Length</p>
          <p className={CSS.text}>{length}</p>
        </div>
        <div className={CSS.textBox}>
          <p className={CSS.text}>Width</p>
          <p className={CSS.text}>{width}</p>
        </div>
        <div className={CSS.textBox}>
          <p className={CSS.text}>Height</p>
          <p className={CSS.text}>{height}</p>
        </div>
        <div className={CSS.textBox}>
          <p className={CSS.text}>Tank</p>
          <p className={CSS.text}>{tank}</p>
        </div>
        <div className={CSS.textBox}>
          <p className={CSS.text}>Consumption</p>
          <p className={CSS.text}>{consumption}</p>
        </div>
      </div>
    </div>
  );
}
