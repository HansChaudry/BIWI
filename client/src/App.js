import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Header from "./components/mainComponents/Header";
// import NavBar from "./components/mainComponents/NavBar";
import SellPage from './SellPage';
import Fork from './components/mainComponents/Fork';
import Footer from "./components/mainComponents/Footer";


class App extends React.Component{
  
  render(){
    return(
      <div>
        <Header/>
        <BrowserRouter>
        <Fork/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path='/sell' element={<SellPage/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
