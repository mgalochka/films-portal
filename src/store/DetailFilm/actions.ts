import { Dispatch } from "redux";
import getDetailFilms from "services/getDetailFilms";
import { IStore } from "../Films/types";

export const setDetailFilmsAction = ( list: IStore["film"] ) => {
    return {
        type: 'filmPages/setFilmPages',
        payload: list,
    }
}

export const loadDetailFilms = (id:string) => async (dispatch: Dispatch) => {
    try {
        const response = await getDetailFilms(id);
        dispatch(setDetailFilmsAction(response.data))    
    } catch(e) {
        console.log(e, 'произошла шибка');
    }
}