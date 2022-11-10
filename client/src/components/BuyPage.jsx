import axios from "axios";
import React from "react";
import SpotlightItem from "./SpotlightItem";
import NavBar from "./mainComponents/NavBar";

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
            <hr></hr>
            <NavBar/>
            <div className="main-section">
              <div className="item-container">
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
        </div>
    );
  }
}

export default BuyPage; 