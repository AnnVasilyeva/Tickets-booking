import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage";
import Footer from "./components/Footer/Footer";

function App() {
  

  return (
    
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' render={props => <Header {...props} isOrderPage={false}/>}/>
        <Route path='/routers' render={props => <Header {...props} isOrderPage={true}/>}/> 
      </Switch>   
      <main>
        <Switch>
            <Route exact path='/' component={MainFirstPage}/>
            <Route path='/routers' component={MainOrderPage}/>
        </Switch>
      </main>
        <Footer/> 
      </Router>
    </div>
    
  );
}

export default App;
