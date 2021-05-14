import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bookingService from "../../services/bookingService";

export default class SearchTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.service = new bookingService();
        this.state = {
            fromCity: '',
            toCity: '',
            startDate: '',
            endDate: '',
            citiesList: [],
            typingTimeout: 0,
            isAutocomplete: false
        }
    }

    dateParser(date) {
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

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.onSearchTickets(this.state);
        this.setState({
            fromCity: '',
            toCity: '',
            startDate: '',
            endDate: '',
            citiesList: [],
            typingTimeout: 0,
            isAutocomplete: false
        })

    }

    onChangeInput = (e) => {

        if(this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout)
        }

        this.setState({
            [e.target.name]: e.target.value,
            typingTimeout: setTimeout(() => {
                this.service.getCities(e.target.value)
                    .then(res => {
                        this.setState({citiesList: res, isAutocomplete: true});
                    })
            }, 1000)
        })

    }

    onClickItem = (e) => {

        this.setState({
            fromCity: e.currentTarget.innerText,
            citiesList: [],
            isAutocomplete: false
        })


    }




    render () {
        let citiesListComponent;
        const {toCity, fromCity, isAutocomplete, citiesList} = this.state;

        if(isAutocomplete) {

            if(citiesList.length) {
                citiesListComponent = (
                    <ul className='autocomplete'>
                        {citiesList.map(item => <li key={item.id}
                                                    onClick={this.onClickItem}
                                                >{item.name}</li>)}
                    </ul>

                )
            }
        }


        return (

            <div className="form-search">
                <form className="form-search-ticket" method="get" onSubmit={this.onSubmitForm}>
                    <fieldset className="form-way-section">
                        <legend>Направление</legend>
                        <div className="form-way">
                            <div className='form-way-from'>
                                <input name="fromCity"
                                       type="text"
                                       placeholder="Откуда"
                                       required
                                       autoComplete='off'
                                       value={fromCity}
                                       onChange={this.onChangeInput}
                                />
                                {citiesListComponent}
                            </div>
                            <div className="change-input"></div>
                            <div className='form-way-to'>
                                <input name="toCity"
                                       type="text"
                                       placeholder="Куда"
                                       required
                                       autoComplete='off'
                                       value={toCity}
                                       onChange={this.onChangeInput}
                                />
                                {citiesListComponent}
                            </div>

                        </div>
                    </fieldset>
                    <fieldset className="form-date-section">
                        <legend>Дата</legend>
                        <div className="form-date">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={date => this.setState({startDate : date})}
                                minDate={new Date()}
                                placeholderText="ДД/ММ/ГГ"
                                autoComplete='off'
                                closeOnScroll={true}
                                dateFormat="dd-MM-yyyy"
                                name="startDate"
                                showDisabledMonthNavigation
                            />
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={date => this.setState({endDate : date})}
                                minDate={new Date()}
                                placeholderText="ДД/ММ/ГГ"
                                autoComplete='off'
                                closeOnScroll={true}
                                dateFormat="dd-MM-yyyy"
                                name="endDate"
                                showDisabledMonthNavigation
                            />
                        </div>
                    </fieldset>
                    <button type="submit" className="form-search-btn">Найти билет</button>
                </form>
            </div>

        )
    }

}