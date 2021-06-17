import React, {useState} from 'react';
import './mainOrderPage.css';
import FilterTicketsForm from '../FilterTicketsForm/FilterTicketsForm';
import Ticket from '../Ticket/Ticket';
import LastTicket from '../LastTicket/LastTicket';
import PopupWindow from '../../PopupWindow/PopupWindow';


export default function MainOrderPage ({routes, lastRoutes}) {
	// При выборе направления выдает (например) total_count: 13, но в массиве всего 5 билетов. Как проверять сортировку?

	console.log(routes);
	const [sortIndex, setSortIndex] = useState(5);
	const sortCountList = [5, 10, 20];
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


	return (
		<div className="container-order-page">
			<aside className="order-page-sidebar">
				
				<FilterTicketsForm/>
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
						<span className="total-count">{routes.total_count}</span>
					</div>
					<div className="routes-sort">
						<span>сортировать по:</span>
		{/* добавить класс open */}
						<ul className="routes-sort-list open">
							<li className="routes-sort-item selected">времени</li>
							<li className="routes-sort-item">стоимости</li>
							<li className="routes-sort-item">длительности</li>
						</ul>
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
						{routes.items.map((item, index) => {
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
	
	
    
