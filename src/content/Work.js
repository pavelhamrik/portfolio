import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { updateDocTitle } from './utils/documentTitle';

class Work extends Component {
    componentDidMount() {
        updateDocTitle();
    }

    render() {
        return (
            <Grid className='medium-1-cols Work'>
                <GridItem>
                    <h1 className='headline'>Work</h1>
                    <p className='lead subhead'>…</p>

                    <Card>
                        <h2>Figure product design</h2>
                        <p>…</p>
                        <p className='white-space-emphasis'><Button href='/work/figure/' className='button-large'>Read case study</Button></p>
                    </Card>
                </GridItem>
            </Grid>
        );
    }
}

export default Work;
