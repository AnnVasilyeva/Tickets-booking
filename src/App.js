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
  const [isOrderPage, setIsOrderPage] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isVerification, setIsVerification] = useState(false);

  const [allPassengerList, setAllPassengerList] = useState([]);
  const [user, setUser] = useState();
  

  const getRoutesObject = (newRoutes, history) => {
    // console.log(history);
    // console.log(newRoutes);
    setRoutes({routes: newRoutes});

    service.getLastRoutes()
      .then(res => setLastRoutes(res))
      .catch(error => console.log(error));

    setIsOrderPage(true); 
       
    if(history) {history.push('/routes')};
  };

  const getPassangersPage = (passengersInfo, history) => {
    setTicketsInfo(passengersInfo);
    setPassengersPage(true);
    if(history) {history.push('/routes/order')};
  }

  const getPaymentPage = (passengerList, tickets, history) => {
    setAllPassengerList(passengerList);
    setTicketsInfo(tickets);
    setIsPayment(true);
    if(history) {history.push('/routes/order/payment')};
  }

  const getVerificationPage = (userInfo, history) => {
    console.log(userInfo);
    setUser(userInfo);
    setIsVerification(true);
    if(history) {history.push('/routes/order/verification')};
  }

    
  return (
    
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' render={props => <Header {...props} isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/>}/>
        <Route exact path='/routes'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order/payment'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order/verification'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
      </Switch>   
      <main>
        <Switch>
            <Route exact path='/' component={MainFirstPage}/>

{routes ? 
  <Route exact path='/routes' render={ props => <MainOrderPage {...props} routes={routes.routes} lastRoutes={lastRoutes} getPassangersPage={getPassangersPage}/>}/>
: <Redirect to='/'/>}

{passengersPage ? 
  <Route exact path='/routes/order' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment}/>}getVerificationPage={getVerificationPage} isVerification={isVerification}/> 
  : <Redirect to='/routes'/>
}
{isPayment ? 
  <Route exact path='/routes/order/payment' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment} getVerificationPage={getVerificationPage} isVerification={isVerification}/>}/> 
  : <Redirect to='/routes'/>
}
{isVerification ? 
  <Route exact path='/routes/order/verification' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment} getVerificationPage={getVerificationPage} isVerification={isVerification}/>}/> 
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
