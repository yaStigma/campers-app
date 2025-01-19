import { useState } from 'react';
import FilterCard from '../FilterCard/FilterCard';
import CSS from './Filters.module.css';
import clsx from 'clsx';
//
const getFilterClass = isActive => {
  return clsx(CSS.card, isActive && CSS.active);
};

export default function Filters({ onFiltersChange }) {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const vehicleEquipment = [
    { id: 1, name: 'AC', icon: './icons/AC.svg' },
    { id: 2, name: 'Automatic', icon: './icons/Automatic.svg' },
    { id: 3, name: 'Kitchen', icon: './icons/Kitchen.svg' },
    { id: 4, name: 'TV', icon: './icons/TV.svg' },
    { id: 5, name: 'Bathroom', icon: './icons/Bathroom.svg' },
  ];
  const vehicleType = [
    { id: 1, name: 'Van', icon: './icons/Van.svg' },
    { id: 2, name: 'Fully Integrated', icon: './icons/FullyIntegrated.svg' },
    { id: 3, name: 'Alcove', icon: './icons/Alcove.svg' },
  ];

  const handleEquipmentChange = name => {
    const newEquipment = selectedEquipment.includes(name)
      ? selectedEquipment.filter(item => item !== name)
      : [...selectedEquipment, name];
    setSelectedEquipment(newEquipment);
    onFiltersChange({ equipment: newEquipment, vehicleType: selectedVehicleType });
  };

  const handleVehicleTypeChange = type => {
    setSelectedVehicleType(type);
    onFiltersChange({ equipment: selectedEquipment, vehicleType: type });
  };

  return (
    <div className={CSS.box}>
      <p className={CSS.title}>Filters</p>
      <div>
        <p className={CSS.filterName}>Vehicle equipment</p>
        <hr className={CSS.line} />
        <ul className={CSS.list}>
          {vehicleEquipment.map(({ id, name, icon }) => (
            <li className={getFilterClass(selectedEquipment.includes(name))} key={id}>
              <FilterCard
                key={id}
                id={id}
                name={name}
                icon={icon}
                onChange={() => handleEquipmentChange(name)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={CSS.filterName}>Vehicle type</p>
        <hr className={CSS.line} />
        <ul className={CSS.list}>
          {vehicleType.map(({ id, name, icon }) => (
            <li className={getFilterClass(selectedVehicleType === name)} key={id}>
              <FilterCard
                key={id}
                id={id}
                name={name}
                icon={icon}
                onChange={() => handleVehicleTypeChange(name)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
