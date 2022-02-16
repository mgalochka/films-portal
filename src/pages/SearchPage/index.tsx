import React, {useState } from "react";
import routSearch from "./routes";
import FilmsList from "components/FilmsList/components";
import FilmsCategoriList from "components/FilmLiastCategori";

import { useSelector, useDispatch } from "react-redux";
import { loadSearchFilms } from "../../store/Search/actions";
import { selectSearchFilm } from "../../store/Search/selectors";

import search from "../../components/assets/img/search.png";

import './styles.scss';


const SearchPage = () => {
   const [inputValue, setInputValue] = useState<string>(" ");
   
   const dispatch = useDispatch();
     
   const moviesList = useSelector(selectSearchFilm);

   const showMovies = (value: string) => {
      setInputValue(value);
      
   };
   

   return (
      <section className="search">
         <div className="search__wrapper">
            
               <h2 className="search__title">Поиск по категории</h2>
               <img 
                  className="search__img"
                  src={search}
                  alt='search'
                  onClick={() => {
                     dispatch(loadSearchFilms(inputValue));
                  }}/>
               <input className="search__input"
                  type='text'
                  placeholder="example:categoty"
                  value={inputValue}
                  onChange={(e) => showMovies(e.target.value)}/>
               
         </div>
            <div className="search__films">
               <h3 className="search__result">Результаты поиска:</h3>
               <div>
                     {moviesList.length > 0 ? (
                     <FilmsCategoriList list = {moviesList.slice(0,8)}/>
                     ) : (
                     <p className="search__warning">
                        Введите поисковой запрос для отображения
                     </p>)}
               </div>
               
               
            </div>
         
      </section>
   )
}

export { routSearch };
export default SearchPage;