import React from 'react';

import { HBanner } from "./BannerStyle";

import imagem from "../../img/banner.jpg";

export default function Banner() {
    return (
        <HBanner>
            <img src={imagem}/>
            <h1>Styled Components</h1>
            <button>Get Started</button>
        </HBanner>
    )
}
