import { useDispatch } from 'react-redux';
import { filterBy } from '../../redux/actions';
import style from './FilterBy.module.css';





const FilterBy = () =>{
const dispatch = useDispatch();
    function handleFilterBy(e){
        dispatch(filterBy(e.target.value))
    }

    return (
    <div className={style.select_position}>
        
                <select className={style.select}  onChange={e=>handleFilterBy(e)}>
                <option value="all">All...</option>
                        <optgroup label="DataBase">
                            <option value="DB">Created</option>
                        </optgroup>
                         <optgroup label="API">
                            <option value="API">Api</option>
                        </optgroup>              
                </select>
       
           
        
           
    </div>
      
    )

}

export default FilterBy;