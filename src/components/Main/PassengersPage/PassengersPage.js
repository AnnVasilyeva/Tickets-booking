import React, {Component} from "react";
import './passengersPage.css';
import FormattingData from "../../../services/formattingData";
import AsideTrainInfo from "./AsideTrainInfo";
import FormPassenger from "./FormPassenger";
import PaymentForm from "./PaymentForm";
import Ticket from "../Ticket/Ticket";

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
      }),
      formPassengersList: []
    }

    this.formattingData = new FormattingData();

  }

  changeFormPassengersList = (passenger) => {
    // console.log(passenger);
    let formPassengersList = [...this.state.formPassengersList];
    
    if(formPassengersList.length > 0) {

      if (!formPassengersList.find(prevPassenger => prevPassenger.seat == passenger.seat)) {
        formPassengersList.push(passenger);
      } else {
        formPassengersList = formPassengersList.map(prevPassenger => {
          if(prevPassenger.seat === passenger.seat) {
            return passenger
          }  else {return prevPassenger}
        });
      }

      this.setState({formPassengersList: formPassengersList});
      

    } else {
      this.setState({formPassengersList: [...formPassengersList, passenger]});
    }
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

  getVerification = (state) => {
    this.props.getVerificationPage(state, this.props.history);
  }

  redirectPageVerification = (title) => {
    this.props.redirectPage(title, this.props.history);
  }


  render() {
    
    const {departureInfo, arrivalInfo, passengersInfo, passengersList, formPassengersList} = this.state;
    const {adult, children, departure: {from, to, min_price}} = this.props.ticketsInfo;
    const {getDateTime} = this.formattingData;
    
    return (
      
      <div className='container-order-page passenger-page-sidebar'>
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
    <section className={`order-page-passengers-info ${this.props.isPayment && 'order-page-payment-page'} ${this.props.isVerification && 'order-page-verification-page'}`}>
      {!this.props.isPayment && 
      <>
      <div className='order-page-passengers-list'>
      {passengersList.map((seat, index) => 
      <div className='passenger-item' key={seat.seat}>
        <div className={seat.isOpen ? 'passenger-item-top open' : 'passenger-item-top'}>
          <div>
            <div className={`passenger-item-top_btn ${seat.isOpen ? 'passenger-close' : 'passenger-open'}`}
                aria-hidden='true' 
                onClick={()=> this.changePassengerItem(index)}></div>
            
            <div className='passenger-item-top_title'>Пассажир {index + 1}</div>
          </div>  
          {seat.isOpen && <div className='delete-passenger-btn'
          aria-hidden='true' onClick={() => this.changePassengerItem(index)}></div>}
        </div> 
        {seat.isOpen && 
          <FormPassenger seat={seat.seat} changeFormPassengersList={this.changeFormPassengersList}/>
        }    
      </div>
      )}
      
    </div>
    <button className={`order-page-passengers-btn ${passengersList.length === formPassengersList.length && 'active'}`}
    onClick={() => this.props.getPaymentPage(formPassengersList, this.props.ticketsInfo, this.props.history)}
    >Далее</button>
    </>
    }
    {this.props.isPayment && !this.props.isVerification && <PaymentForm getVerification={this.getVerification}/>}
    {this.props.isVerification && 
      <>
        <section className='verification verification-train'>
          <div className='verification-title'>Поезд</div>
          <ul className="found-routes-list">
            <Ticket ticket={this.props.ticketsInfo} getSeatSelection={this.changeTrain} isVerificate={true} redirectPage={this.redirectPageVerification}/>
          </ul>
        </section>
        <section className='verification verification-passengers'>
          <div className='verification-title'>Пассажиры</div>
          <div className='verification-passengers-main'>
            <ul className='verification-passengers-list'>
              {this.props.allPassengerList.length > 0 && this.props.allPassengerList.map((passenger, index)=> 
                <li key={index} className='verification-passengers-item'>
                  <div className='verification-passengers-item-avatar'>
                    <div className='passenger-avatar'></div>
                    <span className='person_type'>{passenger.person_type === 'is_adult' ? 'Взрослый' : 'Детский'}</span>
                  </div>
                  <div className='verification-passengers-item-info'>
                    <span>{`${passenger.last_name} ${passenger.first_name} ${[passenger.patronymic]}`} </span>
                    <span>{`Пол ${passenger.gender ? 'мужской' : 'женский'}`}</span>
                    <span>{`Дата рождения ${passenger.birthday}`}</span>
                    <span>{`${passenger.document_type} ${passenger.document_series} ${passenger.document_number}`}</span>

                  </div>
                </li>
              )}
            </ul>
            <div className='verification-passengers-tickets-price'>
              <div className="tickets-price-summary">
                <span>Всего</span>
                <div className='ticket-price'>
                  <div className='summary-value'>{this.summary(min_price)}</div>
                  <div className='value-image'>
                    <img src="/images/icon-value.png" alt="icon value"/>
                  </div>
                </div>
              </div>
              <button className="btn-seat-selection" 
                            onClick={() => this.redirectPageVerification('/routes/order')}
                            >Изменить</button>
            </div>
          </div>
        </section>
        <section className='verification verification-payment'>
          <div className='verification-title'>Способ оплаты</div>
          <div className='verification-payment-wrapper'>
            <div className='verification-payment_method'>{this.props.user.payment_method === "online" ? 'Онлайн' : "Наличными"}</div>
            <div className='verification-payment-btn'>
              <button className="btn-seat-selection" 
                            onClick={() => this.redirectPageVerification('/routes/order/payment')}
                            >Изменить</button>
            </div>
            
          </div>
          
        </section>
        <section className='verification-btn'>
          <button className="btn-seat-selection" 
                            onClick={() => this.props.postOrderForm(this.summary(min_price), this.props.ticketsInfo, this.props.allPassengerList, this.props.user, this.props.history)}
                            >Подтвердить</button>
        </section>

      </>
    }
      
    </section>    
    </div>	
    )
  }
}