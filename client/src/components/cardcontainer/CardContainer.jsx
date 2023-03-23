import Card from '../Card/Card';
import style from '../cardcontainer/CardContainer.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGames,getGenres } from '../../redux/actions';
import Loading from '../Loading/Loading'
const CardContainer = ({allGames,loading}) =>{

    const dispatch = useDispatch();

    const getVideoGames = async()=>{
        try {
            await dispatch(getGames(),getGenres());
        } catch (error) {
            alert(error.response.data)
        }
    }

    useEffect(()=>{
        getVideoGames()
    },[]);

    if(loading) return <Loading/>

    return(


            <div className={style.CardContainer}>

            {
                allGames.length ? 
                allGames.map((game)=>{
                    return(
                        <Card
                        key={game.id}
                        name={game.name}
                        background_image={game.background_image}
                        rating={game.rating}
                        genres={game.genres}
                        id={game.id}
                        datainDB={game.createInDb}
                    />

                    )

                }):
                <div >
                     <Loading/>

                </div>
       }

             </div>

    )
}
export default CardContainer;