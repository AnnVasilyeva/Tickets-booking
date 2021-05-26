
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bookingService from "../../services/bookingService";
import CityInput from './CityInput';

export default function SearchTicketsForm () {
    const service = new bookingService();

    const [state, setState] = useState({
        from_city_id: '',
        to_city_id: '',
        date_start: '',
        date_end: '',
    
    });

    const dateParser = (date) => {
        let day;
        let month;

        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        } else {
            day = date.getDate();
        }

        if(date.getMonth() < 10) {
            month = `0${date.getMonth()}`;
        } else {
            month = date.getMonth();
        }

        return `${date.getFullYear()}-${month}-${day}`;

    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(state);
        // this.props.onSearchTickets(this.state);
        // setState({
            // from_city_id: '',
            // to_city_id: '',
            // date_start: '',
            // date_end: '',
        // });
    

    }

    const onChangeState = (inputName, id) => {
        console.log(inputName, id);

        return setState({[inputName]: id}); 
    }
                             


        return (

            <div className="form-search">
                <form className="form-search-ticket" method="get" onSubmit={onSubmitForm}>
                    <fieldset className="form-way-section">
                        <legend>Направление</legend>
                        <div className="form-way">
                           
                          <div className='form-way-from'>
                          <CityInput onChangeState={onChangeState} 
                                     placeholder="Откуда"
                                     name="from_city_id" 
                            />
   
                            </div> 
                            <div className="change-input"></div>
                            <div className='form-way-to'>
                                <CityInput onChangeState={onChangeState} 
                                            placeholder="Куда"
                                            name="to_city_id" 
                                />
                               
                            </div>

                        </div>
                    </fieldset>
                    <fieldset className="form-date-section">
                        <legend>Дата</legend>
                        <div className="form-date">
                            <DatePicker
                                selected={state.date_start}
                                onChange={date => {console.log(date);
                                    setState({date_start: date})}}
                                minDate={new Date()}
                                placeholderText="ДД/ММ/ГГ"
                                autoComplete='off'
                                closeOnScroll={true}
                                dateFormat="dd-MM-yyyy"
                                name="date_start"
                                showDisabledMonthNavigation
                            />
                            <DatePicker
                                selected={state.date_end}
                                onChange={date => {console.log(date);
                                    setState({date_end: date})}}
                                minDate={new Date()}
                                placeholderText="ДД/ММ/ГГ"
                                autoComplete='off'
                                closeOnScroll={true}
                                dateFormat="dd-MM-yyyy"
                                name="date_end"
                                showDisabledMonthNavigation
                            />
                        </div>
                    </fieldset>
                    <button type="submit" className="form-search-btn">Найти билет</button>
                </form>
            </div>

        )
}


