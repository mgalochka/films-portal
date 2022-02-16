import React from "react";

import routAbout from "./routes";
import AboutPng from "../../components/assets/img/about.png"

import './styles.scss';

const AboutPage = () => {

    return (
        <section className="About">
            <div className="aboutWrapper">
                <div className="aboutFoto"> <img src={AboutPng} className='fotoImg' alt="foto"/></div>
                <div className="aboutDesc"> 
                    <h2 className="aboutTitle"> MOVIESinfo </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Cum sociis natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
                        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                        Phasellus viverra nulla ut metus varius laoreet.
                    </p>
                </div>
            </div>
        </section>
    )
}

export {routAbout};
export default AboutPage;