import React, {useState} from 'react';
import RailwayInteractive from '../Railway/RailwayInteractive';

export default function WagonsInfo ({wagonsList}) {
  // console.log(wagonsList);

  const [railwaySelected, setRailwaySelected] = useState(0);

  const FeaturesIcons = ({wagon}) => {
    const {have_wifi, have_air_conditioning, is_linens_included} = wagon;
    const [toolTip, setToolTip] = useState(false);
  
  let icons = [];
  
  if(have_wifi) {
    icons.push({
        src: "/images/featuresIcon/icon-wifi-white.png",
        class: "icon wi-fi selected",
        prompt: 'wi-fi'
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-wifi.png",
      class: "icon wi-fi",
      prompt: 'WI-FI'
  })
  }
  
  if(have_air_conditioning) {
    icons.push({
        src: "/images/featuresIcon/icon-air_conditioning-white.png",
        class: "icon conditioning selected", 
        prompt: 'кондиционер'  
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-air_conditioning.png",
      class: "icon conditioning", 
      prompt: 'кондиционер'   
  })
  }

  if(is_linens_included) {
    icons.push({
        src: "/images/featuresIcon/icon-linens-white.png",
        class: "icon linens selected", 
        prompt: 'белье'   
    })
  } else {
    icons.push({
      src: "/images/featuresIcon/icon-linens.png",
      class: "icon linens", 
      prompt: 'белье'   
  })
  }

  // if(питание) {
  //   icons.push({
  //       src: "/images/featuresIcon/icon-cup-white.png",
  //       class: "icon питание selected",
  //       prompt: 'питание'
  //   })
  // } else {
  //   icons.push({
  //     src: "/images/featuresIcon/icon-cup-black.png",
  //     class: "icon питание",
   //    prompt: 'питание'
  // })
  // }

    return (
      <td className='features-icons-list'><ul>
        {icons.map((icon, index) => 
        <li key={index} className={icon.class + ' tooltip'} onMouseEnter={() => setToolTip(index)} onMouseLeave={() => setToolTip('')}>
         {toolTip === index && <span className='tooltiptext'>{icon.prompt}</span>} 
        </li>
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
    return null;
  }

  const WagonClassType = () => {
    return (
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
    )
  }

  return (
  
  <>
  <WagonClassType />
  <section className='seat-selection-wagons-info'>
    <header>
      <div className='wagons-sort'>
        <h4>Вагоны</h4>
        <ul className='wagons-sort-list'>
          {wagonsList.map((wagon, index) => 
          <li className={index === railwaySelected ? 'selected' : ''} 
              key={wagon.coach._id} 
              aria-hidden="true" 
              onClick={() => setRailwaySelected(index)}
          >{`0${index + 1}`}</li>)}
        </ul>
      </div>
      <div>Нумерация вагонов начинается с головы поезда</div>      
    </header> 
    <main>
      <ul className='wagons-list'>
      {wagonsList.map((wagon, index) => {
        if(index === railwaySelected) {
          return (
          <li key={wagon.coach._id} className='wagons-list-item'>
        <div className='wagon-main-info'>
          <div className='wagon-number'>
            <span className='number'>{`0${index + 1}`}</span>
            <span className='text'>вагон</span>
          </div>
          <table className='wagon-info-table'>
            <thead>
              <tr className='wagon-info-table-titles'>
                <td>Места<span>{wagon.coach.avaliable_seats}</span></td>
                <td>Стоимость</td>
                <td>Обслуживание ФПК</td>
              </tr>
            </thead>
            <tbody>
              <WagonSeatsInfo classType={wagon.coach.class_type} wagon={wagon.coach}/>
            </tbody>                           
          </table>
        </div>
        
        <div className='random-peoples-watch'><span>{Math.floor(Math.random() * (19 - 2 + 1)) + 2}</span> человек выбирают места в этом поезде</div>

        <div className='wagon-picture'>
          <RailwayInteractive railwayClass={wagon.coach.class_type} railwayNumber={index + 1} seats={wagon.seats}/>
        </div>
      </li>
          )}
      }       
      )}
      </ul>      
    </main>
  </section> 
        </> 
      )
    }
      
    
    
  
