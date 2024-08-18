import React from "react";
import ImgNotFound from "../img/404NotFound.png"



function NotFound() {
    return(
        <>
        <img className="imgLoadingClass d-flex m-auto" src={ImgNotFound} alt="No-Esta"/>
        <h2 className="pageNotFound">PAGINA NO ENCONTRADA</h2>
        </>
    )
}

export default NotFound