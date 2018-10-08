import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <Grid className='medium-1-cols'>
                <GridItem>
                    <div className='NotFound'>
                        <h1>Oh, that old pickle – not found</h1>
                        <p>Well, we'd better <Link to='/'>head home</Link>.</p>
                        {/*<p>Well, we'd better head home.</p>*/}
                    </div>
                </GridItem>
            </Grid>
        );
    }
}

export default NotFound;
