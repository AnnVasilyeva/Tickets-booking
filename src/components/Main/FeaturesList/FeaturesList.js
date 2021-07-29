import React from 'react';

export default function FeaturesList ({departureInfo}) {
  const {have_wifi, have_air_conditioning, is_express} = departureInfo;
  
  let list = [];
  
  if(have_wifi) {
      list.push({
          src: "/images/icon-wifi.png",
          alt: "icon wi-fi"
      })
  } 
  
//   if(питание) {
//       list.push({
//           src: "/images/icon-cup.png",
//           alt: "icon питание",
          
//       })
//   }

  if(have_air_conditioning) {
    list.push({
        src: "/images/icon-air-conditioning.png",
        alt: "icon conditioning",
        
    })
}
  
  if(is_express) {
      list.push({
          src: "/images/icon-express.png",
          alt: "icon express"
      })
  }

  const featuresItems = list.map((item, index) => 
      <li className="ticket-features-icon" key={index}>
          <img src={item.src} alt={item.alt}/>							
      </li>)

  return (
    <ul className="ticket-features-list">
      {featuresItems}
    </ul>   
  )

}