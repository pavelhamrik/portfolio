import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as ReactGA from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';

import Home from './content/Home';
import Contact from './content/Contact';
import NotFound from './content/NotFound';
import Work from './content/Work';
import FigureProject from "./content/work/FigureProject";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.scss';

ReactGA.initialize( 'UA-130424963-1', {
    debug: false,
} );

const history = createBrowserHistory();
history.listen( () => {
    ReactGA.pageview( window.location.pathname + window.location.search );
} );

smoothscroll.polyfill();

class App extends Component {
    componentDidMount() {
        ReactGA.pageview( window.location.pathname + window.location.search );
    }

    render() {
        return (
            <Router history={history}>
                <div className='App'>
                    <Header/>
                    <div className='Content'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/contact/' component={Contact}/>
                            <Route path='/work/' component={Work}/>
                            <Route path='/work/figure/' component={FigureProject}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
