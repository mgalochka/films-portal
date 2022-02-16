
import { IFilmsCategoryItem } from "../../types/IFilmCategoryItem";

export interface IStore {
   list: IFilmsCategoryItem[];
   film: IFilmsCategoryItem | null;
}      