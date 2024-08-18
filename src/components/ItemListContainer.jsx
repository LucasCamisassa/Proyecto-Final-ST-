import React from "react";
import { useEffect, useState } from "react";
import loader from "../img/loading.png";
import MapProducts from "./MapProducts"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer({greetings}) {
    const [cellphone, setCellphone] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        
        const database = getFirestore();
        const refCollection = !id
        ? collection(database, "items")
        : query(collection(database, "items"), where("categoryId", "==", id));

        getDocs(refCollection)
        
        .then((cellphone) => {

            setCellphone(cellphone.docs.map((doc) => {
                return{id: doc.id, ...doc.data()};
            }))
        })
        .finally(() => setLoading(false))     
    }, [id])

    return (
        <>
            <div className="item-list-styles container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="saludo-style">{greetings}</h1>
                    </div>
                </div>
            </div>
            
            {loading ? (<img className="imgLoadingClass d-flex m-auto" src={loader} alt="cellphone"/>) : (<MapProducts cellphone={cellphone} loading={loading}/>) }

        </>
    )
}

export default ItemListContainer;
