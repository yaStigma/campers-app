import StarGoldIcon from '../../icon/star-gold.svg?react';
import LocIcon from '../../icon/loc.svg?react';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import CSS from './CamperInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperID } from '../../redux/campers/operations';
import { selectCamperId } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
Modal.setAppElement('#root');
//
export default function CamperInfo() {
  const dispatch = useDispatch();
  const camperData = useSelector(selectCamperId);
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperID(id));
    }
  }, [dispatch, id]);

  if (!camperData) {
    return <Loader />;
  }
  const openModal = image => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <li className={CSS.card} key={original} onClick={() => openModal(original)}>
            <img src={thumb} alt={name} className={CSS.foto} />
          </li>
        ))}
      </ul>

      <div className={CSS.description}>{description}</div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={CSS.modal}
        overlayClassName={CSS.overlay}
      >
        <button onClick={closeModal} className={CSS.closeBtn}>
          <IoMdClose />
        </button>
        <img src={modalImage} alt="Full Size" className={CSS.modalImage} />
      </Modal>
    </div>
  );
}
