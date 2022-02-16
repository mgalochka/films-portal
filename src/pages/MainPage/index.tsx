import React, {useEffect} from "react";
import routMain from "./routes";

import { useDispatch, useSelector} from "react-redux";
import {loadFilms} from "../../store/Films/actions";
import { selectList } from "../../store/Films/selectors";

import FilmsList from "../../components/FilmsList/components";

import './styles.scss';

const MainPage = () => {
    
    const dispatch = useDispatch();
    const filmsList = useSelector(selectList)

    useEffect(() => {
        dispatch(loadFilms());
    },[ dispatch ]);

    return (
        <section className="mainPage">
            <div className="mainWrapper">
                <h1 className="title"> MOVIESinfo </h1>
                <h2 className="titleDesc"> Самый популярный портал о фильмах </h2>
            </div>
           <div className="films">
           {filmsList.length > 0 && <FilmsList list = {filmsList.slice(0,8)}/>}
           </div>
        </section>
    )
}

export {routMain};
export default MainPage;