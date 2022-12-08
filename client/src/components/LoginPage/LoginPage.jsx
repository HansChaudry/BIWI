import React, { useState } from "react";
import axios from "axios";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import '../LoginPage/Login.css'


const LoginPage = (props) => {
  let [state, setState] = useState({
    email: '',
    password:''
  });

  let handleChange = ({target}) => {
    const { name, value } = target;
    setState((prevValues) => {
      return {
        ...prevValues,
        [name] : value
      };
    });
  }

  let submitForm = (event) => {
    event.preventDefault();
    const payload = {
      email: state.email,
      password: state.password
    };

    axios({
      url: '/data/users/auth',
      method: 'POST',
      data: payload 
    })
      .then((data) => {
        setState({
          email: '',
          password: ''
        })
        props.updateUser(data.data);
        window.location.reload();
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

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
          <form className="login-card-form" onSubmit={submitForm}>
              <div className="form-item">
                  <EmailOutlined className="form-item-icon"/>
                  <input 
                    type="text" 
                    name="email" 
                    id="userName" 
                    placeholder="Enter your email" 
                    value={state.email}
                    onChange={handleChange}
                  />
              </div>
              <div className="form-item">
                  <LockOutlinedIcon className="form-item-icon"/>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    value={state.password}
                    onChange={handleChange}
                  />
              </div>
              <div className="form-item-other">
                  {/* <div className="checkbox">
                      <input type="checkbox" id="rememberMeCheckbox" checked/>
                      <label for="rememberMeCheckbox">Remember me</label>
                  </div> */}
                  <a href="/">Forgot your password? That's tuff</a>
              </div>
              <button>Sign In</button>
          </form>
          <div className="login-card-footer">
              Don't have an account? <a href="/register">Create a free account.</a>
          </div>
        </div>
    </div>
  );
}

export default LoginPage;