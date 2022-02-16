import React from "react";
import { NavLink } from "react-router-dom";
import { routMain as routFilmsDetail } from '../../../../pages/FilmsDetail';
import { IFilmsDetail } from "../../../../types/IFilmsDetail";
import DateView from "components/DateView";
import './styles.scss';

interface IFilmsItemParams {
   item: IFilmsDetail;
}

const FilmsItem: React.FC<IFilmsItemParams> = ({ item }) => (

   <NavLink className="filmsItem" to={routFilmsDetail(item.id)}>
      <div className="filmsFoto">
         <img className="filmImg" src={`${item?.image?.original ||
            "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}`}
            alt="filmFoto" />

      </div>
      <div className="filmsDescWrapper">
         <div className="nameItem">
            <div className="nameSpan">{item.name || " "}</div>
         </div>
         <div className="summary">
            <p className="filmsData">
            {item.premiered ? <DateView value={item.premiered}/> : " " }
              
            </p>
            <p className="filmsdesc">
               {item.genres.join(', ') || " "}
            </p>

         </div>
      </div>

   </NavLink>
)

export default FilmsItem;