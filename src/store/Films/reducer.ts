
import { AnyAction } from "redux";
import { IStore } from "./types";


const initialState = {
    list: [],
    film: null,
    
}

const filmsReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'films/setFilms':
            return {...state, list:[...action.payload]};
        case 'filmPages/setFilmPages':
            return {...state, film:action.payload};
        default:
            return state;    
    }
}
export default filmsReducer;