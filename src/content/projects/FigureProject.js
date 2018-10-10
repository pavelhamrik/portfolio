import React, { Component } from "react";
import { Grid, GridItem } from "./../../components/Grid/Grid";
// import Splash from "./../../components/Splash/Splash";
// import Button from "./../../components/Button/Button";

class FigureProject extends Component {
    render() {
        return (
            <Grid className='FigureProject medium-1-cols'>
                <GridItem>
                    <h1 className='headline'>Figure POS<br/>Empowering small businesses</h1>
                    <p className='lead'>…</p>
                </GridItem>
            </Grid>
        );
    }
}

export default FigureProject;
