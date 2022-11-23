import React from 'react';
import { BrowserRouter, Route, Routes, useParams, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import {LoginRouter} from './components/LoginPage/LoginPage';
import {RegisterRouter} from './components/Register/RegisterPage'
import SellPage from './components/SellPage/SellPage';
import BuyPage from './components/BuyPage/BuyPage'
import AccountPage from './components/AccountPage';
import ProductPage from './components/ProductPage/ProductPage'
import Header from "./components/mainComponents/Header";
import Footer from "./components/mainComponents/Footer";
import UserProfile from './UserProfile';

class App extends React.Component{
  state = UserProfile.getInfo;

  updateUser = (user) =>{
    this.setState({user: user}, () => {
      UserProfile.setInfo(user);
    });
  }

  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={this.state.user === {} ? <Navigate replace to="/login"/> : <HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
            <Route path='/buy/:catergory' element={<SwitchBuyPage/>}/>
            <Route path="/login" element={this.state.user === {} ? <LoginRouter updateUser={this.updateUser}/> : <Navigate replace to="/userAccount"/>}></Route>
            <Route path='/register' element={<RegisterRouter/>}></Route>
            <Route path="/userAccount" element={<AccountPage/>}/>
            <Route path='/product/:id' element={<SwitchProductPage/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}
  
function SwitchBuyPage(){
  let {catergory} = useParams();
  return(
    <BuyPage catergory={catergory}/>
  );
}

function SwitchProductPage(){
  let {id} = useParams();
  return(
    <ProductPage id={id}/>
  );
}

export default App;
