import style from './landingPage.module.css'
import { Link } from 'react-router-dom';

const landingPage =(props)=> {
    return(
        <div>
            <div className={style.buttonn}>
                <Link to = '/home'>
                    <button className={style.button}>Get into</button>
                </Link>
            </div> 
                <div className={style.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jwVmF38E85s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
        </div>   
        )
}

export default landingPage;