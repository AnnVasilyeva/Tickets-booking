import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class SearchTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCity: '',
            toCity: '',
            startDate: '',
            endDate: ''
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
            endDate: ''
        })


    }

    render () {
        return (

            <div className="form-search">
                <form className="form-search-ticket" method="get" onSubmit={this.onSubmitForm}>
                    <fieldset className="form-way-section">
                        <legend>Направление</legend>
                        <div className="form-way">
                            <input name="from-city" type="text" placeholder="Откуда" required value={this.state.fromCity} onChange={(e) => this.setState({fromCity: e.target.value})}/>
                            <div className="change-input"></div>
                            <input name="to-city" type="text" placeholder="Куда" required value={this.state.toCity} onChange={(e) => this.setState({toCity: e.target.value})}/>
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