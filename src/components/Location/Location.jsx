import { useState } from 'react';
import CSS from './Location.module.css';

export default function Location({ onLocationChange }) {
  const [location, setLocation] = useState('');
  const handleInputChange = e => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    onLocationChange(newLocation);
  };
  return (
    <div className={CSS.box}>
      <p className={CSS.title}>Location</p>

      <input
        type="text"
        placeholder="City"
        className={CSS.input}
        value={location}
        onChange={handleInputChange}
      />
    </div>
  );
}
