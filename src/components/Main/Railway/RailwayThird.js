import React from 'react';
import RailwaySecond from './RailwaySecond';
import Seat from './Seat';

export default function RailwayThird ({seatsAvailable}) {
  return (
     <>
     <RailwaySecond seatsAvailable={seatsAvailable}/>
   <div className='railway-seats-list bottom-row'>
      <div className='railway-seats-block'>
          <Seat number={33} seatsAvailable={seatsAvailable}/>
          <Seat number={34} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={35} seatsAvailable={seatsAvailable}/>
          <Seat number={36} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={37} seatsAvailable={seatsAvailable}/>
          <Seat number={38} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={39} seatsAvailable={seatsAvailable}/>
          <Seat number={40} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={41} seatsAvailable={seatsAvailable}/>
          <Seat number={42} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={43} seatsAvailable={seatsAvailable}/>
          <Seat number={44} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={45} seatsAvailable={seatsAvailable}/>
          <Seat number={46} seatsAvailable={seatsAvailable}/>
      </div>
      <div className='railway-seats-block'>
        <Seat number={47} seatsAvailable={seatsAvailable}/>
          <Seat number={48} seatsAvailable={seatsAvailable}/>
      </div>
          
    </div>
    </>
  )
}