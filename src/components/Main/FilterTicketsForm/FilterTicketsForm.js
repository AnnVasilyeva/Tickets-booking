import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './filterTicketsForm.css';

export default class FilterTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
        } 
		this.detailsList = [
			{
				title: 'Купе',
				src: '/images/icon-stateroom.png',
				alt: 'icon stateroom',
				width: '17',
				height: '17'
			},
			{
				title: 'Плацкарт',
				src: '/images/icon-joint.png',
				alt: 'icon joint',
				width: '17',
				height: '17'
			},
			{
				title: 'Сидячий',
				src: '/images/icon-seat.png',
				alt: 'icon seat',
				width: '14',
				height: '23'
			},
			{
				title: 'Люкс',
				src: '/images/icon-lux.png',
				alt: 'icon lux',
				width: '22',
				height: '20'
			},
			
			{
				title: 'Wi-Fi',
				src: '/images/icon-wifi.png',
				alt: 'icon wifi',
				width: '24',
				height: '19'
			},
			
			{
				title: 'Экспресс',
				src: '/images/icon-express.png',
				alt: 'icon express',
				width: '20',
				height: '20'
			}
		]   
    }

    render () {
        const {startDate, endDate} = this.state;

        return (
            <section className="sidebar-filters">
		    <div className="date-filter">
				<form className="date-filter-form">
					<fieldset className="form-date-section from-date">
				    		<legend>Дата поездки</legend>
				    		<div className="form-input_date">		
								<DatePicker
                            selected={startDate}
                            onChange={date => console.log(date)}
                            minDate={new Date()}
                            placeholderText="ДД/ММ/ГГ"
                            closeOnScroll={true}
                            dateFormat="dd-MM-yyyy"
                            name="startDate"
                            autoComplete="off" 
                            showDisabledMonthNavigation
                        />
				    		</div>
					</fieldset>
					
					<fieldset className="form-date-section to-date">
				    		<legend>Дата возвращения</legend>
				    		<div className="form-input_date">
								<DatePicker
                            selected={endDate}
                            onChange={date => console.log(date)}
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
	    		</form>
			</div>
			
			<div className="details-filter">
				<ul className="details-list">
					{this.detailsList.map((item,index) => 
						<li className="details-item" key={index}>
							<div className="icon">
								<img src={item.src} width={item.width} height={item.height} alt={item.alt}/>
							</div>
							<span className="details-item-title">{item.title}</span>
							<label className="switch">
								<input type="checkbox"/>
								<span className="slider round"></span>
							</label>						
						</li>
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
					<span className="min-cost">1920</span>
					<span className="max-cost">7000</span>
				</div>
				
			</div>
			
			<div className="time-filter there-time-filter">
				<div className="time-filter-title there-time-filter-title">
					<div className="time-icon there-time-icon">
						<img src="/images/icon-there.png" alt="icon arrow-right"/>
					</div>
					<div className="time-name">Туда</div>
				</div>
				<div className="time-filter-btn there-time-filter-btn"></div>
			</div>
			
			<div className="time-filter back-time-filter">
				<div className="time-filter-title back-time-filter-title">
					<div className="time-icon back-time-icon">
						<img src="/images/icon-back.png" alt="icon arrow-left"/>
					</div>
					<div className="time-name">Обратно</div>
				</div>
				<div className="time-filter-btn back-time-filter-btn"></div>
			</div>
			
		</section>
        )
    }
}