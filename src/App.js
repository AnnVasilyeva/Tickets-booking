import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import BookingService from './services/bookingService';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage/MainOrderPage";
import Footer from "./components/Footer/Footer";

function App() {

  const service = new BookingService();
  const [routes, setRoutes] = useState({});
  const [lastRoutes, setLastRoutes] = useState();

  const getRoutesObject = (newRoutes, history) => {
    setRoutes({routes: newRoutes});

    service.getLastRoutes()
      .then(res => setLastRoutes(res))
      .catch(error => console.log(error));

    history.push('/routes');
  };
    
  

  return (
    
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' render={props => <Header {...props} isOrderPage={false} getRoutesObject={getRoutesObject} />}/>
        <Route path='/routes' render={props => <Header {...props} isOrderPage={true} getRoutesObject={getRoutesObject} />}/> 
      </Switch>   
      <main>
        <Switch>
            <Route exact path='/' component={MainFirstPage}/>
            <Route path='/routes' render={props => <MainOrderPage {...props} routes={routes.routes} lastRoutes={lastRoutes}/>}/>
            
        </Switch>
      </main>
        <Footer/> 
      </Router>
    </div>
    
  );
}

export default App;
