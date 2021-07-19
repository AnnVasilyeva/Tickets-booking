import './lastTicket.css';
import FormattingData from '../../../services/formattingData';
import FeaturesList from '../FeaturesList/FeaturesList';

export default function LastTicket ({item}) {
  const formattingData = new FormattingData();

  const {departure: {from, to}, min_price} = item;

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
        <FeaturesList departureInfo={item.departure}/>
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