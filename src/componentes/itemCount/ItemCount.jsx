import { useState } from "react";
import "./itemCount.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCount({onAddtoCart, cantidad}) {
const [count, setCount] = useState(1);

function handleAdd() {
    if(count < cantidad)
    setCount(count + 1);
}

function handleSubstract() {
    setCount(count - 1);
}

return (
    <div className="itemcount_container">
    <small className="smaller">Agregá la cantidad deseada al carrito</small>
    <div className="itemcount_control">
        <button className="btn btn1"disabled={count <= 1}  onClick={handleSubstract}>
        -
        </button>
        <span className="itemcount_count">{count}</span>
        <button className="btn btn1" disabled={count === 10} onClick={handleAdd}>
        +
        </button>
    </div>

    <div className="itemcount_btns d-flex justify-content-center">
        <button className="btn btnAdd" onClick={()=>onAddtoCart(count)}>
        Agregar al carrito
        </button>
    </div>
    </div>
);
}

export default ItemCount;
