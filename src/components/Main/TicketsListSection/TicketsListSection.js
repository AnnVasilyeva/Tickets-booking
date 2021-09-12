import React from 'react';
import RoutesSortList from '../RoutesSortList/RoutesSortList';
import Ticket from '../Ticket/Ticket';
import PopupWindow from '../../PopupWindow/PopupWindow';

 export default function TicketsListSection ({routesList, sortCountList, sortIndex, setSortRoutesList, sortRoutesList, changeSortList, getSortRoutesCount, seatSelection}) {

  // console.log(routesList);
  const SortCountItem = ({item, onClick}) => {
		return(
			<li className={sortIndex === item ? `limit selected` : 'limit'}
			onClick={() => onClick(item)}
			aria-hidden="true">{item}</li>
		)	
	}

  const getSeatSelection = (ticket) => {
    seatSelection(ticket);
        
  }

   return (
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
      routesList.total_count > 0 ? 
      <ul className="found-routes-list">
        {routesList.items.map((item, index) => {
          if(index < sortIndex) {
            return <Ticket ticket={item} key={index} getSeatSelection={getSeatSelection}/>
          }	
        })}
      </ul>
      : <PopupWindow text={'По выбранным параметрам билетов нет. Попробуйте выбрать другие параметры фильтра.'} isError={false}/>
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
   )
 }