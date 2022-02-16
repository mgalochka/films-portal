import React from "react";
import { NavLink } from "react-router-dom";
import { routMain as routFilmsDetail} from '../../../../pages/FilmsDetail';
import { IFilmsDetail } from "../../../../types/IFilmsDetail";
import DateView from "components/DateView";
import './styles.scss';

interface IFilmsItemParams {
    item: IFilmsDetail;
}

const FilmsItemCategori: React.FC<IFilmsItemParams> = ({item}) => (
    
    <NavLink className="filmsItem" to={routFilmsDetail(item.id)}>
        <div className="leftPart">
            <div className="filmsImg">
                <img className="filmsImg" src={item.image ? item.image.medium : ''} alt={item.image.medium} />
            </div>
        </div>
        <div className="rightPart">
             <div className="nameSpan">{item.name}</div>
             <div className="summary">
                <p className="filmsdesc">{item.genres.join(', ')}</p>
            </div>
        </div>
       
    </NavLink>
 )

 export default  FilmsItemCategori;