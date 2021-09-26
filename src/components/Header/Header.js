/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './header.css';
import SearchTicketsForm from "../SearchTicketsForm/SearchTicketsForm";
import Progressbar from './Progressbar';


export default function Header (props) {

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

    <header id="header" className={`header ${props.isOrderPage && 'order-page'} ${props.isSuccessfulOrder && 'successful-order-page'}`}>
        <div className="header-logo">Лого</div>
        <nav className="header-menu">
            <ul className="menu-list">
                {navLinksList.map((item, index) => <li className="menu-item" key={index} onClick={() => redirectHomePage(item.href)} onKeyPress={() => redirectHomePage(item.href)}><a className="menu-item-link" href={item.href}>{item.title}</a></li>)}
            </ul>
        </nav>
        <div className="header-main">
            {props.isSuccessfulOrder ?
                <h1 className="header-title">Благодарим Вас за заказ!</h1> :
                <h1 className="header-title">
                    <span>Вся жизнь -</span>
                    <span>путешествие!</span>
                </h1>
            }
            
            {!props.isSuccessfulOrder && <SearchTicketsForm addRoutes={addRoutes}/>}            
        </div>
    <div className="header-progressbar">
        {props.isOrderPage && <Progressbar isPassangerPage={props.isPassangerPage} isPayment={props.isPayment} isVerification={props.isVerification}/>}
    </div>
    </header>


)}