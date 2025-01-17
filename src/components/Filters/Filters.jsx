import FilterCard from '../FilterCard/FilterCard';
import CSS from './Filters.module.css';
export default function Filters() {
  const VehicleEquipment = [
    { id: 1, name: 'AC', icon: '/public/icons/AC.svg' },
    { id: 2, name: 'Automatic', icon: '/public/icons/Automatic.svg' },
    { id: 3, name: 'Kitchen', icon: '/public/icons/Kitchen.svg' },
    { id: 4, name: 'TV', icon: '/public/icons/TV.svg' },
    { id: 5, name: 'Bathroom', icon: '/public/icons/Bathroom.svg' },
  ];
  return (
    <div className={CSS.box}>
      <p className={CSS.title}>Filters</p>
      <div>
        <p className={CSS.filterName}>Vehicle equipment</p>
        <hr className={CSS.line} />
        <ul className={CSS.list}>
          {VehicleEquipment.map(({ id, name, icon }) => (
            <li className={CSS.card} key={id}>
              <FilterCard key={id} id={id} name={name} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={CSS.filterName}>Vehicle type</p>
        <hr className={CSS.line} />
        <ul className={CSS.list}></ul>
      </div>
      <button type="button" className={CSS.button}>
        Search
      </button>
    </div>
  );
}
