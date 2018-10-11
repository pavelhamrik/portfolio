import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Splash from "../components/Splash/Splash";
import Button from "../components/Button/Button";

class Home extends Component {
    render() {
        return (
            <Grid className='medium-1-cols'>
                <GridItem>
                    <Splash>
                        <h1 className='headline'>Hi, I'm Pavel,<br/>a <strong>product designer</strong> with zeal;</h1>
                        <p className='lead'>I'm <strong>environmentally friendly</strong>, with
                            a <strong>developer</strong> background, a thing for <strong>ethics</strong> and a crush
                            on <strong>persuasive games</strong>.<br/>My friends say I'm diligent (yeah, boring, but how
                            useful!) and have a keen eye. </p>
                        <p><Button href='/contact/' className='button-primary button-large'>Say Hi</Button></p>
                    </Splash>
                </GridItem>
            </Grid>
        );
    }
}

export default Home;
