import React from 'react'

import { MCard } from "./cardstyle";

import imagem from "../../img/banner.jpg";

export default function Card() {
    return (
        <MCard>
              <img src={imagem}/>
              <h4>Estilos incríveis</h4>
              <p>Crie estilos incríveis com styled componentsasdasdasdasdasdasdasd</p>  
              <button>Get Started</button>
        </MCard>
    )
}
