import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import About from "./pages/About/About";

import Contact from "./pages/Contact/Contact";

import Menu from "./components/Menu/Menu";


const estaAutenticado = () => false;

const PrivateRoute = ({component: Component, ...rest}) => (
    

    <Route {...rest} render={
        
        props => (
            estaAutenticado() ? (
                <Component {...props}/>    
            ):(
                <h1 style={{margin:"100px 30%",textAlign:"center"}} >Você não está autenticado e portanto não pode acessar essa página</h1>
            )    
        )
        
    }
    />
)



export default function Routes() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  exact path="/about" component={About}/>
                <Route  exact path="/contact" component={Contact} />
                <PrivateRoute path="/dash" component={() => <div><Menu/><h1 style={{margin:"100px 25%"}}>Seja bem vindo ao dashboard</h1></div>}/>
            </Switch>
        </BrowserRouter>
    )
}
