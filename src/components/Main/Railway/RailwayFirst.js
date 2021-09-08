import { func } from 'assert-plus'
import React from 'react';
import Seat from './Seat';

export default function RailwayFirst ({seatsAvailable, seatsListChange}) {
  
  return (
    <>
    <div className='railway-seats-list top-row'>
    <div className='railway-seats-block'>
      <Seat number={1} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>           
    </div>
    <div className='railway-seats-block'>
    <Seat number={2} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={3} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    </div>
    <div className='railway-seats-block'>
    <Seat number={4} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={5} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>   
    </div>
    <div className='railway-seats-block'>
    <Seat number={6} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={7} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>            
    </div>
    <div className='railway-seats-block'>
    <Seat number={8} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={9} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>  
    </div>
    <div className='railway-seats-block'>
    <Seat number={10} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={11} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>            
    </div>
    <div className='railway-seats-block'>
    <Seat number={12} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={13} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>         
    </div>
    <div className='railway-seats-block'>
    <Seat number={14} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>
    <Seat number={15} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>  
    </div>
    <div className='railway-seats-block'>
    <Seat number={16} seatsAvailable={seatsAvailable} seatsListChange={seatsListChange}/>          
    </div>
  
</div>
</>
  )
}