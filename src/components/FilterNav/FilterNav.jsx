import Location from "../Location/Location"
import Filters from "../Filters/Filters"
import CSS from "./FilterNav.module.css"
export default function FilterNav() {
    return(
        <div className={CSS.wrapper}>
            <Location />
            <Filters />
        </div>
    )
};
