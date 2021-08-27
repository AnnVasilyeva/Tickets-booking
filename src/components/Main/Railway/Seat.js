import React from 'react';

export default function Seat ({seatsAvailable, number}) {
  return (
    <div 
    className={seatsAvailable.includes(number) ? "railway-seat available" : "railway-seat"}
    >{number}</div>
    )
}