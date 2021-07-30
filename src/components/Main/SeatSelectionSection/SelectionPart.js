import React from 'react';
import WagonsInfo from './WagonsInfo';
import FormattingData from '../../../services/formattingData';
import TicketsCountForm from './TicketsCountForm';

export default function SelectionPart ({routeInfo, className}) {
  const wagonsList = [
    {
      "_id": "8957398547397",
      "name": "07",
      "class_type": "first",
      "have_wifi": true,
      "have_air_conditioning": true,
      "price": 4920,
      "top_price": 0,
      "bottom_price": 0,
      "side_price": 0,
      "linens_price": 0,
      "wifi_price": 0,
      "avaliable_seats": 21,
      "is_linens_included": true,
      "seats": [
        {
          "index": 1,
          "available": true
        }
      ]
    },
    {
      "_id": "48309450438",
      "name": "09",
      "class_type": "second",
      "have_wifi": true,
      "have_air_conditioning": false,
      "price": 4920,
      "top_price": 2020,
      "bottom_price": 3030,
      "side_price": 0,
      "linens_price": 0,
      "wifi_price": 0,
      "avaliable_seats": 18,
      "is_linens_included": true,
      "seats": [
        {
          "index": 1,
          "available": true
        }
      ]
    }
  ]

  const formattingData = new FormattingData();

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
             <TicketsCountForm/>
           </section>

           <section className='seat-selection-seat-type'>
             <h3>Тип вагона</h3>
             <ul className='seat-type-list'>
               <li className='seat-type-item'>
                <div><img src='/images/icon-fourth-class-grey.png' alt='icon-fourth-class'/></div>
                <span>Сидячий</span>
               </li>
               <li className='seat-type-item'>
                <div><img src='/images/icon-third-class-grey.png' alt='icon-third-class'/></div>
                <span>Плацкарт</span>
                </li>
               <li className='seat-type-item'>
                <div><img src='/images/icon-second-class-grey.png' alt='icon-second-class'/></div>
                <span>Купе</span>
               </li>
               <li className='seat-type-item'>
                <div><img src='/images/icon-first-class-grey.png' alt='icon-first-class'/></div>
                <span>Люкс</span>
               </li>
             </ul>
           </section> 

           <WagonsInfo wagonsList={wagonsList}/> 
         </main>
       </div>

   )


}