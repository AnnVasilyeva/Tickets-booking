import React from 'react';

export default function AsideTrainInfo ({trainInfo, isDeparture, formattingData: {ucFirst, formattedDuration, getDateTime, formattedDatetime}}) {
  const {from, to, train, duration} = trainInfo;

  return (
    <div className='time-filter-bottom'>
    <div className='trip-info train-info'>
      <div>№ Поезда</div>
      <div>{train.name}</div>
    </div>
    <div className='trip-info city-info'>
      <div>Название</div>
      <div className='city-name'>
        <div>{ucFirst(from.city.name)}</div>
        <div>{ucFirst(to.city.name)}</div>
      </div>
    </div>
    <div className='trip-info duration-info'>
      {formattedDuration(duration)}
    </div>
    <div className='trip-info time-info'>
      <div className='datetime-from'>
        <span>{formattedDatetime(from.datetime)}</span>
        <span className='datetime-date'>{getDateTime(from.datetime)}</span>
      </div>  
      <div className={isDeparture ? "departure-arrow" : "arrival-arrow"}>
        <img src={isDeparture ? "/images/arrow-gold-right.png" 
                  : "/images/arrow-gold-left.png"} alt="arrow"/>
      </div>    
      <div className='datetime-to'>
        <span>{formattedDatetime(from.datetime)}</span>
        <span className='datetime-date'>{getDateTime(from.datetime)}</span>
      </div>
    </div>
    <div className='trip-info railway-info'>
      <div className='railway_from'>
        <span className="railway-city">{ucFirst(from.city.name)}</span>
        <span className="railway-station">{from.railway_station_name}</span>
      </div>
      <div className='railway_to'>
        <span className="railway-city">{ucFirst(to.city.name)}</span>
        <span className="railway-station">{to.railway_station_name}</span>
      </div>
    </div>
    
  </div>
  )
}