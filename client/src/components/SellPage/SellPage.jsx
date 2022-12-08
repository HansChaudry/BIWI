import axios from "axios";
import React, { useitem } from "react";
import '../SellPage/SellPage.css'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { useState } from "react";

const SellPage = () => {
  const [item, updateItem] = useState({
    itemName: '',
    startBid: '',
    description: '',
    imgLink: ''
  });

  let handleChange = ({target}) => {
    const { name, value } = target;
    updateItem((prevValues) => {
      return{
        ...prevValues,
        [name]: value
      }
    });
  }

  let submitItem = (event) => {
    event.preventDefault();
    const payload = {
      itemName: item.itemName,
      currentBid: item.startBid,
      imageURL: item.imgLink,
      isRecent: false,
      isTrending: false,
      isRecommended: false,
      description: item.description
    };

    axios({
      url: '/data/save',
      method: 'POST',
      data: payload 
    })
      .then(() => {
        updateItem({
          itemName: '',
          startBid: '',
          description: '',
          imgLink: ''
        });
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  return(
    <div className="sellpage-card-container">
      <div className="sellpage-card">
        <div class="login-card-logo">
          <img src={process.env.PUBLIC_URL + '/item.png'} alt="logo"/>
        </div>
        <div class="login-card-header">
          <h1>New Item Info Form</h1>
          <div>Please take your time</div>
        </div>
        <form className="sell-card-form" onSubmit={submitItem}>
          <div className="form-item">
            <ClassOutlinedIcon className="form-item-icon"/>
            <input 
              type="text"
              name="itemName"
              placeholder="Enter Item name"
              value={item.itemName}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <LinkOutlinedIcon className="form-item-icon"/>
            <input 
              type="url"
              name="imgLink"
              placeholder="Enter image url"
              value={item.imgLink}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <span className="">Buy Now : </span>
            <input 
              type="number"
              name="startBid"
              placeholder="0"
              value={item.startBid}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <span className="">Starting Bid : </span>
            <input 
              type="number"
              name="startBid"
              placeholder="0"
              value={item.startBid}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <textarea 
              name="description"
              placeholder="Additional information about the item" 
              cols="30" 
              rows="10"
              value={item.description}
              onChange={handleChange}
            />
          </div>
          <button className="sell-card-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SellPage; 