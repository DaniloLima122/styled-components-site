import React from 'react';
import { Route, Link } from "react-router-dom";
import { Nav } from "./styleMenu";

export default function Menu() {
    return (
        <Nav>
            <Route>
                <Link to="/" className="logo">/></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/dash">Dashboard</Link></li>
                </ul>
            </Route>
        </Nav>
    )
}
