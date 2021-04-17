import React from 'react'
import { Cart4 } from 'react-bootstrap-icons';

const CartWidget = () => {
    return <>
              <li class ="nav-item">
                 <div class="nav-link cart-link" ><Cart4/></div>
              </li>
    </>;
}

export default CartWidget;