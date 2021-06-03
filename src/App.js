import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage";
import MainOrderPage from "./components/Main/MainOrderPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOrderPage, setIsOrderPage] = useState(true);

  const changePage = () => {
    setIsOrderPage({isOrderPage: true});
  }

  return (
    <div className="App">
      <Header isOrderPage={isOrderPage} changePage={changePage}/>
      <main>
        {isOrderPage ? <MainOrderPage/> : <MainFirstPage/>}    
      </main>
        <Footer/>

    </div>
  );
}

export default App;
