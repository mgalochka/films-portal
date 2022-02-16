import React from "react";

import './styles.scss';


interface IPageTitleParams {
    title: JSX.Element;
}
const PageTitle: React.FC<IPageTitleParams> = ( {title}) => <div className="pageTitle"><h2 className="selectedCtegory">Выбранная категория:<span className="titleCtegory">{title}</span> </h2></div>

export default PageTitle;