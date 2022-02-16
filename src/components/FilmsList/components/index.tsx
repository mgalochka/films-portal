import React from "react";
import FilmsItem from "./FilmsItem";
import { IFilmsDetail } from "../../../types/IFilmsDetail";

import './styles.scss';


interface IFilmsListParams {
    list: IFilmsDetail[];
    
}

const FilmsList: React.FC<IFilmsListParams> = ({list}) => (
    <div className="filmsList"> 
        {list.map((film:IFilmsDetail) => (
            <FilmsItem key={film.id} item={film}/>
        ))}
    </div>
)



export default FilmsList;