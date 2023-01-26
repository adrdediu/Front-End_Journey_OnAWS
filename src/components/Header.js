import React from "react"
import Logo from "../assets/images/logo.jpg"
import Nav from "./Nav"
import {Link} from "react-router-dom"
function Header(props) {

    return (
        <React.Fragment>
            <header className="header" >
                <Link to="/" ><img src={Logo} alt ="Logo" className="header-logo" /></Link>
                <Nav />
            </header>
        </React.Fragment>
    );
}

export default Header;