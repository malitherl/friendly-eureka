import React from 'react';
import {Link} from 'react-router-dom';
import Rainbow from './hoc/Rainbow';

function Nav() {
    return (
        <div>
           <nav>
            <ul id="lhs-links">
                <li>All Products</li>
                <li>About Us</li>
            </ul>            

            <h1>Tea Pot Shop</h1>

            <ul id="rhs-links">
                <li>My Account</li>
                <li>Gift</li>
                <li>Cart</li>
            </ul>
        </nav>
        </div>
    )
}

export default Rainbow(Nav);
