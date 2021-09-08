import React, {useState} from 'react';

export default function TicketsCountForm ({changePassangersInfo}) {
  const [adult, setAdult] = useState('2');
  const [children, setChildren] = useState('0');
  const [childrenWithoutSeat, setChildrenWithoutSeat] = useState('0');

  const handleChange = (e, state) => {
    if(e.target.value < 0) {e.target.value = 0}
    if(e.target.value > 9) {e.target.value = 9}
    changePassangersInfo(e);

    switch(state) {
      case 'adult': setAdult(e.target.value);
      break;
      case 'children': setChildren(e.target.value);
      break;
      case 'childrenWithoutSeat': setChildrenWithoutSeat(e.target.value);
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
               name='adult'
               onChange={(e) => handleChange(e, 'adult')}
               type='number'
               className='input-value'/>
        </span> 
        {adult > 0 ? <span className='input-description'>Можно добавить еще 3 пассажиров</span> : ''}       
      </div>
      <div className={children > 0 ? 'count-form' : 'count-form zero'}>
        <span className='input-block'>
          Детских - 
          <input value={children}
               name='children'
               onChange={(e) => handleChange(e, 'children')}
               type='number'
               className='input-value'/>
        </span>
        {children > 0 ? <span className='input-description'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</span> : ''}  
      </div>
      <div className={childrenWithoutSeat > 0 ? 'count-form' : 'count-form zero'}>
        <span className='input-block'>
          Детских «без места» - 
          <input value={childrenWithoutSeat}
               name='childrenWithoutSeat'
               onChange={(e) => handleChange(e, 'childrenWithoutSeat')}
               type='number'
               className='input-value'/>
        </span>
      </div>
    </div>
  )

}
