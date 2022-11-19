import React from "react";

class NavBar extends React.Component{
    state = {
        catergories: [
            "All",
            "Smartphones",
            "Laptops",
            "Fragrances",
            "Skincare",
            "Groceries",
            "Home-decoration",
            "Furniture",
            "Tops"
        ]
    }
    render(){
        return(
            <nav>
                <ul className="catergory-list">
                    {this.state.catergories.map((item) => {
                        return <li className="catergory"><a className="catergory-link" href={`/buy/${item.toLowerCase()}`} 
                        name={item.toLowerCase()}
                        >{item}</a></li>;
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;