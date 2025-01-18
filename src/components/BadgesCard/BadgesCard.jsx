
import CSS from './BadgesCard.module.css'; 

export default function BadgesCard({ id, name, stat, icon }) {
  if (stat === false) return null; 
  return (
    <div className={CSS.badgeCard}>
      <img src={icon} alt={name} className={CSS.icon} />
      <p className={CSS.text}>{name}</p>
    </div>
  );
}