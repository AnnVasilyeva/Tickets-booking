
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TestApi from '../../services/bookingService';
import './SearchTicketsForm.css';

export default class SearchTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCity: {name: '', id: ''},  
            toCity: {name: '', id: ''},
            startDate: '',
            endDate: '',
            list: [],
            isOpen: false,
            focusInput: ''
        }
        
        this.server = new TestApi();
    }

    dateParser(date) {
        let day;
        let month;

        if (date.getDate() < 10) {
            day = `0${date.getDate()}`;
        } else {
            day = date.getDate();
        }

        if(date.getMonth()+1 < 10) {
            month = `0${date.getMonth()+1}`;
        } else {
            month = date.getMonth()+1;
        }

        return `${date.getFullYear()}-${month}-${day}`;

    }

   
    onSubmitForm = (e) => {
        e.preventDefault();
    
        const stateForSubmit = {
            from_city_id: this.state.fromCity.id,
            to_city_id: this.state.toCity.id,
            date_start: this.state.startDate ? this.dateParser(this.state.startDate) : '',
            date_end: this.state.endDate ? this.dateParser(this.state.endDate) : '',
        }
        console.log(stateForSubmit);

        this.server.getRoutes(stateForSubmit)
        .then(res => this.props.addRoutes(res))
        .catch(error => console.log(error));

        // this.props.routerChange();

        this.setState({
            fromCity: {name: '', id: ''},
            toCity: {name: '', id: ''},
            startDate: '',
            endDate: '',
            isOpen: false,
            list: [], 
            focusInput: ''
        })

        
    }

    onChangeValue = (e) => {
        
        if(e.target.value.length > 0) {
            this.server.getCities(e.target.value)
            .then(res => {this.setState({list: res, isOpen: true})})
            .catch(error => console.log(error));
        } else {
            this.setState({isOpen: false}) 
        }
        
        this.setState({[e.target.name]: {name: e.target.value}, focusInput: e.target.name});

        if(this.state.list.length > 0) {
            this.state.list.forEach(item => {
                item.name === e.target.value && this.setState({[e.target.name]: {id: item._id}});
            })
        } 
    }

    onClickItem = (item) => {
        this.setState({[this.state.focusInput]: {name: item.name, id: item._id},
                         isOpen: false, focusInput: ''});
    
    }

    onFocus = () => {
        this.setState({list: [], isOpen: false, focusInput: ''})
    }

    

    render () {
        
        const {fromCity, toCity, startDate, endDate, isOpen, list, focusInput} = this.state;

        return (

        <div className="form-search">
        <form className="form-search-ticket" method="get" onSubmit={this.onSubmitForm}>
            <div className='form-wrapper'>
            <fieldset className="form-way-section">
                <legend>Направление</legend>
                <div className="form-way">
                    <div className='form-way-from'>
                        <input name="fromCity"
                            type="text"
                            placeholder="Откуда"
                            autoComplete="off"
                            required
                            value={fromCity.name}
                            onChange={this.onChangeValue}
                            onFocus={this.onFocus}
                            
                        />
                        {isOpen && focusInput === 'fromCity' && 
                            <ul className='autocomplete'>
                                {list.map(item => <li key={item._id}
                                            onClick={() => this.onClickItem(item)}
                                            onKeyPress={() => this.onClickItem(item)}
                                        >{item.name}</li>
                                    )}
                            </ul>
                        }
                        </div>
                    <div className="change-input"></div>
                    <div className='form-way-to'>
                        <input name="toCity" 
                                type="text" 
                                placeholder="Куда" 
                                autoComplete="off" 
                                required 
                                value={toCity.name} 
                                onChange={this.onChangeValue}
                                onFocus={this.onFocus}
                                
                        />
                        {isOpen && focusInput === 'toCity' && 
                            <ul className='autocomplete'>
                                {list.map(item => <li key={item._id}
                                            onClick={() => this.onClickItem(item)}
                                            onKeyPress={() => this.onClickItem(item)}
                                        >{item.name}</li>
                                    )}
                            </ul>
                        }
                    </div>
                </div>
            </fieldset>
            <fieldset className="form-date-section">
                <legend>Дата</legend>
                <div className="form-input_date">
                        <DatePicker
                            selected={startDate}
                            onChange={date => this.setState({startDate: date})}
                            onFocus={this.onFocus}
                            minDate={new Date()}
                            placeholderText="ДД/ММ/ГГ"
                            closeOnScroll={true}
                            dateFormat="dd-MM-yyyy"
                            name="startDate"
                            autoComplete="off" 
                            showDisabledMonthNavigation
                        />
                        <div className='empty-wrapper'></div>
                        <DatePicker
                            selected={endDate}
                            onChange={date => this.setState({endDate: date})}
                            onFocus={this.onFocus}
                            minDate={new Date()}
                            placeholderText="ДД/ММ/ГГ"
                            closeOnScroll={true}
                            dateFormat="dd-MM-yyyy"
                            name="endDate"
                            autoComplete="off" 
                            showDisabledMonthNavigation
                        />
                </div>
            </fieldset>
            </div>
            <button type="submit" className="form-search-btn">Найти билет</button>
        </form>
        </div>

)
}

}