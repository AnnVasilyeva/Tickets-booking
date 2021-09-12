import React, {Component} from "react";
import './passengersPage.css';

export default class PassengersPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      departureInfo: false,
      arrivalInfo: false,
      passengersInfo: false
    }

  }
  render() {
    console.log(this.props.ticketsInfo);
    const {departureInfo, arrivalInfo, passengersInfo} = this.state;

    return (
      <div className="container-order-page">
      
        <aside className="order-page-sidebar">					
          <h2>Детали поездки</h2>
          <div className="time-filter departure-time-filter">
            
              <div className="time-filter-title departure-time-filter-title">
                <div className="time-icon departure-time-icon">
                  <img src="/images/icon-departure.png" alt="icon arrow-right"/>
                </div>
                <div className="time-name">Туда</div>
              </div>
              <div className="departure-time-date">30.08.2018</div>
              <div className={`time-filter-btn departure-time-filter-btn ${departureInfo && "active"}`}
                  aria-hidden='true'
                  onClick={() => this.setState({departureInfo: !departureInfo})}></div>
            
				

        {departureInfo && 
          <div>Hello</div>
        }
			</div>
			
			<div className="time-filter arrival-time-filter">
				<div className="time-filter-title arrival-time-filter-title">
					<div className="time-icon arrival-time-icon">
						<img src="/images/icon-arrival.png" alt="icon arrow-left"/>
					</div>
					<div className="time-name">Обратно</div>
				</div>
        <div className="arrival-time-date">30.08.2018</div>
				<div className={`time-filter-btn arrival-time-filter-btn ${arrivalInfo && "active"}`}
              aria-hidden='true'
              onClick={() => this.setState({departureInfo: !arrivalInfo})}></div>
			</div>
          
      <div className="time-filter passengers-filter">
				<div className="time-filter-title passengers-title">
					<div className="time-icon passengers-icon">
						<img src="/images/passengers.png" alt="icon man"/>
					</div>
					<div className="time-name">Пассажиры</div>
				</div>
				<div className={`time-filter-btn passengers-filter-btn ${passengersInfo && "active"}`}
             aria-hidden='true'
             onClick={() => this.setState({departureInfo: !passengersInfo})}></div>
			</div>

        </aside>
        <section className="order-page-passengers-info">
          World
        </section>
      
        	
      
      </div>	
    )
  }
}