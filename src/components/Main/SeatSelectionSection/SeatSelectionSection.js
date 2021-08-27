import React, {useState} from 'react';
import PopupWindow from '../../PopupWindow/PopupWindow';
import './seatSelectionSection.css';
import SelectionPart from './SelectionPart';


export default function SeatSelectionSection ({ticket, wagonsList}) {
  console.log(wagonsList);

  const {departure} = ticket;
  // const {arrival} = ticket;

  const [state, setState] = useState();
  

  return (
  <>
  {wagonsList.length > 0 ? 
  <section className='order-page-seat-selection'>
    <h2>Выбор мест</h2>
      
    <SelectionPart routeInfo={departure} className={'seat-selection-departure'} wagonsList={wagonsList}/> 
      
      {/* <SelectionPart routeInfo={arrival} className={'seat-selection-arrival'}/> */}
      <button type='button' className='next-page-btn'>Далее</button>
  </section>
  : <PopupWindow text={'По выбранному билету мест нет. Попробуйте выбрать другой билет.'} isError={false}/>}
    </>
  )
}