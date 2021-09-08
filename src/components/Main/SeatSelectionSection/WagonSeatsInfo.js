import React from 'react';
import FeaturesIcons from './FeaturesIcons';

export default function WagonSeatsInfo ({classType, wagon}) {
  if(classType == ('first' || 'fourth')) {
    return (   
      <tr>          
        <td></td>
        <td className='wagon-seat-price'>{wagon.price}<img src='/images/icon-value.png' alt='icon price' width='14' height='17'/></td>
        <FeaturesIcons wagon={wagon}/>
      </tr>
    )
  } 
  if (classType == ('second' || 'third')) {
    return (
      <>
      <tr>
        <td className='wagon-seat-info'>Верхние<span>10</span></td>
        <td className='wagon-seat-price'>{wagon.top_price}<img src='/images/icon-value.png' alt='icon price' width='14' height='17'/></td>
        <FeaturesIcons wagon={wagon}/>
      </tr>
      <tr>
        <td className='wagon-seat-info'>Нижние<span>11</span></td>
        <td className='wagon-seat-price'>{wagon.bottom_price}<img src='/images/icon-value.png' alt='icon price' width='14' height='17'/></td>
        <td></td>
      </tr>
    </>
    )
  }
  return null;
}
