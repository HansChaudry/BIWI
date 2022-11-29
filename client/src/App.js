import React from 'react';
import { BrowserRouter, Route, Routes, useParams, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import {LoginRouter} from './components/LoginPage/LoginPage';
import {RegisterRouter} from './components/Register/RegisterPage'
import SellPage from './components/SellPage/SellPage';
import BuyPage from './components/BuyPage/BuyPage'
import AccountPage from './components/AccountPage';
import ProductPage from './components/ProductPage/ProductPage'
import UserProfile from './UserProfile';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

class App extends React.Component{
  state = 0;

  componentDidMount = () =>{
    this.setState(UserProfile.getInfo);
    console.log(this.state);
  }

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
            <Route path="/" element={this.state === 0 ? <Navigate replace to="/login"/> : <HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
            <Route path='/buy/:catergory' element={<SwitchBuyPage/>}/>
            <Route path="/login" element={this.state === 0 ? <LoginRouter updateUser={this.updateUser}/> : <Navigate replace to="/"/>}></Route>
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

function Header() {
  return (
    <header>
        <a id="title" href="/">BIWI</a>
        <div className="header-icon-box">
          <a href="/"><ReceiptOutlinedIcon/></a>
          <a href="/"><ShoppingCartOutlinedIcon/></a>
          <a href="/login"><PermIdentityOutlinedIcon/></a>
        </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}


export default App;
