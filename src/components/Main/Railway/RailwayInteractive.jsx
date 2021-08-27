import React from 'react';
import '../Railway/railwayInteractive.css';
import RailwayFirst from './RailwayFirst';
import RailwayFourth from './RailwayFourth';
import RailwaySecond from './RailwaySecond';
import RailwayThird from './RailwayThird';


export default function RailwayInteractive ({railwayClass, railwayNumber, seats}) {

  const seatsAvailable = seats.map((seat) => {
    if(seat.available) {
      return seat.index
    }
  })
  
  return (
    // в railway добавляется класс {first, second, third, fourth}
    <div className={`railway ${railwayClass}`}>
      <div className='railway-number'>{railwayNumber}</div>
      <div className='railway-cover'>
        {railwayClass === 'first' && <RailwayFirst seatsAvailable={seatsAvailable}/>}
        {railwayClass === 'second' && <RailwaySecond seatsAvailable={seatsAvailable}/>}
        {railwayClass === 'third' && <RailwayThird seatsAvailable={seatsAvailable}/>}
        {railwayClass === 'fourth' && <RailwayFourth seatsAvailable={seatsAvailable}/>}
      </div>
      
    </div>
  )
}