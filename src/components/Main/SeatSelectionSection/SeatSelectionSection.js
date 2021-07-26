import React from 'react';
import './seatSelectionSection.css';
import FormattingData from '../../../services/formattingData';

export default function SeatSelectionSection ({ticket}) {
  console.log(ticket);

  const {departure} = ticket;

  const formattingData = new FormattingData();

   return (
     <section className='order-page-seat-selection'>
       <h2>Выбор мест</h2>
       <div className='seat-selection-part seat-selection-departure'>

         <header className='seat-selection-button-wrapper'>
             <div>
               <img src='/images/arrow-white-next.png' alt='arrow-white' width='30' height='20'/>
             </div>
             <button>Выбрать другой поезд</button>
         </header>

         <main className='seat-selection-main-info'>
           <section className='seat-selection-ticket-info'>
            <div className='train-info'>
             <div className='train-icon'>
              <img src='/images/icon-train-small.png' alt='train icon' width='30' height='30'/>
             </div>
             <div className='train-name'>
              <div className="train-number">{departure.train.name}</div>
              <div className="train-departure-city">
                <div className="departure-select-city">
                  <span>{formattingData.ucFirst(departure.from.city.name)}</span>
                  <img src="/images/arrow-black.png" alt="arrow"/>
                </div>
              </div>
              <div className="train-arrival-city">{formattingData.ucFirst(departure.to.city.name)}</div>
             </div>          
            </div>

            <div className='departure-info'>
              <div className="train-departure">
                  <span className="departure-from-datetime datetime">{formattingData.formattedDatetime(departure.from.datetime)}</span>
                  <span className="departure-from-city">{formattingData.ucFirst(departure.from.city.name)}</span>
                  <span className="departure-from-railway_station railway_station">{departure.from.railway_station_name}</span>
              </div>
                    
                  <div className="departure-arrow">
                      <img src="/images/arrow-gold-right.png" alt="arrow"/>
                  </div>
             
              <div className="train-arrival">
                  <span className="arrival-from-datetime datetime">{formattingData.formattedDatetime(departure.to.datetime)}</span>
                  <span className="arrival-from-city">{formattingData.ucFirst(departure.to.city.name)}</span>
                  <span className="arrival-from-railway_station railway_station">{departure.to.railway_station_name}</span>
              </div>
            </div>

            <div className='duration-info'>
              <div className='duration-icon'>
                <img src='/images/icon-clock.png' alt='icon-clock' width='30' height='30'/>
              </div>
              <div className='duration-formatting'>
                <div>{formattingData.formattedDurationHours(departure.duration)}</div>
                <div>{formattingData.formattedDurationMinutes(departure.duration)}</div>
              </div>
              
            </div>
            
           </section>

           <section className='seat-selection-ticket-count'>
             <h3>Количество билетов</h3>
             <form className='ticket-count-form'>
               <div className='count-form'>
                 <input/>
               </div>
               <div className='count-form'>
                 <input/>
               </div>
               <div className='count-form'>
                 <input/>
               </div>
             </form>
           </section>    
         </main>
       </div>

       <div className='seat-selection-part seat-selection-arrival'></div>

     </section>
   )
}