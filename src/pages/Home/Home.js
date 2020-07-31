import React from 'react';

import Menu from "../../components/Menu/Menu";

import Banner from "../../components/Banner/Banner";

import Card from "../../components/Card/Card";

import Footer from "../../components/Footer/Footer";

import { SectionText, SectionCards, GetStarted, Citacao } from "./homestyle";

export default function Home() {
    return (
        <div>
            <Menu />
            <Banner />
            <SectionText>
                <h1>Awesome Library</h1>
                <p>Let's say you want to create a simple and reusable component that you can use throughout your application. There should be a normal version and a big and primary version for the important buttons. This is what it should look like when rendered: (this is a live example, click on them!)</p>
            </SectionText>

            <SectionCards>
                <Card />
                <Card />
                <Card />
            </SectionCards>

            <GetStarted>
                <button>Get started</button>
            </GetStarted>

            <Citacao>

                <h2>
                    <em>"Começe a usar hoje mesmo nos seus projetos"</em>
                </h2>
            </Citacao>

            <Footer/>

        </div>
    )
}
