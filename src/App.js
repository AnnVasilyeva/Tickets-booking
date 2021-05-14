import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainFirstPage from "./components/Main/MainFirstPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <MainFirstPage/>
      </main>
        <Footer/>

    </div>
  );
}

export default App;
