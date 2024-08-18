import React from 'react';
import './App.css';
import NavBar from "../src/components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { Provider } from './contexts/ItemsContext'; 

function App() {

  return (
    <Provider>
      <BrowserRouter>
                <NavBar />
                
              <Routes>

                <Route path='/' element ={
                  <ItemListContainer greetings="→ BIENVENIDO A NUESTRO NEGOCIO ONLINE ←"/>
                } />
                <Route path='/category/:id' element ={
                  <ItemListContainer greetings="ESTOS SON LOS PRODUCTOS QUE USTED BUSCA:"/>
                } />                
                <Route path='/item/:id' element ={
                  <ItemDetailContainer/>
                } />                
                <Route path='/cart' element ={
                  <Cart/>
                } />                
                <Route path='*' element ={
                  <NotFound/>
                } />
                
                

              </Routes>
      </BrowserRouter> 
    </Provider> 
  )
}

export default App
