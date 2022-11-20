import axios from "axios";
import React from "react";
import '../SellPage/SellPage.css'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';


class SellPage extends React.Component{
  state = {
    itemName: '',
    startBid: '',
    description: '',
    imgLink: ''
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name]: value});
  }

  submitItem = (event) => {
    event.preventDefault();
    const payload = {
      itemName: this.state.itemName,
      currentBid: this.state.startBid,
      imageURL: this.state.imgLink,
      isRecent: false,
      isTrending: false,
      isRecommended: false,
      description: this.state.description
    };

    axios({
      url: '/data/save',
      method: 'POST',
      data: payload 
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  render(){
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
            <form className="sell-card-form" onSubmit={this.submitItem}>
              <div className="form-item">
                <ClassOutlinedIcon className="form-item-icon"/>
                <input 
                  type="text"
                  name="itemName"
                  placeholder="Enter Item name"
                  value={this.state.itemName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <LinkOutlinedIcon className="form-item-icon"/>
                <input 
                  type="url"
                  name="imgLink"
                  placeholder="Enter image url"
                  value={this.state.imgLink}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <span className="">Buy Now : </span>
                <input 
                  type="number"
                  name="startBid"
                  placeholder="0"
                  value={this.state.startBid}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <span className="">Starting Bid : </span>
                <input 
                  type="number"
                  name="startBid"
                  placeholder="0"
                  value={this.state.startBid}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <textarea 
                  name="description"
                  placeholder="Additional information about the item" 
                  cols="30" 
                  rows="10"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <button className="sell-card-btn">Submit</button>
            </form>
          </div>
        </div>
      );
  }
}

export default SellPage; 