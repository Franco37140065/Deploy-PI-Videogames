import React,{ useEffect,useState } from "react";
import {Link, useParams} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import style from './Detail.module.css'
import Loading from "../../components/Loading/Loading";


const Detail = (props)=>{
    const dispatch = useDispatch()
    const myGame = useSelector((state)=>state.detail)
    const [loading,setLoading] = useState(false)
    const {id} = useParams();


    const loadingVideoGameFromAPI = async () => {
        setLoading(true)
        await dispatch(getDetail(id))
        setLoading(false)
    }

    useEffect(()=> {
        loadingVideoGameFromAPI()
    },[id])
    /* console.log(myGame) */

    if(loading) return (
        <div className={style.loadingContainer}>
             <Loading />    
        </div>
    )
    console.log(myGame);

    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
                <h1 className={style.title}>{myGame.name}</h1>
                <div className={style.imageContainer}>
                        <img className={style.image} src={myGame.background_image} alt="image not found"/>
                </div>
                <p className={style.rating}>Rating: ★ {`${myGame.rating}`}</p>
                <hr></hr>
                <h5 className={style.descriptionTitle}>Description</h5>
                <p className={style.description}>{myGame.description_raw}</p>
                <p className={style.infoExtra}><strong>Genres</strong>: {!myGame.createInDb? myGame.genres + ' ': myGame.genres.map(e => e.name + (' '))}</p>
                <p className={style.infoExtra}><strong>Platforms</strong>: {myGame.platforms +' ' }</p>
                <div className={style.buttonContainer}>
                    <Link to = '/home'><button className={style.returnBtn}>Return</button></Link>
                </div>
            </div>
        
        </div>
    )
}

export default Detail;