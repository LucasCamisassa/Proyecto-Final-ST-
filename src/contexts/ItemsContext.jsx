import { createContext } from "react";
import { useState } from "react";


export const ItemsContext = createContext();

export const Provider = ({children}) => {
    const [items, setItems] = useState([]);

    const reset = () => setItems([]);

    const addItem = (product) => {
        const alreadyExists = items.some((i) => i.id === product.id);
    if(alreadyExists){
        const transform = items.map((i) => {
            if(i.id === product.id){
                return {...i, quantity: i.quantity + product.quantity }
            } else{ 
                return i;
            }
        });
        setItems(transform);
    } else {
        setItems((prev) => [...prev, product]);
    }
};

       
const removeItem = (id) => {
    const remove = items.filter((i) => i.id !== id)
    setItems(remove)
}   
        

    return <ItemsContext.Provider value={{addItem, items, reset, removeItem}}>
        {children}
    </ItemsContext.Provider>
}