import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"

import CSS from "./Header.module.css"
export default function Header() {
    return(
        <header className={CSS.wrapper}>
            <Logo/>
            <Navigation/>
        </header>
    )
};
