import { IStore } from "../CategoryDrama/types";


export const selectCategory = (state: {filmsCategoryReducer: IStore}): IStore["list"] => 
state.filmsCategoryReducer.list;
