/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './header.css';
import SearchTicketsForm from "../SearchTicketsForm/SearchTicketsForm";
import Progressbar from './Progressbar';


export default function Header (props) {
    
    const mainPage = 'header';
    const orderPage = ' order-page';

    const navLinksList = [
        {href: '#info', title: 'О нас'},
        {href: '#features', title: 'Как это работает'},
        {href: '#reviews', title: 'Отзывы'},
        {href: '#contacts', title: 'Контакты'},

    ];

    const redirectHomePage = (id) => {
        props.history.push(`/${id}`);
    }

    const addRoutes = (item) => {
        props.getRoutesObject(item, props.history);
    }


    return (

    <header id="header" className={props.isOrderPage ? mainPage + orderPage : mainPage}>
        <div className="header-logo">Лого</div>
        <nav className="header-menu">
            <ul className="menu-list">
                {navLinksList.map((item, index) => <li className="menu-item" key={index} onClick={() => redirectHomePage(item.href)} onKeyPress={() => redirectHomePage(item.href)}><a className="menu-item-link" href={item.href}>{item.title}</a></li>)}
            </ul>
        </nav>
        <div className="header-main">
            <h1 className="header-title">
                <span>Вся жизнь -</span>
                <span>путешествие!</span>
            </h1>
            <SearchTicketsForm addRoutes={addRoutes}/>
        </div>
    <div className="header-progressbar">
        {props.isOrderPage && <Progressbar/>}
    </div>
    </header>


)}