
import { AnyAction } from "redux";
import { IStore } from "./types";


const initialState = {
    list: [],
    film: null,
    
};

const searchFilmsReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
         case 'searchFilms/setSearchFilms':
            return {...state, list:[...action.payload]};
        case 'filmPages/setFilmPages':
            return {...state, film:action.payload};    
        default:
            return state;    
    }
}
export default searchFilmsReducer ;