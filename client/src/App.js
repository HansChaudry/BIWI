import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SellPage from './components/SellPage';
import BuyPage from './components/BuyPage'
import AccountPage from './components/AccountPage';
import Header from "./components/mainComponents/Header";
import Footer from "./components/mainComponents/Footer";


class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
            <Route path='/buy/:catergory' element={<SwitchBuyPage/>}/>
            <Route path="/login" element={<LoginPage/>}></Route>
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
