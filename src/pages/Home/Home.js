import React from 'react';

import Menu from "../../components/Menu/Menu";

import Banner from "../../components/Banner/Banner";

import {SectionText} from "./homestyle";

export default function Home() {
    return (
        <div>
            <Menu/>
            <Banner/>
            <SectionText>
                <h1>Awesome Library</h1>
                <p>Let's say you want to create a simple and reusable component that you can use throughout your application. There should be a normal version and a big and primary version for the important buttons. This is what it should look like when rendered: (this is a live example, click on them!)</p>
            </SectionText>
            

        </div>
    )
}
