import { Link } from "react-router-dom"
import CSS from "./HomePage.module.css"
export default function HomePage() {
    return(
        <main className={CSS.wrapper}>
<h1 className={CSS.title}>Campers of your dreams</h1>
<p className={CSS.text}>You can find everything you want in our catalog</p>
<Link to="/catalog"><button type="button" className={CSS.button}>View Now</button>        
       </Link> </main>
    )
};
