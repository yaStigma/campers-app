import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import CSS from './Navigation.module.css';

const getNavLinkClass = (props) =>{
    return clsx(CSS.link, props.isActive && CSS.active)
}
export default function Navigation() {
  return (
    <nav className={CSS.wrapper}>
      <NavLink to="/" className={getNavLinkClass}>

          Home

      </NavLink>
      <NavLink to="/catalog" className={getNavLinkClass}>

          Catalog

      </NavLink>
    </nav>
  );
}
