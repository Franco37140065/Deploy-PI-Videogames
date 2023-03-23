import { GET_GAMES,GET_GENRES,GET_DETAILS, FILTER_BY,ORDER_BY, ORDER_BY_RATING, GET_NAME_GAME } from "./actions";

const initialState = {
 games:[],
 allGames:[],
 detail:{},
 filtered: [],
 genres: [],
};


const rootReducer = (state=initialState,action) => {

    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                games:action.payload,
                allGames:action.payload,
                filtered: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload
                
            };
            case  GET_NAME_GAME :
                    return {
                        ...state,
                        games:action.payload,
                        filtered:action.payload

                    };
            case  'POST_GAME':    
                return{
                    ...state,
                };
            case FILTER_BY:

            const allVideoGames = state.allGames
            const filterGames = action.payload === 'DB' ? allVideoGames.filter(e =>  e.createInDb) : allVideoGames.filter(e =>!e.createInDb)
                return {
                    ...state,
                    games: action.payload === 'all' ? state.allGames : filterGames
                    
                };

             case ORDER_BY:
                let order = action.payload === 'A-Z' ?
                        state.games.sort(function(a, b){
                            if(a.name > b.name){
                                return 1;
                            }
                            if(b.name > a.name){
                                return -1;
                            }
                            return 0;
                        }) :
                        state.games.sort(function(a, b){
                            if(a.name > b.name){
                                return -1;
                            }
                            if(b.name > a.name){
                                return 1;
                            }
                            return 0;
                        }) 

                        return {
                           ...state,
                           games:order
                        }
            case ORDER_BY_RATING:
                let orderByRating = action.payload === 'asc' ?
                state.games.sort(function(a, b){
                    if(a.rating > b.rating){
                        return 1;
                    }
                    if(b.rating > a.rating){
                        return -1;
                    }
                    return 0;
                }) :
                state.games.sort(function(a, b){
                    if(a.rating > b.rating){
                        return -1;
                    }
                    if(b.rating > a.rating){
                        return 1;
                    }
                    return 0;
                }) 

                return {
                   ...state,
                   games:orderByRating
                };









        default:
            return{
                ...state,
                games:[],
            };
    }
}

export default rootReducer;