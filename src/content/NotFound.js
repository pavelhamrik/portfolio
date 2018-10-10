import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <Grid className='NotFound medium-1-cols'>
                <GridItem>
                    <h1 className='headline'>Oh, that old pickle – not found</h1>
                    <p>Well, we'd better <Link to='/'>head home</Link>.</p>
                </GridItem>
            </Grid>
        );
    }
}

export default NotFound;
