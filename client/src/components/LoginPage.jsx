import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import EmailOutlined from "@mui/icons-material/EmailOutlined";


class LoginPage extends React.Component{
  state = {
    email: '',
    password:''
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name] : value});
  }

  submitForm = (event) => {
    event.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    axios({
      url: '/data/users/auth',
      method: 'POST',
      data: payload 
    })
      .then((data) => {
        this.navigate('/userAccount')
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  render(){
    return(
      <div class="login-card-container">
        <div class="login-card">
            <div class="login-card-logo">
                <img src={process.env.PUBLIC_URL + '/BIWIlogo.png'} alt="logo"/>
            </div>
            <div class="login-card-header">
                <h1>Sign In</h1>
                <div>Please login to use the platform</div>
            </div>
            <form class="login-card-form">
                <div class="form-item">
                    {/* <span class="form-item-icon material-symbols-rounded">mail</span> */}
                    <EmailOutlined className="form-item-icon"/>
                    <input type="text" placeholder="Enter Email" id="emailForm" 
                    autofocus required/>
                </div>
                <div class="form-item">
                    {/* <span class="form-item-icon material-symbols-rounded">lock</span> */}
                    <LockOutlinedIcon className="form-item-icon"/>
                    <input type="password" placeholder="Enter Password" id="passwordForm"
                     required/>
                </div>
                <div class="form-item-other">
                    <div class="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox" checked/>
                        <label for="rememberMeCheckbox">Remember me</label>
                    </div>
                    <a href="#">I forgot my password!</a>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div class="login-card-footer">
                Don't have an account? <a href="#">Create a free account.</a>
            </div>
          </div>
      </div>
    );
  }
}

export default LoginPage;
        {/* <form onSubmit={this.submitForm}>
          <div className="login-div">
            <h2><LockOutlinedIcon className="login-icon" sx={{fontSize:"50px"}}/></h2>
            <input 
              type="text" 
              name="email" 
              id="userName" 
              placeholder="Email" 
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="login-btn">Login</button>
          </div>
        </form> */}