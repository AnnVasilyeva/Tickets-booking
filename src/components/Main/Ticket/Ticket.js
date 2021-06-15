import React from 'react';

export default function Ticket ({item}) {
    console.log(item);

    const {have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, is_express, min_price, arrival, departure, avaliable_seats_info} = item;

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

        // const seatsList = [
        //     {
        //         isHave: departure.have_first_class,
        //         name: 'Люкс',
        //         price: departure.price_info.first.bottom_price,
        //         count: departure.avaliable_seats_info.first
        //     },
        //     {
        //         isHave: departure.have_second_class,
        //         name: 'Купе',
        //         price: departure.price_info.second.bottom_price,
        //         count: departure.avaliable_seats_info.second
        //     },
        //     {
        //         isHave: departure.have_third_class,
        //         name: 'Плацкарт',
        //         price: departure.price_info.third.bottom_price,
        //         count: departure.avaliable_seats_info.third
        //     },
        //     {
        //         isHave: departure.have_fourth_class,
        //         name: 'Сидячий',
        //         price: departure.price_info.fourth.bottom_price,
        //         count: departure.avaliable_seats_info.fourth
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

    const ucFirst = (str) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    }

  
    const formattedDuration = (timeSec) => {
        const hours = Math.floor(timeSec / 60 / 60);
        const minutes = Math.floor(timeSec / 60) - (hours * 60);

        return [hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0')].join(':');

    }  

    const formattedDatetime = (timeMs) => {
        const minutes = Math.floor((timeMs / (1000 * 60)) % 60),
            hours = Math.floor((timeMs / (1000 * 60 * 60)) % 24);
        
      return `${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}`
    }

    // console.log(departure);

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
                        <span>{ucFirst(departure.from.city.name)}</span>
                        <img src="/images/arrow-black.png" alt="arrow"/>
                    </div>
                </div>
                <div className="train-arrival-city">{ucFirst(departure.to.city.name)}</div>
            </header>
            
            <main>
                <section className="section-train-info">
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">{formattedDatetime(departure.from.datetime)}</span>
                        <span className="departure-from-city">{ucFirst(departure.from.city.name)}</span>
                        <span className="departure-from-railway_station railway_station">{departure.from.railway_station_name}</span>
                    </div>
                    <div className="duration">
                        <span>{formattedDuration(departure.duration)}</span>
                        <div className="departure-arrow">
                            <img src="/images/arrow-gold-right.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">{formattedDatetime(departure.to.datetime)}</span>
                        <span className="arrival-from-city">{ucFirst(departure.to.city.name)}</span>
                        <span className="arrival-from-railway_station railway_station">{departure.to.railway_station_name}</span>
                    </div>
                    
                </section>

                {arrival && <section className="section-train-info">
                    <div className="train-arrival">
                        <span className="arrival-from-datetime datetime">{formattedDatetime(arrival.to.datetime)}</span>
                        <span className="arrival-from-city">{ucFirst(arrival.to.city.name)}</span>
                        <span className="arrival-from-railway_station railway_station">{arrival.to.railway_station_name}</span>
                    </div>
                    <div className="duration">
                        <span>{formattedDuration(arrival.duration)}</span>
                        <div className="arrival-arrow">
                            <img src="/images/arrow-gold-left.png" alt="arrow"/>
                        </div>
                    </div>
                    <div className="train-departure">
                        <span className="departure-from-datetime datetime">{formattedDatetime(arrival.from.datetime)}</span>
                        <span className="departure-from-city">{ucFirst(arrival.from.city.name)}</span>
                        <span className="departure-from-railway_station railway_station">{arrival.from.railway_station_name}</span>
                    </div>
                    
                </section>
                }
                
                
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
                        })}
                         */}
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

