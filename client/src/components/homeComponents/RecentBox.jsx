import React from "react";
import RecentItem from "./RecentItem";
import axios from "axios";

class RecentBox extends React.Component{
  state = {recentItems: []}

  componentDidMount= () => {
    this.getRecents();
  }

  getRecents = () => {
    axios.get('/data/isRecent')
      .then((response) => {
        const data = response.data;
        this.setState({recentItems: data});
      })
      .catch(() => {
        alert("Error retrieving items")
      });
  }

  render(){
    return(
      <div className="recent">
          <ul>
              <p id="recent-title">Recently Viewed</p>
              {this.state.recentItems.map((item, index) => {
                return(
                  <RecentItem
                    key = {index}
                    id = {index} 
                    imgURL= {item.thumbnail}
                    itemName = {item.itemName}
                    currentBid = {item.currentBid}
                  />);
              })}
          </ul>
      </div>
    );

  }
}

export default RecentBox;