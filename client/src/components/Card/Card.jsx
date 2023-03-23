import style from './Card.module.css'
import React from 'react';
//import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
//import Detail from '../../views/Detail/Detail';



const Card = ({name,background_image,rating,genres,id,datainDB})=>{


    return(
        <div className={style.card}>
   

            <h4>{name}</h4>
            <img className={style.image} src={background_image} alt="image not fount" />
    
            <p className={style.rating}>★ {rating}</p>
            
            <div className={style.infoContGenres}>
            { datainDB
                ? genres.map((value,index)=>(//preguntar por q la p tiene key
                  <p className={style.genres} key={index}>
                    {value.name+', '}{/*como hacer que la coma no se quede al final*/}                  
                  </p>
                ))
                : <p className={style.genres}>{genres+' '}</p> }

            
              </div>
        <div>
          <Link to = {`/home/${id}`}><button className={style.btnDetail} >Details</button></Link></div>
        </div>
    )
  }
export default Card;