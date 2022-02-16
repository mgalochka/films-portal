import React, { useEffect } from "react";
import routCategori from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadCategoryFilms } from "../../store/CategoryDrama/actions";
import { selectCategory } from "../../store/CategoryDrama/selectors";

import FilmsCategoriList from "components/FilmLiastCategori";
import PageTitle from "components/PageTatle";

import './styles.scss';

const CategoriPage = () => {
   const dispatch = useDispatch();
   const filmsList = useSelector(selectCategory)

   useEffect(() => {
      dispatch(loadCategoryFilms());
     
   }, [dispatch]);

   return (
      <section className="categori">
         <div className="categoriWrapper">
            <div className="categoriTitle">
               <PageTitle title={<h2>Drama</h2>} />
            </div>
            <div className="films">
            {FilmsCategoriList.length > 0 && <FilmsCategoriList list = {filmsList}/>}
            </div>
         </div>
      </section>
   )
}

export { routCategori };
export default CategoriPage;