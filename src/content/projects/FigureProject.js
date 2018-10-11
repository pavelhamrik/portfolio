import React, { Component } from "react";
import { Grid, GridItem } from "./../../components/Grid/Grid";
import Label from "../../components/Label/Label";
// import Splash from "./../../components/Splash/Splash";
// import Button from "./../../components/Button/Button";

class FigureProject extends Component {
    render() {
        return (
            <Grid className='FigureProject medium-1-cols'>
                <GridItem>
                    <h1 className='headline'>Figure POS<br/>Empowering small businesses</h1>
                    <p className='lead'>We aimed at…</p>
                    <p>
                        <Label className='label-primary'>Product Design</Label>
                        <Label className='label-secondary'>Product Management</Label>
                        <Label className='label-faded'>Executive</Label>
                        <Label className='label-faded'>Leadership</Label>
                    </p>
                </GridItem>
                <GridItem>
                    <h2>Design Process</h2>
                    <p>…</p>

                    <h2>…</h2>
                    <p>…</p>

                    <h2>Design Considerations</h2>
                    <h3>Information Density</h3>
                    <p>This is default type size</p>

                    <h2>My Role</h2>
                    <p>…</p>
                </GridItem>
            </Grid>
        );
    }
}

export default FigureProject;
