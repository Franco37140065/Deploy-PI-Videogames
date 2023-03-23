import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const  NavBar=  ({handleClick}) =>{
   

    return (
        <div className={style.buttonub} >
               
                    <NavLink to="/"><button className={style.button}>Intro</button></NavLink>
            
                   <button className={style.button} onClick={e => {handleClick(e)}}>Reload Videogames</button>
       
                    <NavLink to="/creategame"><button className={style.button}>Create Game</button></NavLink>
          
        </div>
    )
}

export default NavBar
