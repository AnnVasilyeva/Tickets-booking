import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import BookingService from './services/bookingService';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage/MainOrderPage";
import Footer from "./components/Footer/Footer";
import PassengersPage from './components/Main/PassengersPage/PassengersPage';


function App() {

  const service = new BookingService();
  const [routes, setRoutes] = useState();
  const [lastRoutes, setLastRoutes] = useState();
  const [passengersPage, setPassengersPage] = useState(false);
  const [ticketsInfo, setTicketsInfo] = useState();
  

  const getRoutesObject = (newRoutes, history) => {
    // console.log(history);
    // console.log(newRoutes);
    setRoutes({routes: newRoutes});

    service.getLastRoutes()
      .then(res => setLastRoutes(res))
      .catch(error => console.log(error));
       
    if(history) {history.push('/routes')};
  };

  const getPassangersPage = (passengersInfo, history) => {
    setTicketsInfo(passengersInfo);
    setPassengersPage(true);
    if(history) {history.push('/routes/order')};
  }

    
  return (
    
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' render={props => <Header {...props} isOrderPage={false} getRoutesObject={getRoutesObject} isPassangerPage={false}/>}/>
        <Route exact path='/routes'>{routes ? <Header isOrderPage={true} getRoutesObject={getRoutesObject} isPassangerPage={false}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order'>{routes ? <Header isOrderPage={true} getRoutesObject={getRoutesObject} isPassangerPage={true}/> : <Redirect to='/'/>}</Route>
      </Switch>   
      <main>
        <Switch>
            <Route exact path='/' component={MainFirstPage}/>

{routes ? 
  <Route exact path='/routes' render={ props => <MainOrderPage {...props} routes={routes.routes} lastRoutes={lastRoutes} getPassangersPage={getPassangersPage}/>}/>
: <Redirect to='/'/>}

{passengersPage ? 
  <Route exact path='/routes/order' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo}/>}/> 
  : <Redirect to='/routes'/>
}

            
        </Switch>
      </main>
        <Footer/> 
      </Router>
    </div>
    
  );
}

export default App;
