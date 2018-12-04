import React, { Component } from 'react';
import { Grid, GridItem } from '../components/Grid/Grid';
import { updateDocTitle } from './utils/documentTitle';
import Button from '../components/Button/Button';
import Splash from '../components/Splash/Splash';

class NotFound extends Component {
    componentDidMount() {
        updateDocTitle( 'Not Found' );
    }

    render() {
        return (
            <Splash>
                <Grid>
                    <GridItem className='col-medium-8 col-medium-offset-2'>
                        <h1 className='headline'>Oh, that old pickle: not found <span role='img' aria-label='Blushing face with hand over mouth emoji'>🤭</span></h1>
                        <p className='lead subhead'>So sorry! Try navigating from the hope page.</p>
                        <p className='white-space-emphasis'><Button href='/' className='button-large'>&larr; Head Home</Button></p>
                    </GridItem>
                </Grid>
            </Splash>
        );
    }
}

export default NotFound;
