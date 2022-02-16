import React from "react";
import { NavLink } from "react-router-dom";
import { routMain as routFilmsDetail } from '../../../pages/FilmsDetail';
import { IFilmsCategoryItem } from "../../../types/IFilmCategoryItem";

import './styles.scss';

interface IFilmsCategoriItemParams {
   item: IFilmsCategoryItem;
}

const FilmsCategoriItem: React.FC<IFilmsCategoriItemParams> = ({ item }) => {
   console.log(item);
   return (
      <NavLink className="filmsItem" to={routFilmsDetail(item.show.id)}>
         <div className="filmsFoto">
            <img className="filmImg" src={`${item.show.image?.original ||
               "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}`}
               alt="filmFoto" />

         </div>
         <div className="filmsDescWrapper">
            <div className="filmName">
               <div className="nameSpan">{item.show.name || ""}</div>
            </div>
            <div className="summary">
               <p className="filmsdesc">
                  {item.show.genres.join(', ') || " "}
               </p>

            </div>
         </div>

      </NavLink>
   )
}

export default FilmsCategoriItem;
