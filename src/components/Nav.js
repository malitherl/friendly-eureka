import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
           <nav>
              <h1>Online Tea Store</h1>
               <ul className="nav-Links">
                    <li>
                        <Link to="/home">Home</Link>
                   </li>
                   <li>
                      <Link to="/shop">Shop</Link>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default Nav;
