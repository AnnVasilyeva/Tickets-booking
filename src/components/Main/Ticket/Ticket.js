import React from 'react';

export default function Ticket ({item}) {
    // constructor (props, {item}) {
	// 	super(props);
    //     this.item = item;
	// 	this.state = {
	// 		have_first_class: item.item.have_first_class,
    //         have_second_class: item.have_second_class,
    //         have_third_class: item.have_third_class,
    //         have_fourth_class: item.have_fourth_class,
    //         have_wifi: item.have_wifi,
    //         have_air_conditioning: item.have_air_conditioning,
    //         is_express: item.is_express,
    //         min_price: item.min_price,
    //         arrival: item.arrival,
    //         departure: item.departure,
    //         total_avaliable_seats: item.total_avaliable_seats


		// }
        // this.seatsList = [
        //     {
        //         isHave: this.state.have_first_class,
        //         name: 'Люкс',
        //         price: price_info.first.bottom_price,
        //         count: avaliable_seats_info.first
        //     },
        //     {
        //         isHave: this.state.have_second_class,
        //         name: 'Купе',
        //         price: price_info.second.bottom_price,
        //         count: avaliable_seats_info.second
        //     },
        //     {
        //         isHave: this.state.have_third_class,
        //         name: 'Плацкарт',
        //         price: price_info.third.bottom_price,
        //         count: avaliable_seats_info.third
        //     },
        //     {
        //         isHave: this.state.have_fourth_class,
        //         name: 'Сидячий',
        //         price: price_info.fourth.bottom_price,
        //         count: avaliable_seats_info.fourth
        //     }
        // ];
    
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

    

    console.log('add ticket', item);

    return (
        <li className="found-routes-item">
            <header>
                <div className="train-/images">
                    <img src="/images/train.png" alt="train"/>
                </div>
                <div className="train-number">train.name</div>
                <div className="train-departure-city">
                    <div className="departure-start-city">
                        <span>Адлер</span>
                        <img src="/images/arrow-gray.png" alt="arrow"/>
                    </div>
                    <div className="departure-select-city">
                        <span>from.city</span>
                        <img src="/images/arrow-black.png" alt="arrow"/>
                    </div>
                </div>
                <div className="train-arrival-city">to.city</div>
            </header>
            
            <main>
                <section className="section-train-info">
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">from.datetime</span>
                        <span className="departure-from-city">from.city.name</span>
                        <span className="departure-from-railway_station railway_station">from.railway_station_name</span>
                    </div>
                    <div className="duration">
                        <span>duration</span>
                        <div className="departure-arrow">
                            <img src="/images/arrow-gold-right.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">to.datetime</span>
                        <span className="arrival-from-city">to.city.name</span>
                        <span className="arrival-from-railway_station railway_station">to.railway_station_name</span>
                    </div>
                    
                </section>
                
                <section className="section-train-info">
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">00:10</span>
                        <span className="arrival-from-city">Москва</span>
                        <span className="arrival-from-railway_station railway_station">Курский вокзал</span>
                    </div>
                    <div className="duration">
                        <span>9:42</span>
                        <div className="arrival-arrow">
                            <img src="/images/arrow-gold-left.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">09:52</span>
                        <span className="departure-from-city">Санкт-Петербург</span>
                        <span className="departure-from-railway_station railway_station">Ладожский вокзал</span>
                    </div>
                    
                </section>
                </main>
                <footer>
                <section className="railway-carriage">
                    <ul className="railway-carriage-list">
                        {/* {seatsList.map(item => {item.isHave && 
                            <li className="railway-carriage-item">
                                <div className="railway-carriage_class">{item.name}</div>
                                <div className="railway-carriage-seats_info">{item.count}</div>
                                <div className="railway-carriage-price_info ticket-cost">
                                <span>от</span>
                                <span className="cost">{item.price}</span>
                                <div className="icon-value">
                                    <img src="/images/icon-value.png" alt="russian ruble"/>
                                </div>
                                </div>
                            </li>
                        })} */}
                        
                        {/* <li className="railway-carriage-item">
                            <div className="railway-carriage_class">Плацкарт</div>
                            <div className="railway-carriage-seats_info">52</div>
                            <div className="railway-carriage-price_info ticket-cost">
                                <span>от</span>
                                <span className="cost">2530</span>
                                <div className="icon-value">
                                    <img src="/images/icon-value.png" alt="russian ruble"/>
                                </div>
                
                            </div>
                        </li>
                        <li className="railway-carriage-item">
                            <div className="railway-carriage_class">Купе</div>
                            <div className="railway-carriage-seats_info">24</div>
                            <div className="railway-carriage-price_info ticket-cost">
                                <span>от</span>
                                <span className="cost">3820</span>
                                <div className="icon-value">
                                    <img src="/images/icon-value.png" alt="russian ruble"/>
                                </div>
                
                            </div>
                        </li>
                        <li className="railway-carriage-item">
                            <div className="railway-carriage_class">Люкс</div>
                            <div className="railway-carriage-seats_info">15</div>
                            <div className="railway-carriage-price_info ticket-cost">
                                <span>от</span>
                                <span className="cost">4950</span>
                                <div className="icon-value">
                                    <img src="/images/icon-value.png" alt="russian ruble"/>
                                </div>
                
                            </div>
                        </li> */}

                    </ul>
                    <div className="railway-carriage-features">
                        <ul className="ticket-features-list">
                            {/* {featuresList.map(item => {item.isHave &&
                                <li className="ticket-features-icon">
                                    <img src={item.src} alt={item.alt}/>		
                                </li>
                            })} */}
                            {/* <li className="ticket-features-icon">
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
                            </li> */}
                        </ul>
                    </div>
                    
                    <div className="btn-seat-selection">Выбрать места</div>
                </section>
            </footer>
        </li>
    )
                        
                        }

