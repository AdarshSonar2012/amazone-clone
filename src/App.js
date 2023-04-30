import { Fragment } from 'react';
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/checkout" element={
        <Fragment> 
          <Checkout/>
        </Fragment>
      }/>
      <Route path="/" element={
        <Fragment> 
          <Home/>
        </Fragment>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
