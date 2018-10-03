import React, {Component} from 'react';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Grid, GridItem} from "./components/Grid/Grid";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='Content'>
                    <Grid className='medium-1-cols'>
                        <GridItem>
                            <h1 className='headline'>Hi, I'm Pavel,<br/>a product designer with zeal</h1>
                            <Button>Say Hi!</Button>
                        </GridItem>
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
