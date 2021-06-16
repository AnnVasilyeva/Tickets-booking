import './lastTicket.css';
import FormattingData from '../../../services/formattingData';

export default function LastTicket ({item}) {
  const formattingData = new FormattingData();

  const {departure: {from, to}, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, is_express, min_price} = item;

  return (
    <li className="last-tickets-item">
      
      <div className="tickets-item-city">
        <div className="ticket-from-city ticket-city">
          <span className="city">{formattingData.ucFirst(from.city.name)}</span>
          <span className="city-railway_station">{from.railway_station_name}</span>
        </div>
        <div className="ticket-to-city ticket-city">
          <span className="city">{formattingData.ucFirst(to.city.name)}</span>
          <span className="city-railway_station">{to.railway_station_name}</span>
        </div>
      </div>
      
      <div className="tickets-item-features">
        <ul className="ticket-features-list">
          <li className="ticket-features-icon">
            <img src="/images/icon-wifi.png" alt="icon-wifi"/>			
          </li>
          <li className="ticket-features-icon">
            <img src="/images/icon-express.png" alt="icon-express"/>
          </li>
          <li className="ticket-features-icon">
            <div className="icon-cup-wrapper">
              <img src="/images/icon-cup.png" alt="icon-cup"/>
              <img src="/images/icon-plate.png" alt="icon-plate"/>
            </div>
          </li>
        </ul>
        <div className="ticket-cost">
          <span>от</span>
          <span className="cost">{min_price}</span>
          <div className="icon-value">
            <img src="/images/icon-value.png" alt="russian ruble"/>
          </div>
        </div>
      </div>							
    </li>

  )
}