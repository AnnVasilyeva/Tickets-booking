import './mainOrderPage.css';

export default function MainOrderPage () {

    return (
<div className="container-order-page">
	<aside className="order-page-sidebar">
		<section className="sidebar-filters">
		    <div className="date-filter">
				<form className="date-filter-form">
					<fieldset className="form-date-section from-date">
				    		<legend>Дата поездки</legend>
				    		<div className="form-date">
					    		<input className="filter-from-date" type="text" placeholder="ДД/ММ/ГГ" id="from-date-filter" required/>
				    		</div>
					</fieldset>
					
					<fieldset className="form-date-section to-date">
				    		<legend>Дата возвращения</legend>
				    		<div className="form-date">
					    		<input name="to-date-filter" type="text" placeholder="ДД/ММ/ГГ" id="to-date-filter" required/>
				    		</div>
					</fieldset>
	    		</form>
			</div>
			
			<div className="details-filter">
				<ul className="details-list">
					<li className="details-item">
						<div className="icon">
                            <img src="/images/icon-stateroom.png" width="17" height="17" alt="icon stateroom"/>
						</div>
						<span className="details-item-name">Купе</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-joint.png" width="17" height="17" alt="icon joint"/>
						</div>
						<span className="details-item-name">Плацкарт</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-seat.png" width="14" height="23" alt="icon seat"/>
						</div>
						<span className="details-item-name">Сидячий</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-lux.png" width="22" height="20" alt="icon lux"/>
						</div>
						<span className="details-item-name">Люкс</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-wifi.png" width="24" height="19" alt="icon wifi"/>
						</div>
						<span className="details-item-name">Wi-Fi</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-express.png" width="20" height="20" alt="icon-express"/>
						</div>
						<span className="details-item-name">Экспресс</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
				</ul>
			</div>
			
			<div className="cost-filter">
				<h3>Стоимость </h3>
				<div className="from-to-wrapper">
					<span>от</span>
					<span>до</span>
				</div>
				<div className="rangeslider">
					<div className="range-connects">
						<div className="range-connect"></div>
					</div>	
					<div className="range-origin range-origin-lower">
						<div className="range-handle range-handle-lower"></div>
					</div>
					<div className="range-origin range-origin-upper">
						<div className="range-handle range-handle-upper"></div>
					</div>	
                </div>


				<div className="cost-wrapper">
					<span className="min-cost">1920</span>
					<span className="max-cost">7000</span>
				</div>
				
			</div>
			
			<div className="time-filter there-time-filter">
				<div className="time-filter-title there-time-filter-title">
					<div className="time-icon there-time-icon">
						<img src="/images/icon-there.png" alt="icon arrow-right"/>
					</div>
					<div className="time-name">Туда</div>
				</div>
				<div className="time-filter-btn there-time-filter-btn"></div>
			</div>
			
			<div className="time-filter back-time-filter">
				<div className="time-filter-title back-time-filter-title">
					<div className="time-icon back-time-icon">
						<img src="/images/icon-back.png" alt="icon arrow-left"/>
					</div>
					<div className="time-name">Обратно</div>
				</div>
				<div className="time-filter-btn back-time-filter-btn"></div>
			</div>
			
		</section>
		
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
				<span>найдено</span>
				<span className="total-count">20</span>
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
			<li className="found-routes-item">
				<header>
					<div className="train-/images">
						<img src="/images/train.png" alt="train"/>
					</div>
					<div className="train-number">116С</div>
					<div className="train-departure-city">
						<div className="departure-start-city">
							<span>Адлер</span>
							<img src="/images/arrow-gray.png" alt="arrow"/>
						</div>
						<div className="departure-select-city">
							<span>Москва</span>
							<img src="/images/arrow-black.png" alt="arrow"/>
						</div>
					</div>
					<div className="train-arrival-city">Санкт-Петербург</div>
				</header>
				
				<main>
					<section className="section-train-info">
						<div className="train-departure">
							<span className="departure-from-datetime datetime">00:10</span>
							<span className="departure-from-city">Москва</span>
							<span className="departure-from-railway_station railway_station">Курский вокзал</span>
						</div>
						<div className="duration">
							<span>9:42</span>
							<div className="departure-arrow">
								<img src="/images/arrow-gold-right.png" alt="arrow"/>
							</div>
						</div>
						<div className="train-arrival">
							<span className="arrival-from-datetime datetime">09:52</span>
							<span className="arrival-from-city">Санкт-Петербург</span>
							<span className="arrival-from-railway_station railway_station">Ладожский вокзал</span>
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
							<li className="railway-carriage-item">
								<div className="railway-carriage_class">Сидячий</div>
								<div className="railway-carriage-seats_info">88</div>
								<div className="railway-carriage-price_info ticket-cost">
									<span>от</span>
									<span className="cost">1920</span>
									<div className="icon-value">
										<img src="/images/icon-value.png" alt="russian ruble"/>
									</div>
					
								</div>
							</li>
							<li className="railway-carriage-item">
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
							</li>

						</ul>
						<div className="railway-carriage-features">
							<ul className="ticket-features-list">
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
			
			<li className="found-routes-item">
				<header>
					<div className="train-/images">
						<img src="/images/train.png" alt="train"/>
					</div>
					<div className="train-number">116С</div>
					<div className="train-departure-city">
						<div className="departure-start-city">
							<span>Адлер</span>
							<img src="/images/arrow-gray.png" alt="arrow"/>
						</div>
						<div className="departure-select-city">
							<span>Москва</span>
							<img src="/images/arrow-black.png" alt="arrow"/>
						</div>
					</div>
					<div className="train-arrival-city">Санкт-Петербург</div>
				</header>
				
				<main>
					<section className="section-train-info">
						<div className="train-departure">
							<span className="departure-from-datetime datetime">00:10</span>
							<span className="departure-from-city">Москва</span>
							<span className="departure-from-railway_station railway_station">Курский вокзал</span>
						</div>
						<div className="duration">
							<span>9:42</span>
							<div className="departure-arrow">
								<img src="/images/arrow-gold-right.png" alt="arrow"/>
							</div>
						</div>
						<div className="train-arrival">
							<span className="arrival-from-datetime datetime">09:52</span>
							<span className="arrival-from-city">Санкт-Петербург</span>
							<span className="arrival-from-railway_station railway_station">Ладожский вокзал</span>
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
							<li className="railway-carriage-item">
								<div className="railway-carriage_class">Сидячий</div>
								<div className="railway-carriage-seats_info">88</div>
								<div className="railway-carriage-price_info ticket-cost">
									<span>от</span>
									<span className="cost">1920</span>
									<div className="icon-value">
										<img src="/images/icon-value.png" alt="russian ruble"/>
									</div>
					
								</div>
							</li>
							<li className="railway-carriage-item">
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
							</li>

						</ul>
						<div className="railway-carriage-features">
							<ul className="ticket-features-list">
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