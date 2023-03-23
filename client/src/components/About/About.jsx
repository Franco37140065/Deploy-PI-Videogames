import React from 'react'
import style from './about.module.css'
import imagen from '../../imagenes/fran.jfif'

import { Link } from 'react-router-dom'


function About() {
    return (
        <>
       
        <div className={style.container_about}>
            <h1>Individual Project</h1>
            <h1>Franco Alejandro Gonzalez</h1>
            <div>
               <img src={imagen} alt="foto" className={style.foto}></img>
            </div>
            <Link to= '/home'>
                <button className={style.button}>Return</button>
                                </Link>
        </div>
        </>
    )
}

export default About

