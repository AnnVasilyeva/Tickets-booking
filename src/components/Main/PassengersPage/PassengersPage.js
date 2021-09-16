import React, {Component} from "react";
import './passengersPage.css';
import FormattingData from "../../../services/formattingData";
import AsideTrainInfo from "./AsideTrainInfo";
import FormPassenger from "./FormPassenger";

export default class PassengersPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      departureInfo: false,
      arrivalInfo: false,
      passengersInfo: false,
      passengersList: this.props.ticketsInfo.selectedSeats.map((seat)=> {
        return {
          seat: seat,
          isOpen: false
        }
      })
    }

    this.formattingData = new FormattingData();

  }

  changePassengerItem(id) {
    // 1. Make a shallow copy of the items
    let passengersList = [...this.state.passengersList];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...passengersList[id]};
    // 3. Replace the property you're intested in
    item.isOpen = !item.isOpen;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    passengersList[id] = item;
    // 5. Set the state to our new copy
    this.setState({passengersList});
  }


  summary (price) {
    const adult = Number(this.props.ticketsInfo.adult);
    const children = Number(this.props.ticketsInfo.children);
    
    return (price * (adult + children));
  }

  render() {
    
    const {departureInfo, arrivalInfo, passengersInfo, passengersList} = this.state;
    const {adult, children, selectedSeats, departure: {from, to, min_price}} = this.props.ticketsInfo;
    const {getDateTime} = this.formattingData;

    

    console.log(passengersList);
    return (
      <div className="container-order-page">
      
        <aside className="order-page-sidebar">					
          <h2>Детали поездки</h2>
          <section className="time-filter departure-time-filter">
            <div className="time-filter-top">
              <div className="time-filter-title departure-time-filter-title">
                <div className="time-icon departure-time-icon">
                  <img src="/images/icon-departure.png" alt="icon arrow-right"/>
                </div>
                <div className="time-name">Туда</div>
              </div>
              <div className="departure-time-date">{getDateTime(from.datetime)}</div>
              <div className={`time-filter-btn departure-time-filter-btn ${departureInfo && "active"}`}
                  aria-hidden='true'
                  onClick={() => this.setState({departureInfo: !departureInfo})}></div>
            </div>
        {departureInfo && 
         <AsideTrainInfo trainInfo={this.props.ticketsInfo.departure} 
                        formattingData={this.formattingData}
                        isDeparture={true}/>
        }
			</section>

      {/* В разделе "arrival-time-filter" должна быть информация из this.props.ticketsInfo.arrival , но этот объект не приходит с бэка, сделала заглушку из departure */}

      {/* И не понятно откуда брать цену на билеты, в информации о местах она не приходит, сделала заглушки 1200 */}
			
			<section className="time-filter arrival-time-filter">
        <div className="time-filter-top">
          <div className="time-filter-title arrival-time-filter-title">
            <div className="time-icon arrival-time-icon">
              <img src="/images/icon-arrival.png" alt="icon arrow-left"/>
            </div>
            <div className="time-name">Обратно</div>
          </div>
          <div className="arrival-time-date">{getDateTime(to.datetime)}</div>
          <div className={`time-filter-btn arrival-time-filter-btn ${arrivalInfo && "active"}`}
                aria-hidden='true'
                onClick={() => this.setState({arrivalInfo: !arrivalInfo})}></div>
        </div>
        {arrivalInfo && 
           <AsideTrainInfo trainInfo={this.props.ticketsInfo.departure} 
           formattingData={this.formattingData}
           isDeparture={false}/>
        }
			</section>
          
      <section className="time-filter passengers-filter">
        <div className="time-filter-top">
          <div className="time-filter-title passengers-title">
            <div className="time-icon passengers-icon">
              <img src="/images/passengers.png" alt="icon man"/>
            </div>
            <div className="time-name">Пассажиры</div>
          </div>
          <div className={`time-filter-btn passengers-filter-btn ${passengersInfo && "active"}`}
              aria-hidden='true'
              onClick={() => this.setState({passengersInfo: !passengersInfo})}></div>
        </div>
        {passengersInfo && 
          <div className='time-filter-bottom passengers-info'>
            {Number(adult) > 0 &&
              <div className='passengers-type'>
                <div>{adult} Взрослых</div>
                <div className='ticket-price'>
                  <span>{min_price}</span>
                  <div className='value-image'>
                    <img src="/images/icon-value.png" alt="icon value"/>
                  </div>
                </div>
              </div> 
            }
            {Number(children) > 0 && 
              <div className='passengers-type'>
                <div>{children} Ребенок</div>
                <div className='ticket-price'>
                  <span>{min_price}</span>
                  <div className='value-image'>
                    <img src="/images/icon-value.png" alt="icon value"/>
                  </div>
                </div>
              </div>
            }   
          </div>
        }

			</section>

      <section className="time-filter summary">
        <span>Итог</span>
        <div className='ticket-price'>
          <div className='summary-value'>{this.summary(min_price)}</div>
          <div className='value-image'>
            <img src="/images/icon-value.png" alt="icon value"/>
          </div>
        </div>
        
      </section>

        </aside>
        <section className="order-page-passengers-info">
          <div className='order-page-passengers-list'>
            {passengersList.map((seat, index) => 
            <div className='passenger-item' key={seat.seat}
                 aria-hidden='true' 
                 onClick={()=> this.changePassengerItem(index)}>
              <div className='passenger-item-top'>
                <div className={`passenger-item-top_btn ${seat.isOpen ? 'passenger-close' : 'passenger-open'}`}></div>
                
                <div className='passenger-item-top_title'>Пассажир {index + 1}</div>
              </div> 
              {seat.isOpen && 
                <FormPassenger/>
              }    
            </div>
            )}
            
          </div>
          <button className='order-page-passengers-btn'>Далее</button>
        </section>
      
        	
      
      </div>	
    )
  }
}