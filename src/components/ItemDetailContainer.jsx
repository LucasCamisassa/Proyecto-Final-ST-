import React from "react";
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import loader from "../img/loading.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemsContext } from "../contexts/ItemsContext";
import { ItemCount } from "./ItemCount";

function ItemDetailContainer() {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const {addItem} = useContext(ItemsContext)


    const onAdd = (count) => {
        addItem({...product, quantity: count })
    }
    


    useEffect(() => {

        const database = getFirestore();
        const refDoc = doc(database, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data()});
        })
        .finally(() => setLoading(false));
    }, [id])

    if(!product) return <img className="imgLoadingClass d-flex m-auto" src={loader} alt="cellphone"/>

    return (
            <Container className="detailContainer">
                <Card style={{ width: '18rem', border: "2px black solid", borderRadius:"10px", boxShadow:"2px 5px 10px black"}}>
                    <Card.Img className="imgCellRed" variant="top" src={product.imageId} />
                    <Card.Body>
                        <Card.Title className="cardTitleStyles">{product.categoryId}{" "}{product.model}</Card.Title>
                        <Card.Text className="detailStyles">{product.description}</Card.Text>
                        <Card.Text className="detailStyles">${product.price}</Card.Text> 
                        <Card.Text className="detailStyles">Stock:{product.stock}</Card.Text> 
                        <ItemCount stock={product.stock} onAdd={onAdd}/>    
                    </Card.Body>                    
                </Card>
            </Container>
                
            
                     
    )
}

export default ItemDetailContainer;