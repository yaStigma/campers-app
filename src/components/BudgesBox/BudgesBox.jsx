import CSS from './BudgesBox.module.css';
import BadgesCard from '../BadgesCard/BadgesCard';
//
export default function BudgesBox({ items }) {
  const { AC, TV, bathroom, kitchen, gas, radio, refrigerator, microwave, water } = items;

  const budges = [
    { id: 1, name: 'AC', stat: AC, icon: '/icons/AC.svg' },
    { id: 2, name: 'Bathroom', stat: bathroom, icon: '/icons/Bathroom.svg' },
    { id: 3, name: 'Kitchen', stat: kitchen, icon: '/icons/Kitchen.svg' },
    { id: 4, name: 'TV', stat: TV, icon: '/icons/TV.svg' },
    { id: 5, name: 'Gas', stat: gas, icon: '/icons/gas.svg' },
    { id: 6, name: 'Radio', stat: radio, icon: '/icons/Radio.svg' },
    { id: 7, name: 'Refrigerator', stat: refrigerator, icon: '/icons/Refrigerator.svg' },
    { id: 8, name: 'Microwave', stat: microwave, icon: '/icons/microwave.svg' },
    { id: 9, name: 'Water', stat: water, icon: '/icons/Water.svg' },
  ];
  return (
    <ul className={CSS.budges}>
      {budges.map(({ id, name, stat, icon }) => (
        <li key={id}>
          <BadgesCard key={id} id={id} name={name} stat={stat} icon={icon} />
        </li>
      ))}
    </ul>
  );
}
