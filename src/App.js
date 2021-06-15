import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage/MainOrderPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [routes, setRoutes] = useState({});

  const getRoutesObject = (newRoutes, history) => {
    console.log('add list')
    setRoutes({routes: newRoutes});
    history.push('/routes');
  };
    
  
  // const addRoutes = (history) => {
  //   console.log('add /routes')
  //   history.push('/routes');
  // }

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
            <Route path='/routes' render={props => <MainOrderPage {...props} routes={routes.routes}/>}/>
            
        </Switch>
      </main>
        <Footer/> 
      </Router>
    </div>
    
  );
}

export default App;
