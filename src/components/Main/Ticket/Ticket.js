import React, {useState} from 'react';
import './ticket.css';
import FormattingData from '../../../services/formattingData';

export default function Ticket ({ticket}) {
    // console.log(ticket);
    
    const formattingData = new FormattingData();

    const {have_wifi, have_air_conditioning, is_express, min_price, arrival, departure} = ticket;

        // this.featuresList = [
        //     {
        //         isHave: have_wifi,
        //         src: "/images/icon-wifi.png",
        //         alt: "icon wi-fi"
        //     },
        //     {
        //         isHave: have_air_conditioning,
        //         src: "/images/icon-cup.png",
        //         alt: "icon conditioning"
        //     },
        //     {
        //         isHave: is_express,
        //         src: "/images/icon-express.png",
        //         alt: "icon express"
        //     },           
        // ]
	// }

    const RailwayCarriageList = ({departureInfo}) => {
        const {available_seats_info, price_info} = departureInfo;
        let list = [];
        for(let seats in available_seats_info) {
            for(let price in price_info) {
               if(seats === price) {
                let item = {name: seats, seats: available_seats_info[seats], ...price_info[price]};
                list.push(item);
               }     
            }
        }

        const items = list.map((item, index) => {
            let name;
            switch(item.name) {
                case 'first': name = 'Люкс';
                break;
                case 'second': name = 'Купе';
                break;
                case 'third': name = 'Плацкарт';
                break;
                case 'fourth': name = 'Сидячий';
                break;
                default: 'No info';
                break;
            }            
            return <RailwayCarriageItem key={index} name={name} price={item.bottom_price} count={item.seats}/>
        })
        
        return (
            <ul className="railway-carriage-list">
                {items}
            </ul>
        )
    }

    const RailwayCarriageItem = ({name, price, count}) => {
        return (
            <li className="railway-carriage-item">
            <div className="railway-carriage_class">{name}</div>
            <div className="railway-carriage-seats_info">{count}</div>
            <div className="railway-carriage-price_info ticket-cost">
            <span>от</span>
            <span className="cost">{price}</span>
            <div className="icon-value">
                <img src="/images/icon-value.png" alt="russian ruble"/>
            </div>
            </div>
        </li>
        )
    }

    return (
        <li className="found-routes-item">
            <header>
                <div className="train-/images">
                    <img src="/images/train.png" alt="train"/>
                </div>
                <div className="train-number">{departure.train.name}</div>
                <div className="train-departure-city">
                    {/* <div className="departure-start-city">
                        <span>Адлер</span>
                        <img src="/images/arrow-gray.png" alt="arrow"/>
                    </div> */}
                    <div className="departure-select-city">
                        <span>{formattingData.ucFirst(departure.from.city.name)}</span>
                        <img src="/images/arrow-black.png" alt="arrow"/>
                    </div>
                </div>
                <div className="train-arrival-city">{formattingData.ucFirst(departure.to.city.name)}</div>
            </header>
            
            <main>
                <section className="section-train-info">
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">{formattingData.formattedDatetime(departure.from.datetime)}</span>
                        <span className="departure-from-city">{formattingData.ucFirst(departure.from.city.name)}</span>
                        <span className="departure-from-railway_station railway_station">{departure.from.railway_station_name}</span>
                    </div>
                    <div className="duration">
                        <span>{formattingData.formattedDuration(departure.duration)}</span>
                        <div className="departure-arrow">
                            <img src="/images/arrow-gold-right.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">{formattingData.formattedDatetime(departure.to.datetime)}</span>
                        <span className="arrival-from-city">{formattingData.ucFirst(departure.to.city.name)}</span>
                        <span className="arrival-from-railway_station railway_station">{departure.to.railway_station_name}</span>
                    </div>
                    
                </section>

                {arrival && <section className="section-train-info">
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">{formattingData.formattedDatetime(arrival.to.datetime)}</span>
                        <span className="arrival-from-city">{formattingData.ucFirst(arrival.to.city.name)}</span>
                        <span className="arrival-from-railway_station railway_station">{arrival.to.railway_station_name}</span>
                    </div>
                    <div className="duration">
                        <span>{formattingData.formattedDuration(arrival.duration)}</span>
                        <div className="arrival-arrow">
                            <img src="/images/arrow-gold-left.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">{formattingData.formattedDatetime(arrival.from.datetime)}</span>
                        <span className="departure-from-city">{formattingData.ucFirst(arrival.from.city.name)}</span>
                        <span className="departure-from-railway_station railway_station">{arrival.from.railway_station_name}</span>
                    </div>
                    
                </section>
                }
                
                
                </main>
                <footer>
                <section className="railway-carriage">
                    <RailwayCarriageList departureInfo={departure}/>
                    <div className="railway-carriage-features">
                        <ul className="ticket-features-list">
                 {/* пока не знаю как реализовать проверку возможностей поезда */}
                            {/* {featuresList.map(item => {item.isHave &&
                                <li className="ticket-features-icon">
                                    <img src={item.src} alt={item.alt}/>		
                                </li>
                            })} */}

                            <li className="ticket-features-icon">
                                <img src="/images/icon-wifi.png" alt="icon wi-fi"/>							
                            </li>
                            <li className="ticket-features-icon">
                                <img src="/images/icon-express.png" alt="icon express"/>
                            </li>
                            <li className="ticket-features-icon">
                                <div className="icon-cup-wrapper">
                                    <img src="/images/icon-cup.png" alt="icon cup"/>
                                    <img src="/images/icon-plate.png" alt="icon plate"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="btn-seat-selection">Выбрать места</div>
                </section>
            </footer>
        </li>
    )
                        
                        }

