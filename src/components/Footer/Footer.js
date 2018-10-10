import React, { Component } from 'react';
import {Grid, GridItem} from './../Grid/Grid';

import './Footer.scss';


class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid className='medium-2-cols large-4-cols huge-6-cols huge-offset-2'>
                    <GridItem>Item 1</GridItem>
                    <GridItem>Item 2</GridItem>
                    <GridItem>Item 3</GridItem>
                    <GridItem>Item 4</GridItem>
                </Grid>
                <Grid className='medium-1-cols'>
                    <GridItem>All that footer stuff…</GridItem>
                </Grid>
            </footer>
        );
    }
}

export default Footer;