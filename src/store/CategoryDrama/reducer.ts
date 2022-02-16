import { AnyAction } from "redux";
import { IStore } from "../CategoryDrama/types";


const initialState = {
    list: [],
    film: null,
    
}

const filmsCategoryReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
        
        case 'filmCategory/setFilmCategory':
            return {...state, list:[...action.payload]};      
        case 'filmPages/setFilmPages':
            return {...state, film:action.payload};
          
        default:
            return state;    
    }
}
export default filmsCategoryReducer;