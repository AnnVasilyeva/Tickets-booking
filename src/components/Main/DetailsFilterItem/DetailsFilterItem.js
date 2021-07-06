import React from 'react';

export default function DetailsFilterItem ({item, changeState}) {
  return (
    <li className="details-item">
      <div className="icon">
        <img src={item.src} width={item.width} height={item.height} alt={item.alt}/>
      </div>
      <span className="details-item-title">{item.title}</span>
      <label className="switch">
        <input type="checkbox"
        onChange={() => changeState(item.filterName)}/>
        <span className="slider round"></span>
      </label>						
    </li>
  )
}