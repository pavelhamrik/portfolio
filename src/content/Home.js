import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Splash from "../components/Splash/Splash";
import Button from "../components/Button/Button";
import { updateDocTitle } from './utils/documentTitle';
import Landscape from '../components/Landscape/Landscape';

class Home extends Component {
    componentDidMount() {
        updateDocTitle();
    }

    render() {
        return (
            <Grid className='medium-1-cols Home'>
                <GridItem>
                    <Splash>
                        <Landscape className='landscape-bottom landscape-right'/>
                        <h1 className='headline'>Hi, I’m Pavel,&nbsp;<span role='img' aria-label='Waving hand emoji'>👋</span><br/>a <strong>product designer</strong> with zeal</h1>
                        <p className='lead white-space-emphasis-top cozy-line-length'>I'm <strong>environmentally friendly</strong>, with
                            a <strong>developer</strong> background, a thing for <strong>ethics</strong> and a crush
                            on <strong>persuasive games</strong>.</p>
                        <p className='lead cozy-line-length'>My friends say I'm diligent (yeah, boring, how useful!) and have a keen eye. </p>
                        <p className='white-space-emphasis'>
                            <Button href='/project/figure/' className='button-large button-primary'>See My Work</Button>
                            <Button href='/contact/' className='button-large'>Say Hi</Button>
                        </p>
                    </Splash>
                </GridItem>
            </Grid>
        );
    }
}

export default Home;
