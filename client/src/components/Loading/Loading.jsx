import React from 'react'
import LoadingImage from "../../imagenes/gif loading corto.gif"
import styles from "./loading.module.css"

const Loading = () =>{
    
    return (
    <div className={styles.loadingContainer}>
        <img className={styles.loadingStyle} src={LoadingImage}/>
    </div>
    
    )
}
 
export default Loading;