import React from 'react';
import './style/navbar.css';

const Navbar = () => {

    return(

        <div className="navbar-container">
            <div className="navbar-items">
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>

    );

}

export default Navbar;