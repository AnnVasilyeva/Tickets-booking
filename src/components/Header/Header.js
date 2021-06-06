import React from 'react';
import './header.css';
import SearchTicketsForm from "../SearchTicketsForm/SearchTicketsForm";
import Progressbar from './Progressbar';


export default function Header (props) {
    
    const mainPage = 'header';
    const orderPage = ' order-page';

    const routerChange = () => {
        console.log(props.history);
        props.history.push('/routers');
    }


    return (

    <header id="header" className={props.isOrderPage ? mainPage + orderPage : mainPage}>
        <div className="header-logo">Лого</div>
        <nav className="header-menu">
            <ul className="menu-list">
                <li className="menu-item"><a className="menu-item-link" href="#info">О нас</a></li>
                <li className="menu-item"><a className="menu-item-link" href="#features">Как это работает</a></li>
                <li className="menu-item"><a className="menu-item-link" href="#reviews">Отзывы</a></li>
                <li className="menu-item"><a className="menu-item-link" href="#contacts">Контакты</a></li>
            </ul>
        </nav>
        <div className="header-main">
            <h1 className="header-title">
                <span>Вся жизнь -</span>
                <span>путешествие!</span>
            </h1>
            <SearchTicketsForm routerChange={routerChange}/>
        </div>
    <div className="header-progressbar">
        {props.isOrderPage && <Progressbar/>}
    </div>
    </header>


)}