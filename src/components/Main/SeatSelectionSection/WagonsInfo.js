import React from 'react';

export default function WagonsInfo ({wagonsList}) {
  // console.log(wagonsList);

  const FeaturesIcons = ({wagon}) => {
    const {have_wifi, have_air_conditioning, is_linens_included} = wagon;
  
  let icons = [];
  
  if(have_wifi) {
    icons.push({
        src: "/images/featuresIcon/icon-wifi-white.png",
        class: "icon wi-fi selected"
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-wifi.png",
      class: "icon wi-fi"
  })
  }
  
  if(have_air_conditioning) {
    icons.push({
        src: "/images/featuresIcon/icon-air_conditioning-white.png",
        class: "icon conditioning selected",   
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-air_conditioning.png",
      class: "icon conditioning",    
  })
  }

  if(is_linens_included) {
    icons.push({
        src: "/images/featuresIcon/icon-linens-white.png",
        class: "icon linens selected",    
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-linens.png",
      class: "icon linens",    
  })
  }

  // if(питание) {
  //   icons.push({
  //       src: "/images/featuresIcon/icon-cup-white.png",
  //       class: "icon питание selected"
  //   })
  // } else {
  //   icons.push({
  //     src: "/images/featuresIcon/icon-cup-black.png",
  //     class: "icon питание"
  // })
  // }


    return (
      <td className='features-icons-list'><ul>
        {icons.map((icon, index) => 
        <li key={index} className={icon.class}></li>
        )}
      </ul></td>
    )

  }

  const WagonSeatsInfo = ({classType, wagon}) => {
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
  }

  const getWagonPicture = (classType) => {
    switch(classType) {
      case 'first': return '/images/wagon-first.png'
      break;
      case 'second': return '/images/wagon-second.png'
      break;
      case 'third': return '/images/wagon-third.png'
      break;
      case 'fourth': return '/images/wagon-fourth.png'
      break;
      default: return ''
      break;
    }
  }

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
      <main>
        <ul className='wagons-list'>
        {wagonsList.map((wagon) => 
        <li key={wagon.id} className='wagons-list-item'>
          <div className='wagon-main-info'>
            <div className='wagon-number'>
              <span className='number'>{wagon.name}</span>
              <span className='text'>вагон</span>
            </div>
            <table className='wagon-info-table'>
              <thead>
                <tr className='wagon-info-table-titles'>
                  <td>Места<span>{wagon.avaliable_seats}</span></td>
                  <td>Стоимость</td>
                  <td>Обслуживание ФПК</td>
                </tr>
              </thead>
              <tbody>
                <WagonSeatsInfo classType={wagon.class_type} wagon={wagon}/>
              </tbody>                           
            </table>
          </div>
          
          <div className='random-peoples-watch'><span>{Math.floor(Math.random() * (19 - 2 + 1)) + 2}</span> человек выбирают места в этом поезде</div>

          <div className='wagon-picture'>
            <img src={getWagonPicture(wagon.class_type)} alt='wagon seats'/>
          </div>
        </li>
        )}
        </ul>
        
      </main>
    </section>  
  )
}