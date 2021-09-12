import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './filterTicketsForm.css';
import DetailsFilterItem from '../DetailsFilterItem/DetailsFilterItem';

export default class FilterTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
					date_start: '',
					date_end: '',
					have_first_class: false,
					have_second_class: false,
					have_third_class: false,
					have_fourth_class: false,
					have_wifi: false,
					have_express: false,
        }
				
		this.routes = this.props.routes;

		this.detailsList = [
			{
				title: 'Купе',
				filterName: 'have_second_class',
				src: '/images/icon-second-class.png',
				alt: 'icon second-class',
				width: '17',
				height: '17'
			},
			{
				title: 'Плацкарт',
				filterName: 'have_third_class',
				src: '/images/icon-third-class.png',
				alt: 'icon third-class',
				width: '17',
				height: '17'
			},
			{
				title: 'Сидячий',
				filterName: 'have_fourth_class',
				src: '/images/icon-fourth-class.png',
				alt: 'icon fourth-class',
				width: '14',
				height: '23'
			},
			{
				title: 'Люкс',
				filterName: 'have_first_class',
				src: '/images/icon-first-class.png',
				alt: 'icon first-class',
				width: '22',
				height: '20'
			},
			
			{
				title: 'Wi-Fi',
				filterName: 'have_wifi',
				src: '/images/icon-wifi.png',
				alt: 'icon wifi',
				width: '24',
				height: '19'
			},
			
			{
				title: 'Экспресс',
				filterName: 'have_express',
				src: '/images/icon-express.png',
				alt: 'icon express',
				width: '20',
				height: '20'
			}
		]   
    }

		componentDidUpdate(prevProps, prevState) {
			if (!this.shallowEqual(prevState, this.state)) {
				this.props.changeRoutesList(this.state);
			}
		}

		shallowEqual(object1, object2) {
			const keys1 = Object.keys(object1);
			const keys2 = Object.keys(object2);		
			if (keys1.length !== keys2.length) {
				return false;
			}		
			for (let key of keys1) {
				if (object1[key] !== object2[key]) {
					return false;
				}
			}		
			return true;
		}

	
		changeState = (name) => {			
			this.setState((state) => {
				return {[name]: !state[name]};	
			})
		}

		getMinPrice = (arr) => {
			if(arr.length > 0) {
				let lowest = arr.reduce((lowest, item) => item.min_price < lowest.min_price ? item: lowest)
				return lowest.min_price;
			} else {
				return 0;
			}
			
		}

		getMaxPrice = (arr) => {
			if(arr.length > 0) {
			let greatest = arr.reduce((greatest, item) => item.min_price > greatest.min_price ? item: greatest)
			return greatest.min_price;
			} else {
				return 0;
			}
		}


    render () {
        const {date_start, date_end} = this.state;
				
        return (
            <section className="sidebar-filters">
		    <div className="date-filter">
				<form className="date-filter-form">
					<fieldset className="form-date-section from-date">
				    		<legend>Дата поездки</legend>
				    		<div className="form-input_date">		
								<DatePicker
                            selected={date_start}
                            onChange={date => console.log(date)}
                            minDate={new Date()}
                            placeholderText="ДД/ММ/ГГ"
                            closeOnScroll={true}
                            dateFormat="dd-MM-yyyy"
                            name="date_start"
                            autoComplete="off" 
                            showDisabledMonthNavigation
                        />
				    		</div>
					</fieldset>
					
					<fieldset className="form-date-section to-date">
				    		<legend>Дата возвращения</legend>
				    		<div className="form-input_date">
								<DatePicker
                            selected={date_end}
                            onChange={date => console.log(date)}
                            minDate={new Date()}
                            placeholderText="ДД/ММ/ГГ"
                            closeOnScroll={true}
                            dateFormat="dd-MM-yyyy"
                            name="date_end"
                            autoComplete="off" 
                            showDisabledMonthNavigation
                        />
				    		</div>
					</fieldset>
	    		</form>
			</div>
			
			<div className="details-filter">
				<ul className="details-list">
					{this.detailsList.map((item,index) => 
						<DetailsFilterItem key={index} item={item} changeState={this.changeState}/>
					)}
					
				</ul>
			</div>
			
			<div className="cost-filter">
				<h3>Стоимость </h3>
				<div className="from-to-wrapper">
					<span>от</span>
					<span>до</span>
				</div>
				<div className="rangeslider">
					<div className="range-connects">
						<div className="range-connect"></div>
					</div>	
					<div className="range-origin range-origin-lower">
						<div className="range-handle range-handle-lower"></div>
					</div>
					<div className="range-origin range-origin-upper">
						<div className="range-handle range-handle-upper"></div>
					</div>	
                </div>


				<div className="cost-wrapper">
					<span className="min-cost">{this.getMinPrice(this.routes.items)}</span>
					<span className="max-cost">{this.getMaxPrice(this.routes.items)}</span>
				</div>
				
			</div>
			
			<div className="time-filter departure-time-filter">
				<div className="time-filter-title departure-time-filter-title">
					<div className="time-icon departure-time-icon">
						<img src="/images/icon-departure.png" alt="icon arrow-right"/>
					</div>
					<div className="time-name">Туда</div>
				</div>
				<div className="time-filter-btn departure-time-filter-btn"></div>
			</div>
			
			<div className="time-filter arrival-time-filter">
				<div className="time-filter-title arrival-time-filter-title">
					<div className="time-icon arrival-time-icon">
						<img src="/images/icon-arrival.png" alt="icon arrow-left"/>
					</div>
					<div className="time-name">Обратно</div>
				</div>
				<div className="time-filter-btn arrival-time-filter-btn"></div>
			</div>
			
		</section>
        )
    }
}