import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
 
const initialValue= {
    name: "",
    lastname: "",
    phone: "",
    email:"",
}

 export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValue);

    const {reset, removeItem, items} = useContext(ItemsContext);

    const total = items.reduce((acc, act) => acc + act.price* act.quantity, 0)

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return {...prev, [ev.target.name]: ev.target.value}
        })
    };

    const handleOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };
    
    const database = getFirestore();
    const orderCollection = collection (database, "orders")

    addDoc(orderCollection, order).then(({id}) => {
        if(id) {
            alert("Su orden: " + id + "ha sido completada!");
            reset();
            setBuyer(initialValue)
        }
    });

    }

    if (!items.length) return "No hay nada en el carrito"
    
    return (
    <Container>
        <button onClick={reset}>Vaciar</button>
        {items?.map(i => {
            return ( <div key={i.id}>
            <h1>Producto: {i.title} {i.model}</h1>
            <h2>Precio: ${i.price}</h2>
            <h3>Cantidad de producto:{" "}{i.quantity}</h3>
            <img src={i.imageId} alt="imagen-producto" height={150} />
            <span onClick={() => removeItem(i.id)}>X</span>
            </div>)
        })}
        <h4>Total: {total}</h4>
        <hr />
        {!!items.length && (
            <form>
                <div>
                    <label>Nombre</label>
                    <input value={buyer.name} onChange={handleChange} name="name"/>
                </div>
                <div>
                    <label>Apellido</label>
                    <input value={buyer.lastname} onChange={handleChange} name="lastname"/>
                </div>
                <div>
                    <label>Telefono</label>
                    <input value={buyer.phone} onChange={handleChange} name="phone"/>
                </div>
                <div>
                    <label>Email</label>
                    <input value={buyer.email} onChange={handleChange} name="email"/>
                </div>
                <button type="button" onClick={handleOrder}>
                    Comprar
                </button>
            </form>
        )}
    </Container>
 )};