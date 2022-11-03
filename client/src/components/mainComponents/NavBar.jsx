import React from "react";

function NavBar(){
    return(
        <nav>
            <ul className="catergory-list">
                <li className="catergory"><a href="">Motors</a></li>
                <li className="catergory"><a href="">Electronics</a></li>
                <li className="catergory"><a href="">Collectibles</a></li>
                <li className="catergory"><a href="">Home & Garden</a></li>
                <li className="catergory"><a href="">Clothing & Accessories</a></li>
                <li className="catergory"><a href="">Toys</a></li>
                <li className="catergory"><a href="">Sporting Goods</a></li>
                <li className="catergory"><a href="">Business & Industrial</a></li>
                <li className="catergory"><a href="">Jewelry & Watches</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;