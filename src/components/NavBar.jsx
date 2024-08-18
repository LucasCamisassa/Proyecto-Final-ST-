import React from "react";
import imagenCarrito from "../img/imagenCarrito.png";
import CartWidget from "../components/CartWidget"
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
    return (
        <>
        <div className="d-flex container navbar-styles">
            <NavLink className="d-flex" to="/"><img className="img-logo-style" src={imagenCarrito} alt="logo-tienda" /></NavLink>
            <ul className="d-flex container justify-content-around align-items-center list-unstyled m-1">
                <li><NavLink className="text-decoration-none li-navbar-style" to="/category/Samsung">Samsung</NavLink></li>
                <li><NavLink className="text-decoration-none li-navbar-style" to="/category/Apple">Apple</NavLink></li>
                <li><NavLink className="text-decoration-none li-navbar-style" to="/category/Huawei">Huawei</NavLink></li>
                <li><NavLink className="text-decoration-none li-navbar-style" to="/category/Nokia">Nokia</NavLink></li>
            </ul>
            <CartWidget />
        </div>
        </>
    )
}

export default NavBar