/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {useState} from 'react';
import bookingService from "../../services/bookingService";

export default function CityInput ({onChangeState, name, placeholder}) {
    const service = new bookingService(); 

    const [citiesList, setCitiesList] = useState({
        list: [],
        value: '',
        listOpen: false
    });
    

    const onChangeInput = (e) => {
        let item;
        
        if(e.target.value.length > 0) {
            service.getCities(e.target.value)
            .then(res => {
            
            setCitiesList({list: res, listOpen: true});
            item = res.find(item => item.name === citiesList.value)
            
            })
            .catch(error => console.log(error));

            setCitiesList({value: e.target.value});


            if(item) {
                onChangeState(name, item._id);
            }

        } else {
            setCitiesList({list: [], listOpen: false}); 
        }
        

    }

    const onClickItem = (item) => {
        
        setCitiesList({value: item.name, listOpen: false});
     
        onChangeState(name, item._id);

    }

   
    return (
        <div className='form-way-from'>
                                <input name={name}
                                       type="text"
                                       placeholder={placeholder}
                                       required
                                       autoComplete='off'
                                       value={citiesList.value}
                                       onChange={onChangeInput}
                                       
                                
                                />
                                {citiesList.listOpen && citiesList.list &&
                                    <ul className='autocomplete'>
                                        {citiesList.list.map(item => <li key={item._id}
                                                    onClick={() => onClickItem(item)}
                                                    onKeyDown={onClickItem}
                                                >{item.name}</li>
                                         )}
                                    </ul>
                                }
                            </div>
    )
}