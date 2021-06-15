import React from 'react';
import './mainFirstPage.css';
import ReviewItem from "../ReviewItem";
import avatar1 from '../mainImage/review1.png';
import avatar2 from '../mainImage/review2.png';


export default function MainFirstPage () {
    const reviewCards = [
        {
            id: 1,
            avatar: avatar1,
            name: 'Екатерина Вальнова',
            text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'
        },
        {
            id: 2,
            avatar: avatar2,
            name: 'Евгений Стрыкало',
            text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.'
        }
    ];

    // const ReviewList = () => {
    //     reviewCards.forEach(item => {
    //         return <ReviewItem item={item} keywords={item.id}/>
    //     })
    // }

    const InfoSection = () => {
        return (
            <section className="info-section" id="info">
                <div className="container">
                    <h2 className="info-title">О нас</h2>
                    <div className="info-main">
                        <div className="info-rectangle"></div>
                        <div className="info-text">
                            <p>Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым
                                днем все больше людей заказывают жд билеты через интернет.</p>
                            <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это
                                делать? Мы расскажем о преимуществах заказа через интернет.</p>

                            <p className="info-text-selection">
                                <span>Покупать жд билеты дешево можно за 90 суток до отправления поезда.</span>
                                <span>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const FeaturesSection = () => {
        return (
            <section className="features-section" id="features">
                <div className="container">
                    <div className="features-top">
                        <h2 className="features-title">Как это работает</h2>
                        <button type="button" className="features-btn">Узнать больше</button>
                    </div>
                    <div className="features-list">
                        <div className="features-item features-order">Удобный заказ на сайте</div>
                        <div className="features-item features-office">Нет необходимости ехать в офис</div>
                        <div className="features-item features-world">Огромный выбор направлений</div>
                    </div>
                </div>
            </section>
        )
    }

    const ReviewsSection = () => {
        return(
            <section className="reviews-section" id="reviews">
                <div className="container">
                    <h2 className="reviews-title">Отзывы</h2>
                    <div className="reviews-main">

                        <ul className="reviews-list">
                            <ReviewItem item={reviewCards[0]}/>
                            <ReviewItem item={reviewCards[1]}/>
                        </ul>
                        <div className="slider-dots">
                            <div className="slider-dot slider-dot-active"></div>
                            <div className="slider-dot"></div>
                            <div className="slider-dot"></div>
                            <div className="slider-dot"></div>
                            <div className="slider-dot"></div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
        <InfoSection/>
        <FeaturesSection/>
        <ReviewsSection/>
        </>
    )

}