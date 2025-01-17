
import CSS from './Location.module.css';

export default function Location() {
  return (
    <div >
      <p className={CSS.title}>Location</p>
      
        <input type="text" placeholder="City" className={CSS.input} />
   
    </div>
  );
}
