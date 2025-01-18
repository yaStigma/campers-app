
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers } from "../../redux/campers/operations"
import { selectCampers } from "../../redux/campers/selectors"
import CSS from "./CampersList.module.css"
import CamperCard from "../CamperCard/CamperCard"
export default function CampersList() {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector(selectCampers);
    useEffect(()=>{
        dispatch(fetchCampers())
    },[dispatch])

    if (loading) return <div>Loading...</div>;   // заменить на лодер
    if (error) return <div>Error: {error}</div>;  // заменить на тост 
    
    return(
        <div className={CSS.wrapper}>
            <ul>
            {items && items.length > 0 ? (
                    items.map(camper => (
                        <li key={camper.id}><CamperCard items={camper}/></li>
                    ))
                ) : (
                    <li>No campers found</li> 
                )}
            </ul>
        </div>
        
    )
};
