import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../cartWidget/CartWidget';
import "../navbar/navbar.css"


/*Llamar funcion total items con useContext  */

function NavBar() {
return (
    <>
    <div className="bg-nav sticky-top">
            <nav className="navbar navbar-expand-sm  navbar-dark">
                <div className="container-fluid navbar-padre">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand logo" to="/">
                                <img src="https://cdn.discordapp.com/attachments/701992486037618688/1075993513138847885/c707fecf487462b9a154828196629cf9.jpg" alt="" width="90" height="80"
                                    className="d-inline-block align-text-center img"/>
                                Ruffino
                            </Link>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-list" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link links" to="/">inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link links" to="/category/perfumes">Perfumes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link links" to="/category/polvo">Maquillajes</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="carrito" to="/cart" >
                    <CartWidget/> 
                    </Link>
                </div>
            </nav>
    </div>
    </>
);
}

export default NavBar;
