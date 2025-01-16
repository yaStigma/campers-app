import { Suspense } from "react";
import { Outlet } from "react-router"; 
import Header from "../Header/Header";
import CSS from "./Layout.module.css"

export default function Layout() {
   return(
   <div className={CSS.wrapper}>
            <Header />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            </div>
            )
};
