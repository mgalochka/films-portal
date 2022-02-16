import { Dispatch } from "redux";
import getSearchFilms  from "services/getSearchFilms";
import { IStore } from "../Search/types";

export const setSearchFilmsAction = ( searchList: IStore["list"] ) => {
    return {
        type: 'searchFilms/setSearchFilms',
        payload: searchList,
    };
};

export const loadSearchFilms = (value:string) => async (dispatch: Dispatch) => {
    try {
        const response = await getSearchFilms(value);
        dispatch(setSearchFilmsAction(response.data))    
    } catch(e) {
        console.log(e, 'произошла шибка');
    }
};