import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import MainPage, {routMain as routMainPage} from "../../pages/MainPage";
import FilmsDetail, {routMain as routFilmsDetail} from "../../pages/FilmsDetail";
import AboutPage, {routAbout as routAboutPage} from "../../pages/AboutPage";
import CategoriPage, {routCategori as routCategoriPage} from "../../pages/CategoriPage";
import SearchPage, {routSearch as routSearchPage} from "../../pages/SearchPage";

import Header from "../Header";
import Footer from "../Footer";

import './styles.scss';

const AppContent = () => {
    return (
        <div className="MainWrapper">
            <Header/>
            <main>
                <Switch>
                    <Route exact path={routMainPage()} component={MainPage}/>
                    <Route exact path={routFilmsDetail()} component={FilmsDetail}/>
                    <Route exact path={routAboutPage()} component={AboutPage}/>
                    <Route exact path={routCategoriPage()} component={CategoriPage}/>
                    <Route exact path={routSearchPage()} component={SearchPage}/>
                    <Redirect
                        to={{
                            pathname: routMainPage()
                        }}
                    />

                </Switch>
            </main>
            <Footer/>
        </div>
    );
}
export default AppContent;