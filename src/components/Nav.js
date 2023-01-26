import React from "react"
import {Link} from "react-router-dom"
function Nav() {
    return (
        <React.Fragment>
             <nav className="nav-top">
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><a href="/about" className="nav-item">About</a></li>
                    <li><a href="/menu" className="nav-item">Menu</a></li>
                    <li><a href="/reservations" className="nav-item">Reservations</a></li>
                    <li><a href="/order-online" className="nav-item">Order Online</a></li>
                    <li><a href="/log-in" className="nav-item">Log In</a></li>
                </ul>
            </nav> 
        </React.Fragment>
    );
}

export default Nav;