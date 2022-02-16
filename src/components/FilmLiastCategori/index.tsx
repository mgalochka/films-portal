import React from "react";
import FilmsCategoriItem from "../FilmLiastCategori/FilmsCategoriItem";
import { IFilmsCategoryItem } from "../../types/IFilmCategoryItem";

import './styles.scss';


interface IFilmsListParams {
    list: IFilmsCategoryItem[];
    
}
const FilmsCategoriList: React.FC<IFilmsListParams> = ({list}) => (
   <div className="filmsList"> 
       {list.map((film:IFilmsCategoryItem) => (
           <FilmsCategoriItem key={film.show.id} item={film}/>
       ))}
   </div>
)


export default FilmsCategoriList;
