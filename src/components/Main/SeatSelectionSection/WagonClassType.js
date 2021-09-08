import React from 'react';

export default function WagonClassType ({classType}) {
  
return (
  <section className='seat-selection-seat-type'>
          <h3>Тип вагона</h3>
          <ul className='seat-type-list'>
            <li className='seat-type-item'>
            <div>{classType === 'fourth' ? 
              <img src='/images/icon-fourth-class-yellow.png' alt='icon-fourth-class'/> :
              <img src='/images/icon-fourth-class-grey.png' alt='icon-fourth-class'/>}
            </div>
            <span>Сидячий</span>
            </li>
            <li className='seat-type-item'>
            <div>{classType === 'third' ? 
              <img src='/images/icon-third-class-yellow.png' alt='icon-third-class'/> :
              <img src='/images/icon-third-class-grey.png' alt='icon-third-class'/>}
            </div>
            <span>Плацкарт</span>
            </li>
            <li className='seat-type-item'>
            <div>{classType === 'second' ? 
              <img src='/images/icon-second-class-yellow.png' alt='icon-second-class'/> :
              <img src='/images/icon-second-class-grey.png' alt='icon-second-class'/>}
            </div>
            <span>Купе</span>
            </li>
            <li className='seat-type-item'>
            <div>{classType === 'first' ? 
                <img src='/images/icon-first-class-yellow.png' alt='icon-first-class'/> :
              <img src='/images/icon-first-class-grey.png' alt='icon-first-class'/>}
            </div>
            <span>Люкс</span>
            </li>
          </ul>
  </section> 
)
}