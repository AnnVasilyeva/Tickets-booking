import React, {useState} from 'react';

export default function TicketsCountForm () {
  const [adult, setAdult] = useState('2');
  const [children, setChildren] = useState('0');
  const [childrenWithoutSeat, setChildrenWithoutSeat] = useState('0');

  const handleChange = (value, state) => {
    if(value < 0) {value = 0}
    if(value > 9) {value = 9}
    switch(state) {
      case 'setAdult': setAdult(value);
      break;
      case 'setChildren': setChildren(value);
      break;
      case 'setChildrenWithoutSeat': setChildrenWithoutSeat(value);
      break;
      default: console.log('error');
      break;
    }

  }

  return (
    <div className='ticket-count-form'>
      <div className={adult > 0 ? 'count-form' : 'count-form zero'}>
        <span className='input-block'>
          Взрослых - 
          <input value={adult}
               onChange={(e) => handleChange(e.target.value, 'setAdult')}
               type='number'
               className='input-value'/>
        </span> 
        {adult > 0 ? <span className='input-description'>Можно добавить еще 3 пассажиров</span> : ''}       
      </div>
      <div className={children > 0 ? 'count-form' : 'count-form zero'}>
        <span className='input-block'>
          Детских - 
          <input value={children}
               onChange={(e) => handleChange(e.target.value, 'setChildren')}
               type='number'
               className='input-value'/>
        </span>
        {children > 0 ? <span className='input-description'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</span> : ''}  
      </div>
      <div className={childrenWithoutSeat > 0 ? 'count-form' : 'count-form zero'}>
        <span className='input-block'>
          Детских «без места» - 
          <input value={childrenWithoutSeat}
               onChange={(e) => handleChange(e.target.value, 'setChildrenWithoutSeat')}
               type='number'
               className='input-value'/>
        </span>
      </div>
    </div>
  )

}
