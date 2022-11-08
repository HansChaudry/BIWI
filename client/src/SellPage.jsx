import axios from "axios";
import React from "react";

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
        <div className="form-container">
          <form onSubmit={this.submitItem}>
            <div className="item-form-div1">
              <input 
                type="text"
                name="itemName"
                placeholder="Enter Item name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <input 
                type="url"
                name="imgLink"
                placeholder="Enter image url"
                value={this.state.imgLink}
                onChange={this.handleChange}
              />
            </div>
            <div className="item-form-div2">
              <input 
                type="int"
                name="startBid"
                placeholder="0"
                value={this.state.startBid}
                onChange={this.handleChange}
              />

              <textarea 
                name="description"
                placeholder="Body" 
                cols="30" 
                rows="10"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <button>Submit</button>
            </div>
          </form>
        </div>
      );
  }
}

export default SellPage; 