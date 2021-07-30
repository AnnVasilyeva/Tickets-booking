import React from 'react';
import './seatSelectionSection.css';
import SelectionPart from './SelectionPart';


export default function SeatSelectionSection ({ticket}) {
  // console.log(ticket);

  const {departure} = ticket;
  // const {arrival} = ticket;

  return (
    <section className='order-page-seat-selection'>
       <h2>Выбор мест</h2>
       <SelectionPart routeInfo={departure} className={'seat-selection-departure'}/>
       {/* <SelectionPart routeInfo={arrival} className={'seat-selection-arrival'}/> */}
       <button type='button' className='next-page-btn'>Далее</button>
    </section>
  )
}