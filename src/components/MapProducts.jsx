import React from "react";
import Container from "react-bootstrap/Container";
import CardProducts from "./CardProducts";
import "bootstrap/dist/css/bootstrap.min.css";

function MapProducts ({cellphone}) {

    return (
        <Container className="d-flex flex-wrap containerCells">
            {cellphone.map(phone => 
                <CardProducts key={phone.id} phone={phone} />
            )}
        </Container>
    )
}


export default MapProducts