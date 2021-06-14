import React from 'react';
import './mainOrderPage.css';
import FilterTicketsForm from './FilterTicketsForm/FilterTicketsForm';
import Ticket from './Ticket/Ticket';

export default function MainOrderPage ({routes}) {
	
	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 		routes: this.props.routes,
	// 		have_first_class: false,
	// 		have_second_class: false,
	// 		have_third_class: false,
	// 		have_fourth_class: false,
	// 		have_wifi: false,
	// 		have_air_conditioning: false,
	// 		is_express: false,
	// 		min_price: false,
	// 		arrival: false,
	// 		departure: false,
	// 		total_avaliable_seats: false,

	// 	}
	// }
	
	
		
		// const {have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, is_express, min_price, arrival, departure} = item;

		// const {from, to, price_info, train, duration, avaliable_seats_info} = departure;

	



	
	return (
		<div className="container-order-page">
			<aside className="order-page-sidebar">
				
				<FilterTicketsForm/>
				<section className="sidebar-last-tickets">
					<h2>последние билеты</h2>
					<ul className="last-tickets-list">
						
						<li className="last-tickets-item">
						
						<div className="tickets-item-city">
							<div className="ticket-from-city">
								<span className="city">Санкт-Петербург</span>
								<span className="city-trainstation">Курский вокзал</span>
							</div>
							<div className="ticket-to-city ticket-to-city-right">
								<span className="city">Самара</span>
								<span className="city-trainstation">Московский вокзал</span>
							</div>
						</div>
						
						<div className="tickets-item-features">
							<ul className="ticket-features-list">
								<li className="ticket-features-icon">
									<img src="/images/icon-wifi.png" alt="icon-wifi"/>			
								</li>
								<li className="ticket-features-icon">
									<img src="/images/icon-express.png" alt="icon-express"/>
								</li>
								<li className="ticket-features-icon">
									<div className="icon-cup-wrapper">
										<img src="/images/icon-cup.png" alt="icon-cup"/>
										<img src="/images/icon-plate.png" alt="icon-plate"/>
									</div>
								</li>
							</ul>
							<div className="ticket-cost">
								<span>от</span>
								<span className="cost">2 500</span>
								<div className="icon-value">
									<img src="/images/icon-value.png" alt="russian ruble"/>
								</div>
							</div>
						</div>
							
					</li>
						
						<li className="last-tickets-item">
						
							<div className="tickets-item-city">
								<div className="ticket-from-city">
									<span className="city">Санкт-Петербург</span>
									<span className="city-trainstation">Курский вокзал</span>
								</div>
								<div className="ticket-to-city ticket-to-city-right">
									<span className="city">Самара</span>
									<span className="city-trainstation">Московский вокзал</span>
								</div>
							</div>
							
							<div className="tickets-item-features">
								<ul className="ticket-features-list">
									<li className="ticket-features-icon">
										<img src="/images/icon-wifi.png" alt="icon-wifi"/>							
									</li>
									<li className="ticket-features-icon">
										<img src="/images/icon-express.png" alt="icon-express"/>
									</li>
									<li className="ticket-features-icon">
										<div className="icon-cup-wrapper">
											<img src="/images/icon-cup.png" alt="icon-cup"/>
											<img src="/images/icon-plate.png" alt="icon-plate"/>
										</div>
									</li>
								</ul>
								<div className="ticket-cost">
									<span>от</span>
									<span className="cost">2 500</span>
									<div className="icon-value">
										<img src="/images/icon-value.png" alt="russian ruble"/>
									</div>
								</div>
							</div>
							
						</li>
		
					</ul>
				</section>
			</aside>
			
			<section className="order-page-found-routes">
				<header className="found-routes-header">
					<div className="found-routes-count">
						<span>найдено </span>
						<span className="total-count">{routes.total_count}</span>
					</div>
					<div className="routes-sort">
						<span>сортировать по:</span>
		{/* добавить класс open */}
						<ul className="routes-sort-list open">
							<li className="routes-sort-item selected">времени</li>
							<li className="routes-sort-item">стоимости</li>
							<li className="routes-sort-item">длительности</li>
						</ul>
					</div>
					<div className="routes-limit">
						<span>показывать по:</span>
						<ul className="routes-limit-list">
							<li className="limit-five selected">5</li>
							<li className="limit-ten">10</li>
							<li className="limit-twenty">20</li>
						</ul>
						
					</div>
				</header>
				
				<ul className="found-routes-list">
				{routes.items && routes.items.map((item, index) => {
					console.log(item);
				 return <Ticket item={item} key={index}/>})}
				
				</ul>
				
				{/* <div className="found-routes-list-pagination">
					<a href="#">0</a>
					<a href="#" className="active">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#"></a>
				</div> */}
			</section>
		</div>
		
		
			)
}
	
	
    
