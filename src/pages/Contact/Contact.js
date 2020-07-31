import React from 'react'


import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

import { MContact } from "./contactstyle";

export default function Contact() {
    return (
        <MContact>

            <Menu />
            <div>
                <h2>Entre em contato conosco</h2>
                <p>(00) 0 0000-0000</p>
            </div>
            <Footer />
        </MContact>
    )
}
