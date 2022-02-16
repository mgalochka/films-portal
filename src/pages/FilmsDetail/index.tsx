import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import routMain from "./routes";
import { ID } from "../../types/ID";
import DateView from "components/DateView";

import { useSelector, useDispatch } from "react-redux";
import { loadDetailFilms } from "../../store/DetailFilm/actions";
import { selectFilm } from "../../store/DetailFilm/selectors";

import './styles.scss';

const FilmsDetail = () => {

   const { id } = useParams<ID>();
   const dispatch = useDispatch();

   const film = useSelector(selectFilm);

   useEffect(() => {
      dispatch(loadDetailFilms(id));

   }, [dispatch, id]);


   return (
      <section className="filmsDitailPage">
         {film ? (
            <div className="filmsDetailWrapper">
               <div className="leftPartImg">
               <img className="filmImg" src={`${film?.image?.original || 
                     "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}`}
                     alt="filmFoto" />
                  
                     
               </div>
               <div className="rightPart">
                  <div className="filmTitle">
                     <h2 className="title">{film.name}</h2>
                     <span className="filmStar"></span>
                     <p className="rating">
                        {film.rating ?  film.rating.average : " "}
                     </p>
                  </div>
                  <div className="filmBlok">
                     <p className="descLeft"> ГОД ВЫХОДА: </p>
                     <p className="decsRight"> 
                      {film.premiered ? <DateView value={film.premiered}/> : " " }
                      </p>
                  </div>
                  <div className="filmBlok">
                     <p className="descLeft"> СТРАНА: </p>
                     <p className="decsRight"> 
                     {film.network ? film.network.country.timezone : " "} 
                     </p>
                  </div>
                  <div className="filmBlok">
                     <p className="descLeft"> ЖАНР: </p>
                     <p className="decsRight">
                     {film.genres ?  film.genres.join(', ') : " "}
                        </p>

                  </div>
                  <div className="filmBlok">
                     <p className="descLeft"> ЯЗЫК: </p>
                     <p className="decsRight"> 
                     { film.language ? film.language : " "}
                     </p>
                  </div>
                  <div className="filmBlok">
                     <p className="descLeft"> ОПИСАНИЕ: </p>
                     <p className="decsRight"
                        dangerouslySetInnerHTML={{__html: film.summary ? film.summary : " "}}
                     ></p>
                  </div>
               </div>
            </div>
         ) : <></>}
      </section>
   )
}

export { routMain };
export default FilmsDetail;