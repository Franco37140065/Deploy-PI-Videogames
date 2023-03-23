import React from "react";

import style from './OrderBy.module.css';


const  OrderBy = ({handleSort,handleSortRating}) =>{


    return(
        <div className={style.orderContainer}>
            <div className={style.itemContainer}>
                <select className={style.select2} onChange={handleSort}>
                    <option value="default">Ordering by Alphabetic</option>
                        
                        <option value="A-Z">A - Z</option>
                        <option value="Z-A">Z - A</option>
                                
                </select>
                <select className={style.select2} onChange={handleSortRating}>
                <option value="default">Ordering by Rating</option>
                
                        <option value="asc">Minor to Major</option>
                        <option value="desc">Major to Minor</option>
                     
                    </select>    
            </div>    
            </div>
    )
}
export default OrderBy;