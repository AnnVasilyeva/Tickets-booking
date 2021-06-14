import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class FilterTicketsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
        }

        
    }

    render () {
        const {startDate, endDate} = this.state;
        return (
            <section className="sidebar-filters">
		    <div className="date-filter">
				<form className="date-filter-form">
					<fieldset className="form-date-section from-date">
				    		<legend>Дата поездки</legend>
				    		<div className="form-date">		
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
				    		<div className="form-date">
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
					<li className="details-item">
						<div className="icon">
                            <img src="/images/icon-stateroom.png" width="17" height="17" alt="icon stateroom"/>
						</div>
						<span className="details-item-name">Купе</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-joint.png" width="17" height="17" alt="icon joint"/>
						</div>
						<span className="details-item-name">Плацкарт</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-seat.png" width="14" height="23" alt="icon seat"/>
						</div>
						<span className="details-item-name">Сидячий</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-lux.png" width="22" height="20" alt="icon lux"/>
						</div>
						<span className="details-item-name">Люкс</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-wifi.png" width="24" height="19" alt="icon wifi"/>
						</div>
						<span className="details-item-name">Wi-Fi</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
					<li className="details-item">
						<div className="icon">
							<img src="/images/icon-express.png" width="20" height="20" alt="icon-express"/>
						</div>
						<span className="details-item-name">Экспресс</span>
						<label className="switch">
						  <input type="checkbox"/>
						  <span className="slider round"></span>
						</label>						
					</li>
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