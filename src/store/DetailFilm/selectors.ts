import { IStore } from "../Films/types";

export const selectFilm = (state: {filmsReducer: IStore}): IStore["film"] =>
 state.filmsReducer.film;