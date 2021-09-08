import React, {Component} from 'react';
import RailwayInteractive from '../Railway/RailwayInteractive';
import WagonClassType from './WagonClassType';
import WagonSeatsInfo from './WagonSeatsInfo';

export default class WagonsInfo extends Component {
  // console.log(wagonsList);
  constructor(props) {
    super(props);
    this.wagonsList = this.props.wagonsList;

    this.state = {
      railwaySelected: {
        wagon: this.wagonsList[0],
        number: 0
      },
      seatsList: [],
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seatsList != this.state.seatsList) {
      this.props.changeSeatsInfo(this.state.seatsList)
    }
  }

  seatsListChange = (value) => {
    if(this.state.seatsList.includes(value)) {
      const newSeatList = this.state.seatsList.filter((seat)=> {
        return seat != value
      });
      
      this.setState(() => {return {seatsList: newSeatList}});
    } else {
      this.setState((state) => {return {seatsList: [...state.seatsList, value]}});
    }
    
      
  }
  
  render() {
    const {railwaySelected} = this.state;

    return (
    <>
    <WagonClassType classType={railwaySelected.wagon.coach.class_type}/>
    <section className='seat-selection-wagons-info'>
      <header>
        <div className='wagons-sort'>
          <h4>Вагоны</h4>
          <ul className='wagons-sort-list'>
            {this.wagonsList.map((wagon, index) => 
            <li className={wagon.coach._id === railwaySelected.wagon.coach._id ? 'selected' : ''} 
                key={wagon.coach._id} 
                aria-hidden="true" 
                onClick={() => this.setState({railwaySelected: {wagon: wagon, number: index}})}
            >{`0${index + 1}`}</li>)}
          </ul>
        </div>
        <div>Нумерация вагонов начинается с головы поезда</div>      
      </header> 
      <main>
        <ul className='wagons-list'>
        <li key={railwaySelected.wagon.coach._id} className='wagons-list-item'>
          <div className='wagon-main-info'>
            <div className='wagon-number'>
              <span className='number'>{`0${railwaySelected.number + 1}`}</span>
              <span className='text'>вагон</span>
            </div>
            <table className='wagon-info-table'>
              <thead>
                <tr className='wagon-info-table-titles'>
                  <td>Места<span>{railwaySelected.wagon.coach.avaliable_seats}</span></td>
                  <td>Стоимость</td>
                  <td>Обслуживание ФПК</td>
                </tr>
              </thead>
              <tbody>
                <WagonSeatsInfo classType={railwaySelected.wagon.coach.class_type} wagon={railwaySelected.wagon.coach}/>
              </tbody>                           
            </table>
          </div>
          
          <div className='random-peoples-watch'><span>{Math.floor(Math.random() * (19 - 2 + 1)) + 2}</span> человек выбирают места в этом поезде</div>
  
          <div className='wagon-picture'>
            <RailwayInteractive railwayClass={railwaySelected.wagon.coach.class_type} railwayNumber={railwaySelected.number + 1} seats={railwaySelected.wagon.seats} seatsListChange={this.seatsListChange}/>
          </div>
        </li>
        </ul>      
      </main>
    </section> 
    </> 
    )
  }
  
    }
      
    
    
  
