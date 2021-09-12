import React, {useState} from 'react';

export default function Seat ({seatsAvailable, number, seatsListChange}) {
  
  const [selectedSeat, setSelectedSeat] = useState(false);
  const isAvailable = () => seatsAvailable.includes(number);

  const pushOnSeatsList = (seatNumber) => {
    if(seatsAvailable.includes(number)) {
      setSelectedSeat(!selectedSeat);
      seatsListChange(seatNumber);
    } else {
      return
    }
    
  }

  const getClassName = () => {
    let a = '', 
        b = '';
    if(seatsAvailable.includes(number)) {a = 'available'}
    if(selectedSeat) {b = 'selected'}
    return `railway-seat ${a} ${b}`
  }

  
    return (
    <div 
      className={getClassName()}
      aria-hidden='true'
      onClick={() => pushOnSeatsList(number)}
      >{number}</div>
   
    )
}