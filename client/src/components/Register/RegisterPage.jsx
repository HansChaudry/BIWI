import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../Register/Register.css'

class RegisterPage extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    passwordCopy: '',
    username: ''
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name] : value});
  }

  submitForm = (event) => {
    event.preventDefault();
    const payload = {
      firstName: this.state.firstName,  
      lastName: this.state.lastName,
      maidenName: '', 
      age: this.state.age,
      gender: '',     
      email:  this.state.email,
      phone: '',      
      username: this.state.username,
      password: this.state.password,   
      birthDate: '',
      profileIMG: '',         
      ip: '',
      address: {
        address: '',
        city: '',
        coordinates: {
          lat: 0,
          lng: 0
        },
        postalCode: '',
        state: ''
      },
      bank: {
        cardExpire: '',
        cardNumber: '',
        cardType: '',
        currency : '',
        iban: ''
      },
      recentAuctions: [],
      userAuctions: [],
      pastAuctions: [],
      currentAuctions: [] 
    };

    axios({
      url: '/data/users/registration',
      method: 'POST',
      data: payload 
    })
      .then((data) => {
        this.props.navigate('/login');
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

  render(){
    return(
      <div className="register-card-container">
        <div className="register-card">
          <div className="register-card-logo">
            <img src={process.env.PUBLIC_URL + '/BIWIlogo.png'} alt="logo"/>
          </div>
          <div className="register-card-header">
            <h1>Register</h1>
            <div>Please double check your information</div>
          </div>
          <form onSubmit={this.submitForm} className="register-card-form">
            <div className="form-item">
              {/* <EmailOutlined className="form-item-icon"/> */}
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                placeholder="First name" 
                value={this.state.firstName}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-item">
              {/* <LockOutlinedIcon className="form-item-icon"/> */}
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="Last name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-item">
              {/* <LockOutlinedIcon className="form-item-icon"/> */}
              <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-item">
              {/* <LockOutlinedIcon className="form-item-icon"/> */}
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-item">
              {/* <LockOutlinedIcon className="form-item-icon"/> */}
              <input 
                type="password" 
                name="passwordCopy" 
                id="passwordCopy" 
                placeholder="Enter your password again"
                value={this.state.passwordCopy}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-item">
              {/* <LockOutlinedIcon className="form-item-icon"/> */}
              <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Enter your userName"
                value={this.state.username}
                onChange={this.handleChange}
              />
          </div>
          <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export function RegisterRouter(props){
  const navigate = useNavigate();
  return(<RegisterPage navigate={navigate}/>)
}


export default RegisterPage;