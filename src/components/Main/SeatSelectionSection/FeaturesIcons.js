import React,{useState} from 'react';

export default function FeaturesIcons ({wagon}) {
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