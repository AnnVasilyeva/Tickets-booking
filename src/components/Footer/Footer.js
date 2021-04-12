import React from 'react';
import './footer.css';

export default function Footer () {

    return (
        <footer className="footer-contacts" id="contacts">
            <div className="container contacts-container">
                <address className="contacts">
                    <h3>Свяжитесь с нами</h3>
                    <ul className="contacts-list">
                        <li className="contacts-item">
                            <div className="contacts-item-logo phone-logo"/>
                            <div className="contacts-item-text phone">8 (800) 000 00 00</div>
                        </li>
                        <li className="contacts-item">
                            <div className="contacts-item-logo email-logo"/>
                            <div className="contacts-item-text email">inbox@mail.ru</div>
                        </li>
                        <li className="contacts-item">
                            <div className="contacts-item-logo skype-logo"/>
                            <div className="contacts-item-text skype">tu.train.tickets</div>
                        </li>
                        <li className="contacts-item">
                            <div className="contacts-item-logo location-logo"/>
                            <div className="contacts-item-text location">г. Москва ул. Московская 27-35 555 555</div>
                        </li>
                    </ul>
                </address>

                <section className="subscribe">
                    <h3>Подписка</h3>
                    <div className="subscribe-form">
                        <form>
                            <label htmlFor="subscribe-email">Будьте в курсе событий</label>
                            <div className="form-container">
                                <input type="email" id="subscribe-email" placeholder="e-mail" required/>
                                    <button type="submit" className="subscribe-form-btn">отправить</button>
                            </div>
                        </form>
                    </div>
                    <div className="social-links">
                        <h3>Подписывайтесь на нас</h3>
                        <ul className="social-list">
                            <li className="social-item">
                                <a href="#0" className="social-link social-link-youtube"/>
                            </li>
                            <li className="social-item">
                                <a href="#0" className="social-link social-link-in"/>
                            </li>
                            <li className="social-item">
                                <a href="#0" className="social-link social-link-google"/>
                            </li>
                            <li className="social-item">
                                <a href="#0" className="social-link social-link-facebook"/>
                            </li>
                            <li className="social-item">
                                <a href="#0" className="social-link social-link-twitter"/>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
            <section className="footer-bottom">
                <div className="footer-line"/>
                <div className="container copyrights-container">
                    <div className="footer-logo">Лого</div>
                    <div className="up-btn">
                        <a href="#header" className="up-link"/>
                    </div>
                    <div className="copyrights">
                        <a className="copyright" href="#">2018 web</a>
                    </div>
                </div>
            </section>
        </footer>

)

}