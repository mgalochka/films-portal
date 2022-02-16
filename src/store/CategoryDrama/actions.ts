import { Dispatch } from "redux";
import getCategoryDrama from "services/getCategoryDrama";
import { IStore } from "../CategoryDrama/types";

export const setCategoryFilmsAction = (list: IStore["list"]) => {
    return {
        type: 'filmCategory/setFilmCategory',
        payload: list,
    }
}

export const loadCategoryFilms = () => async (dispatch: Dispatch) => {
    try {
        const response = await getCategoryDrama();
        dispatch(setCategoryFilmsAction(response.data))    
    } catch(e) {
        console.log(e, 'произошла шибка');
    }
}