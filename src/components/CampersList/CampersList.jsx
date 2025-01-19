import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { incrementPage } from '../../redux/campers/slice';
import { selectCampers } from '../../redux/campers/selectors';
import CSS from './CampersList.module.css';
import CamperCard from '../CamperCard/CamperCard';
import Loader from '../Loader/Loader';
//
export default function CampersList() {
  const dispatch = useDispatch();
  const { items, limit, page, total, loading, error } = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers({ location: '', equipment: [], vehicleType: '' }));
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };
  const displayedItems = items.slice(0, (page + 1) * limit);
  if (loading) return <Loader />;
  if (error) return <div>No campers found. Please change your request parameters</div>;

  return (
    <div className={CSS.wrapper}>
      <ul>
        {displayedItems && displayedItems.length > 0 ? (
          displayedItems.map(camper => (
            <li key={camper.id} className={CSS.box}>
              <CamperCard items={camper} />
            </li>
          ))
        ) : (
          <li>No campers found</li>
        )}
      </ul>
      {displayedItems.length < total && (
        <button onClick={handleLoadMore} className={CSS.button}>
          Load more
        </button>
      )}
    </div>
  );
}
