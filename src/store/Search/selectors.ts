import { IStore } from "../Search/types";

export const selectSearchFilm = (state: {searchFilmsReducer: IStore}): IStore["list"] =>
 state.searchFilmsReducer.list;