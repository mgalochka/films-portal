import React from "react";
import prepareData from "utls/prepareDate";


interface IDateViewParams {
    value: string;
}

const DateView: React.FC<IDateViewParams> = ({value}) => {
    const {year} = prepareData(value)
    return (
    <p className="dateView" >
        <span className="year" >{year}</span> 
     
    </p>
    )
}
export default DateView;
