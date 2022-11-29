import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

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
                    id = {item._id} 
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

function RecentItem(props){
  const navigate = useNavigate();
  let goToProduct = ({target}) => {
    const { id } = target;
    navigate(`/product/${id}`);
  }

  return(
    <li>
      <div className="recent-card">
        <img src={props.imgURL} width="100px" height="100px" alt=""/>
        <div className="recent-card-info">
          <p><b>{props.itemName}</b></p>
          <p>{`Current Bid: $${Math.round(props.currentBid * .70)}`}</p>
          <div className="recent-card-buttons">
            <button className="spotlight-card-BTN" id={props.id} onClick={goToProduct}>View Item</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecentBox;