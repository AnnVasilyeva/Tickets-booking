import React from 'react';
import Seat from './Seat';

export default function RailwaySecond ({seatsAvailable, seatsListChange}) {
  return (
    <>
    <div className='railway-seats-list top-row'>
          <div className='railway-seats-block'>
            <Seat number={1} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={2} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={3} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={4} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={5} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={6} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={7} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={8} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={9} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={10} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={11} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={12} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={13} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={14} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={15} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={16} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={17} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={18} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={19} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={20} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={21} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={22} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={23} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={24} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={25} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={26} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={27} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={28} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={29} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={30} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
          <div className='railway-seats-block'>
            <Seat number={31} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
            <Seat number={32} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
          </div>
        
    </div>
    </>
  )
}