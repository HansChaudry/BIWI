import React from "react";
import axios from "axios";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import '../LoginPage/Login.css'
import { useNavigate } from "react-router-dom";


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
        this.setState({
          email: '',
          password: ''
        }, () => {
          this.props.updateUser(data.data);
          this.props.navigate('/');
        });
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  render(){
    return(
      <div className="login-card-container">
        <div className="login-card">
            <div className="login-card-logo">
                <img src={process.env.PUBLIC_URL + '/BIWIlogo.png'} alt="logo"/>
            </div>
            <div className="login-card-header">
                <h1>Sign In</h1>
                <div>Please login to use the platform</div>
            </div>
            <form className="login-card-form" onSubmit={this.submitForm}>
                <div className="form-item">
                    <EmailOutlined className="form-item-icon"/>
                    <input 
                      type="text" 
                      name="email" 
                      id="userName" 
                      placeholder="Enter your email" 
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                </div>
                <div className="form-item">
                    <LockOutlinedIcon className="form-item-icon"/>
                    <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="Enter your password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                </div>
                <div className="form-item-other">
                    <div className="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox" checked/>
                        <label for="rememberMeCheckbox">Remember me</label>
                    </div>
                    <a href="#">Forgot your password? That's tuff</a>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <div className="login-card-footer">
                Don't have an account? <a href="/register">Create a free account.</a>
            </div>
          </div>
      </div>
    );
  }
}

export function LoginRouter(props){
  const navigate = useNavigate();
  return(<LoginPage navigate={navigate} updateUser={props.updateUser}/>)
}

export default LoginPage;