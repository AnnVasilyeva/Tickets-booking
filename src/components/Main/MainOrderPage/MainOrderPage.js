import React, {useState} from 'react';
import './mainOrderPage.css';
import FilterTicketsForm from '../FilterTicketsForm/FilterTicketsForm';
import LastTicket from '../LastTicket/LastTicket';
import BookingService from '../../../services/bookingService';
import TicketsListSection from '../TicketsListSection/TicketsListSection';
import SeatSelectionSection from '../SeatSelectionSection/SeatSelectionSection';

export default function MainOrderPage ({routes, lastRoutes}) {
	// При выборе направления выдает (например) total_count: 13, но в массиве всего 5 билетов. Как проверять сортировку?

	const server = new BookingService();
	const [routesList, setRoutesList] = useState(routes);
	const [sortIndex, setSortIndex] = useState(5);
	const sortCountList = [5, 10, 20];
	const [sortRoutesList, setSortRoutesList] = useState({status: false, type: 'времени'});
	const [isSeatSelectionSection, setIsSeatSelectionSection] = useState(false);
	const [ticketSelection, setTicketSelection] = useState();
	// const [isPopup, setIsPopup] = useState(false); 
	

	const getSortRoutesCount = (index) => {
			setSortIndex(index);
	}

	const changeSortList = (sortItem = sortRoutesList) => {
		setSortRoutesList({status: !sortRoutesList.status, type: sortItem.type});
		
		server.getRoutes({from_city_id: routesList.items[0].departure.from.city._id,
			to_city_id: routesList.items[0].departure.to.city._id,
			sort: sortItem.sort,
		})
			.then(res => setRoutesList(res))
			.catch(error => console.log(error));
	}

	const changeRoutesList = (filterState) => {
		const {date_start, date_end, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_express} = filterState;

		server.getRoutes({from_city_id: routesList.items[0].departure.from.city._id,
			to_city_id: routesList.items[0].departure.to.city._id, date_start: date_start, date_end: date_end, have_first_class: have_first_class, have_second_class: have_second_class, have_third_class: have_third_class, have_fourth_class: have_fourth_class, have_wifi: have_wifi, have_express: have_express
		})
			.then(res => setRoutesList(res))
			.catch(error => console.log(error));

	}

	const seatSelection = (selectedTicket) => {
		
		setTicketSelection(selectedTicket)
		setIsSeatSelectionSection(true);

	}

	

	return (
		<div className="container-order-page">
			<aside className="order-page-sidebar">
				
				<FilterTicketsForm changeRoutesList={changeRoutesList}/>
				<section className="sidebar-last-tickets">
					<h2>последние билеты</h2>
					<ul className="last-tickets-list">
						{lastRoutes && lastRoutes.map((item,index) => {
							if(index <= 2) {
								return <LastTicket key={index} item={item}/>
							}
						})}						
					</ul>
				</section>
			</aside>

			{isSeatSelectionSection ? <SeatSelectionSection ticket={ticketSelection}/> : <TicketsListSection routesList={routesList}
													routes={routes} 
													sortIndex={sortIndex}
													sortCountList={sortCountList}
													setSortRoutesList={setSortRoutesList}
													sortRoutesList={sortRoutesList}
													changeSortList={changeSortList}
													getSortRoutesCount={getSortRoutesCount}
    											seatSelection={seatSelection}
			/>
			}

			
			
		
		</div>	
			)
}
	
    
