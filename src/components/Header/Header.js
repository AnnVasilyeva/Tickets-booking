import React from 'react';
import './header.css';
import SearchTicketsForm from "../SearchTicketsForm/SearchTicketsForm";


export default function Header () {
    return (
        <>
        <header id="header" className="header">
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
                <SearchTicketsForm/>
            </div>
        </header>
    <div className="header-progressbar"></div>
    </>
)

}