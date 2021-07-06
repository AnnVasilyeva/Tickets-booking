import React, {useEffect, useState} from 'react';
import './mainOrderPage.css';
import FilterTicketsForm from '../FilterTicketsForm/FilterTicketsForm';
import Ticket from '../Ticket/Ticket';
import LastTicket from '../LastTicket/LastTicket';
import PopupWindow from '../../PopupWindow/PopupWindow';
import RoutesSortList from '../RoutesSortList/RoutesSortList';
import BookingService from '../../../services/bookingService';


export default function MainOrderPage ({routes, lastRoutes}) {
	// При выборе направления выдает (например) total_count: 13, но в массиве всего 5 билетов. Как проверять сортировку?

	const server = new BookingService();
	const [routesList, setRoutesList] = useState(routes);
	const [sortIndex, setSortIndex] = useState(5);
	const sortCountList = [5, 10, 20];
	const [sortRoutesList, setSortRoutesList] = useState({status: false, type: 'времени'});
	// const [isPopup, setIsPopup] = useState(false); 
	

	const getSortRoutesCount = (index) => {
			setSortIndex(index);
	}

	const SortCountItem = ({item, onClick}) => {
		return(
			<li className={sortIndex === item ? `limit selected` : 'limit'}
			onClick={() => onClick(item)}
			aria-hidden="true">{item}</li>
		)	
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
			
			<section className="order-page-found-routes">
				<header className="found-routes-header">
					<div className="found-routes-count">
						<span>найдено </span>
						<span className="total-count">{routesList.total_count}</span>
					</div>
					<div className="routes-sort">
						<button onClick={() => {
							if(routesList.total_count > 0) {
								setSortRoutesList({status: !status});
							} 
							
						}}>сортировать по:</button>
						<RoutesSortList sortRoutesList={sortRoutesList} changeSortList={changeSortList}/>
					</div>
					<div className="routes-limit">
						<span>показывать по:</span>
						<ul className="routes-limit-list">
							{sortCountList.map((item, index) => 
							<SortCountItem key={index} item={item} onClick={getSortRoutesCount}/>)}
						</ul>					
					</div>
				</header>

				{
					routes.total_count > 0 ? 
					<ul className="found-routes-list">
						{routesList.items.map((item, index) => {
							if(index < sortIndex) {
								return <Ticket ticket={item} key={index}/>
							}	
						})}
					</ul>
					: <PopupWindow text={'По выбранному направлению билетов нет. Попробуйте выбрать другое направление.'} isError={false}/>
					// пока не знаю как его закрыть
				}

				
				{/* <div className="found-routes-list-pagination">
					<a href="#">0</a>
					<a href="#" className="active">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#"></a>
				</div> */}
			</section>
		</div>	
			)
}

{/* для иконки с чашкой */}
										{/* <div className="icon-cup-wrapper">
											<img src="/images/icon-cup.png" alt="icon-cup"/>
											<img src="/images/icon-plate.png" alt="icon-plate"/>
										</div> */}	
	
	
    
