import { func } from 'assert-plus'
import React from 'react';
import Seat from './Seat';

export default function RailwayFirst ({seatsAvailable}) {
  
  return (
    <>
    <div className='railway-seats-list top-row'>
    <div className='railway-seats-block'>
      <Seat number={1} seatsAvailable={seatsAvailable}/>           
    </div>
    <div className='railway-seats-block'>
    <Seat number={2} seatsAvailable={seatsAvailable}/>
    <Seat number={3} seatsAvailable={seatsAvailable}/>
    </div>
    <div className='railway-seats-block'>
    <Seat number={4} seatsAvailable={seatsAvailable}/>
    <Seat number={5} seatsAvailable={seatsAvailable}/>   
    </div>
    <div className='railway-seats-block'>
    <Seat number={6} seatsAvailable={seatsAvailable}/>
    <Seat number={7} seatsAvailable={seatsAvailable}/>            
    </div>
    <div className='railway-seats-block'>
    <Seat number={8} seatsAvailable={seatsAvailable}/>
    <Seat number={9} seatsAvailable={seatsAvailable}/>  
    </div>
    <div className='railway-seats-block'>
    <Seat number={10} seatsAvailable={seatsAvailable}/>
    <Seat number={11} seatsAvailable={seatsAvailable}/>            
    </div>
    <div className='railway-seats-block'>
    <Seat number={12} seatsAvailable={seatsAvailable}/>
    <Seat number={13} seatsAvailable={seatsAvailable}/>         
    </div>
    <div className='railway-seats-block'>
    <Seat number={14} seatsAvailable={seatsAvailable}/>
    <Seat number={15} seatsAvailable={seatsAvailable}/>  
    </div>
    <div className='railway-seats-block'>
    <Seat number={16} seatsAvailable={seatsAvailable}/>          
    </div>
  
</div>
</>
  )
}