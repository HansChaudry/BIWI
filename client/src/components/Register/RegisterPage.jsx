import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../Register/Register.css'
import { usenewUser } from "react";

const RegisterPage = (props) => {
  const [newUser, setInfo] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
    passwordCopy: '',
    username: ''
  });

  let handleChange = ({target}) => {
    const { name, value } = target;
    setInfo((prevValues) => {
      return {
        ...prevValues,
        [name] : value
      };
    });
  }

  let submitForm = (event) => {
    event.preventDefault();
    const payload = {
      firstName: newUser.firstName,  
      lastName: newUser.lastName,
      maidenName: '', 
      age: newUser.age,
      gender: '',     
      email:  newUser.email,
      phone: '',      
      username: newUser.username,
      password: newUser.password,   
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
        newUser: ''
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
        props.navigate('/login');
      })
      .catch(() => {
        console.log('Internal server error');
      });
  }

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
        <form onSubmit={submitForm} className="register-card-form">
          <div className="form-item">
            {/* <EmailOutlined className="form-item-icon"/> */}
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              placeholder="First name" 
              value={newUser.firstName}
              onChange={handleChange}
            />
        </div>
        <div className="form-item">
            {/* <LockOutlinedIcon className="form-item-icon"/> */}
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              placeholder="Last name"
              value={newUser.lastName}
              onChange={handleChange}
            />
        </div>
        <div className="form-item">
            {/* <LockOutlinedIcon className="form-item-icon"/> */}
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Enter your email"
              value={newUser.email}
              onChange={handleChange}
            />
        </div>
        <div className="form-item">
            {/* <LockOutlinedIcon className="form-item-icon"/> */}
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Enter your password"
              value={newUser.password}
              onChange={handleChange}
            />
        </div>
        <div className="form-item">
            {/* <LockOutlinedIcon className="form-item-icon"/> */}
            <input 
              type="password" 
              name="passwordCopy" 
              id="passwordCopy" 
              placeholder="Enter your password again"
              value={newUser.passwordCopy}
              onChange={handleChange}
            />
        </div>
        <div className="form-item">
            {/* <LockOutlinedIcon className="form-item-icon"/> */}
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Enter your userName"
              value={newUser.username}
              onChange={handleChange}
            />
        </div>
        <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export function RegisterRouter(props){
  const navigate = useNavigate();
  return(<RegisterPage navigate={navigate}/>)
}


export default RegisterPage;