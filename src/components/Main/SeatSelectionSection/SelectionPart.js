import React from 'react';
import WagonsInfo from './WagonsInfo';
import FormattingData from '../../../services/formattingData';
import TicketsCountForm from './TicketsCountForm';

export default function SelectionPart ({routeInfo, className, wagonsList, changeStatePassangers,
  changeStateSelectedSeats}) {
  
  const formattingData = new FormattingData();

  const changePassangersInfo = (e) => changeStatePassangers(e);

  const changeSeatsInfo = (seatsList) => changeStateSelectedSeats(seatsList);

   return (
       <div className={`seat-selection-part ${className}`}>

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
              <div className="train-number">{routeInfo.train.name}</div>
              <div className="train-departure-city">
                <div className="departure-select-city">
                  <span>{formattingData.ucFirst(routeInfo.from.city.name)}</span>
                  <img src="/images/arrow-black.png" alt="arrow"/>
                </div>
              </div>
              <div className="train-arrival-city">{formattingData.ucFirst(routeInfo.to.city.name)}</div>
             </div>          
            </div>

            <div className='departure-info'>
              <div className="train-departure">
                  <span className="departure-from-datetime datetime">{formattingData.formattedDatetime(routeInfo.from.datetime)}</span>
                  <span className="departure-from-city">{formattingData.ucFirst(routeInfo.from.city.name)}</span>
                  <span className="departure-from-railway_station railway_station">{routeInfo.from.railway_station_name}</span>
              </div>
                    
                  <div className="departure-arrow">
                    {className == 'seat-selection-departure' ? 
                    <img src="/images/arrow-gold-right.png" alt="arrow"/> :
                    <img src="/images/arrow-gold-left.png" alt="arrow"/>}                     
                  </div>
             
              <div className="train-arrival">
                  <span className="arrival-from-datetime datetime">{formattingData.formattedDatetime(routeInfo.to.datetime)}</span>
                  <span className="arrival-from-city">{formattingData.ucFirst(routeInfo.to.city.name)}</span>
                  <span className="arrival-from-railway_station railway_station">{routeInfo.to.railway_station_name}</span>
              </div>
            </div>

            <div className='duration-info'>
              <div className='duration-icon'>
                <img src='/images/icon-clock.png' alt='icon-clock' width='30' height='30'/>
              </div>
              <div className='duration-formatting'>
                <div>{formattingData.formattedDurationHours(routeInfo.duration)}</div>
                <div>{formattingData.formattedDurationMinutes(routeInfo.duration)}</div>
              </div>
              
            </div>
            
           </section>

           <section className='seat-selection-ticket-count'>
             <h3>Количество билетов</h3>
             <TicketsCountForm changePassangersInfo={changePassangersInfo}/>
           </section>
           {wagonsList.length > 0 && <WagonsInfo wagonsList={wagonsList} changeSeatsInfo={changeSeatsInfo}/>}  
         </main>
       </div>

   )


}