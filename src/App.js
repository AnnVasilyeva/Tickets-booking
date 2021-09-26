import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import BookingService from './services/bookingService';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage/MainOrderPage";
import Footer from "./components/Footer/Footer";
import PassengersPage from './components/Main/PassengersPage/PassengersPage';
import SuccessfulOrderPage from './components/SuccessfulOrderPage/SuccessfulOrderPage';


function App () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     routes: {},
  //     lastRoutes: [],
  //     ticketsInfo: {},
  //     isOrderPage: false,
  //     passengersPage: false,
  //     isPayment: false,
  //     isVerification: false,
  //     isSuccessfulOrder: false,
  //     allPassengerList: [],
  //     user: {},
  //   }

  //   this.service = new BookingService();
  // }

  const service = new BookingService();
  const [routes, setRoutes] = useState();
  const [lastRoutes, setLastRoutes] = useState();
  const [ticketsInfo, setTicketsInfo] = useState();

  const [isOrderPage, setIsOrderPage] = useState(false);
  const [passengersPage, setPassengersPage] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isVerification, setIsVerification] = useState(false);

  const [allPassengerList, setAllPassengerList] = useState([]);
  const [user, setUser] = useState();

  const [isSuccessfulOrder, setIsSuccessfulOrder] = useState(false);
  

  const getRoutesObject = (newRoutes, history) => {
    setRoutes({routes: newRoutes});
    // this.setState({routes: newRoutes});

    service.getLastRoutes()
      .then(res => setLastRoutes(res))
      // .then(res => this.setState({lastRoutes: res, isOrderPage: true}))
      .catch(error => console.log(error));

    setIsOrderPage(true); 
       
    if(history) {history.push('/routes')};
  };

  const getPassangersPage = (passengersInfo, history) => {
    setTicketsInfo(passengersInfo);
    setPassengersPage(true);
    // this.setState({
    //   ticketsInfo: passengersInfo, 
    //   passengersPage: true
    // })
    if(history) {history.push('/routes/order')};
  }

  const getPaymentPage = (passengerList, tickets, history) => {
    setAllPassengerList(passengerList);
    setTicketsInfo(tickets);
    setIsPayment(true);
    // this.setState({
    //   allPassengerList: passengerList,
    //   ticketsInfo: tickets,
    //   isVerification: true,
    //   isPayment: true,
    // })
    if(history) {history.push('/routes/order/payment')};
  }

  const getVerificationPage = (userInfo, history) => {
    setUser(userInfo);
    setIsVerification(true);
    // this.setState({
    //   isVerification: true,
    //   user: userInfo,
    // })
    if(history) {history.push('/routes/order/verification')};
  }

  const redirectPage = (title, history) => {
    if(title === '/routes') {
      setPassengersPage(false);
      setIsPayment(false);
      setIsVerification(false);
      // this.setState({
      //   passengersPage: false,
      //   isPayment: false,
      //   isVerification: false,
      // })
    }
    
    if(title === '/routes/order') {
      setIsPayment(false);
      setIsVerification(false);
      // this.setState({
      //   isPayment: false,
      //   isVerification: false,
      // })
    }

    if(title === '/routes/order/payment') {
      setIsVerification(false);
      // this.setState({
      //   isVerification: false,
      // })
    }

    history.push(title);
  }

  const postOrderForm = (ticket, allPassengers, user, history) => {
    const seats = allPassengers.map(passenger => {
      return {
        coach_id: "12341",
        person_info: {
          is_adult: passenger.person_type === 'is_adult',
          first_name: passenger.first_name,
          last_name: passenger.last_name,
          patronymic: passenger.patronymic,
          gender: passenger.gender,
          birthday: passenger.birthday,
          document_type: passenger.document_type,
          document_data: `${passenger.document_series} ${passenger.document_number}`
        },
        seat_number: passenger.seat,
        is_child: passenger.person_type === 'is_child',
        include_children_seat: ticket.childrenWithoutSeat > 0
    }});

    service.postOrder(ticket.departure._id, seats, user)
      .then(res => {
        console.log(res.status);
        // this.setState({
        //   isOrderPage: false,
        //   passengersPage: false,
        //   isPayment: false,
        //   isVerification: false,
        //   isSuccessfulOrder: true
        // })
        setIsOrderPage(false);
        setPassengersPage(false);
        setIsPayment(false);
        setIsVerification(false);
        setIsSuccessfulOrder(true);
        history.push('/routes/order/verification/successful');
      })
      .catch(error => console.log(error));

  }


  //  render() {
  //    const {routes, lastRoutes, isOrderPage, passengersPage, isVerification, isPayment, isSuccessfulOrder, ticketsInfo, allPassengerList, user} = this.state;
  return (
    
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' render={props => <Header {...props} isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/>}/>
        <Route exact path='/routes'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order/payment'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order/verification'>{routes ? <Header isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification}/> : <Redirect to='/'/>}</Route>
        <Route exact path='/routes/order/verification/successful' render={props => <Header {...props} isOrderPage={isOrderPage} getRoutesObject={getRoutesObject} isPassangerPage={passengersPage} isPayment={isPayment} isVerification={isVerification} isSuccessfulOrder={isSuccessfulOrder}/>}/>
      </Switch>   
      <main>
        <Switch>
          <Route exact path='/' component={MainFirstPage}/>

          {routes ? 
            <Route exact path='/routes' render={ props => <MainOrderPage {...props} routes={routes.routes} lastRoutes={lastRoutes} getPassangersPage={getPassangersPage}/>}/>
          : <Redirect to='/'/>}

          {passengersPage && 
            <Route exact path='/routes/order' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment}/>}getVerificationPage={getVerificationPage} isVerification={isVerification}/> 
            
          }
          {isPayment && 
            <Route exact path='/routes/order/payment' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment} getVerificationPage={getVerificationPage} isVerification={isVerification}/>}/> 
            
          }
          {isSuccessfulOrder && 
            <Route exact path='/routes/order/verification/successful' render={props => <SuccessfulOrderPage {...props} user={user}/>} />
          }

          {isVerification &&
            <Route exact path='/routes/order/verification' render={props => <PassengersPage {...props} ticketsInfo={ticketsInfo} getPaymentPage={getPaymentPage} isPayment={isPayment} getVerificationPage={getVerificationPage} isVerification={isVerification} allPassengerList={allPassengerList} user={user} redirectPage={redirectPage} postOrderForm={postOrderForm}/>} /> 
          }     
        </Switch>
      </main>
      <Footer/> 
    </Router>
  </div>  
  );
}


export default App;
