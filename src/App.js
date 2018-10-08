import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './content/Home';
import Contact from './content/Contact';
import NotFound from './content/NotFound';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header/>
                    <div className='Content'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            {/*<Route path='/resume' component={Resume}/>*/}
                            <Route path='/contact' component={Contact}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
