import React from "react";
import NavBar from "./componentes/navbar/NavBar";
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./componentes/itemslistcontainer/ItemListContainer";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import NotFoundPage from "./Page/NotFoundPage";
import {CartContextProvider} from './storage/cartContext'
import CartContainer from "./componentes/cartContainer/CartContainer";
import { exportDataWithBatch } from "./services/firebase";

function App() {
  return (
    /*4 Colocar Provider personalizado */
    <CartContextProvider>
        <button onClick={exportDataWithBatch}>Exportar</button>   
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryid" element={<ItemListContainer/>} />
              <Route path="/item/:itemid" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<CartContainer/>} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
