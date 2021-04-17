import { React } from 'react'
import CartWidget from './CartWidget'
import logo from '../resources/objetivo-dalo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = () => {
    return <>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="navbar-brand nav-logo"> <img class="logo" src={logo} alt="dalo" /></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav w-100 d-flex justify-content-around">
                    <li class="nav-item active">
                        <div class="nav-link"><p>Home</p> <span class="sr-only">(current)</span></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"><p>Servicios</p></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"><p>ROLLOS COLOR</p></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"><p>ROLLOS BN</p></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" ><p>Portfolio</p></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"><p>Infotografía</p></div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link" ><p>Revelado</p></div>
                    </li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    </>;
}


export default NavBar;