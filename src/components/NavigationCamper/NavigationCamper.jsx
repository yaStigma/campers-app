import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import CSS from './NavigationCamper.module.css'
const getNavLinkClass = props => {
  return clsx(CSS.link, props.isActive && CSS.active);
};

export default function NavigationCamper() {
  return (
    <div className={CSS.wrapper}>
      <NavLink to="features" className={getNavLinkClass}>
        Features
      </NavLink>
      <NavLink to="reviews" className={getNavLinkClass}>
        Reviews
      </NavLink>
    </div>
  );
}
