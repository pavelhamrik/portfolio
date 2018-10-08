import React, {Component} from 'react';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Grid, GridItem} from "./components/Grid/Grid";
import Splash from './components/Splash/Splash';
import Label from './components/Label/Label';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='Content'>
                    <Grid className='medium-1-cols'>
                        <GridItem>
                            <Splash>
                                <Label className='label-secondary'>Go mobile first!</Label>
                                <h1 className='headline'>Hi, I'm Pavel,<br/>a <strong>product designer</strong> with zeal</h1>
                                <p className='lead'>I'm <strong>environmentally friendly</strong>, with a <strong>developer</strong> background, a thing for <strong>ethics</strong> and a crush on <strong>persuasive games</strong>.<br/>My friends say I'm diligent (yeah, boring, but how useful!) and have a keen eye. </p>
                                <p><Button className='button-primary button-large'>Say Hi</Button></p>
                            </Splash>
                        </GridItem>
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
