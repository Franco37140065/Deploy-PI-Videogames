import style from './Paginated.module.css'
const Paginated = ({gamesPerPage,allGames,paginado}) =>{

    const  pageNumbers = []


    for(let i=0; i<Math.ceil(allGames/gamesPerPage);i++){
        pageNumbers.push(i + 1)
    }

        return(
            <div className={style.pagination}>
           
                <ul>
                    { pageNumbers &&
                    pageNumbers.map(number =>(
                        <li key={number} >
                            <a className={style.active} onClick={()=> paginado(number)}>{number}</a>
                        </li>
                    ))

                    }
                </ul>
            
            </div>
        )

}
export default Paginated;