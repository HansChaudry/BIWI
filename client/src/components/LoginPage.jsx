import React from "react";
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";

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
      .then(() => {
        console.log('User aunthenticated');
        this.resetUserInputs();
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  render(){
    return(
      <div className="login-container">
        <form onSubmit={this.submitForm}>
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
        </form>
      </div>
    );
  }
}

export default LoginPage;