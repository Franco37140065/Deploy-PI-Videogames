import React from 'react'
import style from './page404.module.css'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div className={style.container}>
          
      
            <Link to='/home'><button className={style.button}>{'<'} Go home</button></Link> 
        </div>
    )
}

export default Page404
