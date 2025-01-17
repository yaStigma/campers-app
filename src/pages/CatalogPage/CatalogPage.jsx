import FilterNav from "../../components/FilterNav/FilterNav"
import CampersList from "../../components/CampersList/CampersList"
import CSS from "./CatalogPage.module.css"
export default function CatalogPage() {
    return(
        <main className={CSS.wrapper}>
           <FilterNav/>
           <CampersList/>
        </main>
    )

};
