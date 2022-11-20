import React from 'react';
import { BrowserRouter, Route, Routes, useParams, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import {LoginRouter} from './components/LoginPage/LoginPage';
import SellPage from './components/SellPage/SellPage';
import BuyPage from './components/BuyPage/BuyPage'
import AccountPage from './components/AccountPage';
import Header from "./components/mainComponents/Header";
import Footer from "./components/mainComponents/Footer";


class App extends React.Component{
  state = null;

  updateUser = (user) =>{
    this.setState({user: user});
  }

  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={this.state == null ? <Navigate replace to="/login"/> : <HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
            <Route path='/buy/:catergory' element={<SwitchBuyPage/>}/>
            <Route path="/login" element={<LoginRouter updateUser={this.updateUser}/>}></Route>
            <Route path="/userAccount" element={<AccountPage/>}/>
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
    <div>
      <BuyPage catergory={catergory}/>
    </div>
  );
}

export default App;
