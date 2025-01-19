import CSS from "./CamperPage.module.css"
import CamperInfo from "../../components/CamperInfo/CamperInfo"
import NavigationCamper from "../../components/NavigationCamper/NavigationCamper"
import CamperInfoBox from "../../components/CamperInfoBox/CamperInfoBox"
import CamperForm from "../../components/CamperForm/CamperForm"

export default function CamperPage() {


    return(
        <main className={CSS.wrapper}>
            <CamperInfo />
            <NavigationCamper/>
            <div className={CSS.boxWrapper}>
                <CamperInfoBox />
                <CamperForm />
            </div>
        </main>
    )
};
