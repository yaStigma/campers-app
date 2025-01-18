import { useState } from "react"
import { useDispatch } from "react-redux"
import Location from "../Location/Location"
import Filters from "../Filters/Filters"
import CSS from "./FilterNav.module.css"
import { fetchCampers } from "../../redux/campers/operations"
//
export default function FilterNav() {
    const [filters, setFilters] = useState({ location: '', equipment: [], vehicleType: '' });
    const dispatch = useDispatch();
  
    const handleLocationChange = (location) => {
      setFilters((prevFilters) => ({ ...prevFilters, location }));
    };
  
    const handleFiltersChange = (newFilters) => {
      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    };
  
    const handleSearch = () => {
      dispatch(fetchCampers(filters));
    };
  console.log(filters);
    return(
        <div className={CSS.wrapper}>
            <Location onLocationChange={handleLocationChange}/>
            <Filters onFiltersChange={handleFiltersChange}/>
            <button type="button" className={CSS.button} onClick={handleSearch}>
        Search
      </button>
        </div>
    )
};
