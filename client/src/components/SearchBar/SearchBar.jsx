import React from "react";
import style from './SearchBar.module.css'



const SearchBar =({handleInputChange,handleSubmit,value})=>{


    return (
        <div className={style.container}>
            <input 
            className={style.inputSearch}
            type='text' placeholder="Search Game..."
            value={value} 
            onChange = {(e) => handleInputChange(e)}/>

            <button type='submit'
            onClick = {(e) => handleSubmit(e)} className={style.button}>Search</button>

        </div>
    )
}

export default SearchBar;