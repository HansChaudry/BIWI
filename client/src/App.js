import { BrowserRouter, Route, Routes, useParams, Navigate} from 'react-router-dom';
import '../src/App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import {RegisterRouter} from './components/Register/RegisterPage'
import SellPage from './components/SellPage/SellPage';
import BuyPage from './components/BuyPage/BuyPage'
import AccountPage from './components/AccountPage/AccountPage';
import ProductPage from './components/ProductPage/ProductPage'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { useCookies } from 'react-cookie';

const App = () =>{
  const [cookies, setCookie] = useCookies(['user']);

  let updateCookie = (data) => { 
    setCookie('UserID', data, {path : '/'});
    setCookie('Verified', true, {path : '/'});
  }

  let emptyCookie = () => { 
    setCookie('UserID', '', {path : '/'});
    setCookie('Verified', false, {path : '/'});
    window.location.reload()
  }

  return(
    <div className='main-box'>
      <Header user_ID={cookies.UserID}/>
      <div className='main-section'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={!cookies.Verified || cookies.Verified === 'false' ? <Navigate replace to="/login"/> : <HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
            <Route path='/buy/:catergory' element={<SwitchBuyPage/>}/>
            <Route path="/login" element={!cookies.Verified || cookies.Verified === 'false' ? <LoginPage updateUser={updateCookie}/> : <Navigate replace to={"/"}/>}></Route>
            <Route path='/register' element={cookies.Verified === 'true' ? <Navigate replace to="/"/> : <RegisterRouter/>}></Route>
            <Route path="/userAccount/:id" element={cookies.Verified === 'true' ? <SwitchAccountPage func={emptyCookie}/> : <Navigate replace to="/login"/>}/>
            <Route path='/product/:id' element={<SwitchProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
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

function SwitchAccountPage(props){
  let {id} = useParams();
  return(
    <AccountPage user_ID={id} func={props.func}/>
  );
}

function Header(props) {
  return (
    <header>
        <a id="title" href="/">BIWI</a>
        <div className="header-icon-box">
          <a href="/"><ReceiptOutlinedIcon/></a>
          <a href="/"><ShoppingCartOutlinedIcon/></a>
          <a href={`/userAccount/${props.user_ID}`}><PermIdentityOutlinedIcon/></a>
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
