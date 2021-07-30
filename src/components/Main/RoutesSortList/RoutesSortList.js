import React from 'react';

export default function RoutesSortList ({sortRoutesList, changeSortList}) {
  // не работает сортиовка по стоимости, при передаче в запросе 'price' (как в документации)
  const sortItems = [{type: 'времени', sort: 'date'}, 
                    {type: 'стоимости', sort: 'price_min'}, 
                    {type: 'длительности', sort: 'duration'}];

  if (!sortRoutesList.status) {
    return (
      <span>{sortRoutesList.type}</span>
    ) 
  }

  const RoutesSortItem = ({item}) => {
    return (
      <li className="routes-sort-item" 
          aria-hidden="true"
          onClick={() => changeSortList(item)}
          >{item.type}</li>
    )
  }


  return (
    <ul className="routes-sort-list">
      {sortItems.map((item, index) => <RoutesSortItem key={index} item={item}/>)}
    </ul>
  ) 
  
  
}