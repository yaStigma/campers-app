import { Link } from 'react-router-dom';
import CSS from './Logo.module.css';
export default function Logo() {
  return (
    <div className={CSS.logo}>
      <Link to="/">
        <img src="/icons/Logo.svg" alt="Logo" />
      </Link>
    </div>
  );
}
