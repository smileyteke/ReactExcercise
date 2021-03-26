import { HashRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';

import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';


import NavBar from './components/NavBar';

import './App.css';

export default function Routes(){
    return (
        <>
        <HashRouter>
        <NavBar />
        <Route render={({location}) => (
            <TransitionGroup component={null}>
            <CSSTransition 
                key={location.pathname}
                classNames="page"
                timeout={400}
            >
                <Switch location={location}>
                    <Route path='/' exact component={Home} />                                     
                    <Route path='/skills' component={Skills} />
                    <Route path='/about' component={About} />
                   
                </Switch>
                </CSSTransition>
          </TransitionGroup>
        )} />
        </HashRouter>
        </>
    )
}