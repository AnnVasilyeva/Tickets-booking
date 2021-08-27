import React from 'react';
import Seat from './Seat';

export default function RailwaySecond ({seatsAvailable}) {
  return (
    <>
    <div className='railway-seats-list top-row'>
          <div className='railway-seats-block'>
            <Seat number={1} seatsAvailable={seatsAvailable}/>
            <Seat number={2} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={3} seatsAvailable={seatsAvailable}/>
            <Seat number={4} seatsAvailable={seatsAvailable}/>
            <Seat number={5} seatsAvailable={seatsAvailable}/>
            <Seat number={6} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={7} seatsAvailable={seatsAvailable}/>
            <Seat number={8} seatsAvailable={seatsAvailable}/>
            <Seat number={9} seatsAvailable={seatsAvailable}/>
            <Seat number={10} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={11} seatsAvailable={seatsAvailable}/>
            <Seat number={12} seatsAvailable={seatsAvailable}/>
            <Seat number={13} seatsAvailable={seatsAvailable}/>
            <Seat number={14} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={15} seatsAvailable={seatsAvailable}/>
            <Seat number={16} seatsAvailable={seatsAvailable}/>
            <Seat number={17} seatsAvailable={seatsAvailable}/>
            <Seat number={18} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={19} seatsAvailable={seatsAvailable}/>
            <Seat number={20} seatsAvailable={seatsAvailable}/>
            <Seat number={21} seatsAvailable={seatsAvailable}/>
            <Seat number={22} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={23} seatsAvailable={seatsAvailable}/>
            <Seat number={24} seatsAvailable={seatsAvailable}/>
            <Seat number={25} seatsAvailable={seatsAvailable}/>
            <Seat number={26} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={27} seatsAvailable={seatsAvailable}/>
            <Seat number={28} seatsAvailable={seatsAvailable}/>
            <Seat number={29} seatsAvailable={seatsAvailable}/>
            <Seat number={30} seatsAvailable={seatsAvailable}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={31} seatsAvailable={seatsAvailable}/>
            <Seat number={32} seatsAvailable={seatsAvailable}/>
          </div>
        
    </div>
    </>
  )
}