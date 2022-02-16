
import { AnyAction } from "redux";
import { IStore } from "./types";


const initialState = {
     film: null,
     list: [],
    
};

const filmsDetailReducer = (state: IStore = initialState, action: AnyAction) => {
    switch(action.type) {
         case 'filmPages/setFilmPages':
            return {...state, film: action.payload}
        default:
            return state;    
    }
}
export default filmsDetailReducer;