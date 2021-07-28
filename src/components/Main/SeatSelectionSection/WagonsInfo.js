import React from 'react';

export default function WagonsInfo ({wagonsList}) {
  console.log(wagonsList);
  return (
    <section className='seat-selection-wagons-info'>
      <header>
        <div className='wagons-sort'>
          <h4>Вагоны</h4>
          <ul className='wagons-sort-list'>
            {wagonsList.map((wagon) => <li key={wagon.id}>{wagon.name}</li>)}
          </ul>
        </div>
        <div>Нумерация вагонов начинается с головы поезда</div>
        
      </header> 
    </section>  
  )
}