import React from 'react'

import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

import { MAbout } from "./aboutstyle";

export default function About() {
    return (
        <MAbout>
            <Menu />
            <div>

            <h1>Sobre o Styled Components</h1>
            <p>styled-components é uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação. Eles são escritos em uma mistura de JavaScript com CSS.
Se você ainda não está familiarizado com styled-components, dê uma olhada no website oficial para ter uma idéia.</p>
            </div>
            <Footer />
        </MAbout>
    )
}
