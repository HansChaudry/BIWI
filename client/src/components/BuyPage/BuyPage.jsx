import axios from "axios";
import React from "react";
import SpotlightItem from "../HomePage/SpotlightItem";
// import NavBar from "../mainComponents/NavBar";

class BuyPage extends React.Component{
  state = {
    items: []
  }

  componentDidMount= () => {
    this.getItems();
  }

  getItems = () => {
    // eslint-disable-next-line eqeqeq
    if([this.props.catergory] != 'all'){
      console.log(this.props.catergory);
      axios.get(`/data/filter/${this.props.catergory}`)
      .then((response) => {
        const data = response.data;
        this.setState({items: data});
      })
      .catch(() => {
        alert("Error retrieving items")
      });
    }else{
      axios.get('/data')
        .then((response) => {
          const data = response.data;
          this.setState({items: data});
        })
        .catch(() => {
          alert("Error retrieving items")
        });
    }
  }

  render(){
    return(
      <div>
        <h1 className="page-title">Buy Page</h1>
        <br />
        <NavBar/>
        <br />
        <hr></hr>
        <div className="spotlight-box buypage-box">
          {this.state.items.map((item, index) => {
            return(
              <SpotlightItem
                key = {index}
                id = {index} 
                imgURL= {item.thumbnail}
                itemName = {item.itemName}
                currentBid = {'$' + item.currentBid}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BuyPage; 


function NavBar(){
  let catergories = [
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

  return(
      <nav>
          <ul className="catergory-list">
              {catergories.map((item) => {
                  return <li className="catergory"><a className="catergory-link" href={`/buy/${item.toLowerCase()}`} 
                  name={item.toLowerCase()}
                  >{item}</a></li>;
              })}
          </ul>
      </nav>
  );
}
