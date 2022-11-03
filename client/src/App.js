import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Header from "./components/mainComponents/Header";
import NavBar from "./components/mainComponents/NavBar";
import Footer from "./components/mainComponents/Footer";


class App extends React.Component{
  
  render(){
    return(
      <div>
        <Header/>
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
