import axios from 'axios'
export const GET_GAMES = "GET_GAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAILS = "GET_DETAILS";
export const FILTER_BY = "FILTER_BY";
export const ORDER_BY = 'ORDER_BY';
export const ORDER_BY_RATING = 'ORDER_BY_RATING'
export const GET_NAME_GAME = 'GET_NAME_GAME';





export const getGames = () => {
return async function(dispatch) {
  let json = await  axios.get("/videogames",{

  });
  return dispatch({
    type:  GET_GAMES,
    payload: json.data
  })
 }
 
};

export const getGenres= () => {
  return async function (dispatch) {
   let json = await axios.get(`/genresRouter`)
    
    return dispatch({ 
      type: GET_GENRES, 
      payload: json.data 
    });
     
    
  };
}

export const postGame = (payload) => {
  return async function (dispatch){
    const response = await axios.post('/videogames/',payload)
    return response;
  }
}

export const getDetail = (id) => {
  return async function(dispatch){
    try {
      let json = await axios.get('/videogames/' + id);
      return dispatch ({
        type: GET_DETAILS, 
        payload: json.data
        
      })
      
    } catch (error) {
     console.log(error)
      
    }
  }

}

export const filterBy= (payload) =>{

  return {
    type : FILTER_BY,
    payload
  }
  
}

export const orderBy= (payload) =>{

  return {
    type : ORDER_BY,
    payload
  }
  
}
export const orderByRating= (payload) =>{

  return {
    type : ORDER_BY_RATING,
    payload
  }
  
}

export const getNameGame = (name)=>{

  return async function (dispatch){
    try{
        let json = await axios.get(`/videogames?name=${name}`)        
      return dispatch ({
        type: GET_NAME_GAME,
        payload: json.data
      })
    }catch(error){
     alert(error.response.data)
     
    }

  }
}


