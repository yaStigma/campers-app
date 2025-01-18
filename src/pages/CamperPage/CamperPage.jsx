import CSS from "./CamperPage.module.css"
import CamperInfo from "../../components/CamperInfo/CamperInfo"
export default function CamperPage() {
    return(
        <main className={CSS.wrapper}>
            <CamperInfo/>
        </main>
    )
};
