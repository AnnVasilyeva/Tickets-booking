import React, {Component} from 'react';
import PopupWindow from '../../PopupWindow/PopupWindow';
import './seatSelectionSection.css';
import SelectionPart from './SelectionPart';


export default class SeatSelectionSection extends Component {
  constructor(props) {
    super(props);
    this.state={
      adult: '2',
      children: '0',
      childrenWithoutSeat: '0',
      selectedSeats: [],
      departure: props.ticket.departure
    }
    this.departure = props.ticket.departure;
    // this.arrival = props.ticket.arrival;
  }

  changeStatePassangers = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  changeStateSelectedSeats = (seatsList) => {
    this.setState({selectedSeats: seatsList});
  }

  nextPage = () => {
    this.props.railwaySelectionInfo(this.state);
  }

  render() {
    return (
      <>
      {this.props.wagonsList.length > 0 ? 
      <section className='order-page-seat-selection'>
        <h2>Выбор мест</h2>
          
        <SelectionPart routeInfo={this.departure} 
                      className={'seat-selection-departure'}
                      wagonsList={this.props.wagonsList}
                      changeStatePassangers={this.changeStatePassangers}
                      changeStateSelectedSeats={this.changeStateSelectedSeats}/> 
          
          {/* <SelectionPart routeInfo={arrival} className={'seat-selection-arrival'}/> */}
          <button type='button' className='next-page-btn'
            onClick={()=> this.nextPage()}
          >Далее</button>
      </section>
      : <PopupWindow text={'По выбранному билету мест нет. Попробуйте выбрать другой билет.'} isError={false}/>
      }
        </>
      )
  }
  
}