import React, { Component } from 'react';
import {Grid, GridItem} from './../Grid/Grid';

import './Footer.scss';


class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid className='medium-2-cols large-4-cols huge-6-cols huge-offset-2'>
                    <GridItem>Grid Item 1</GridItem>
                    <GridItem>Grid Item 2</GridItem>
                    <GridItem>Grid Item 3</GridItem>
                    <GridItem>Grid Item 4</GridItem>
                </Grid>
                <Grid className=''>
                    <GridItem>All that footer stuff…</GridItem>
                </Grid>
            </footer>
        );
    }
}

export default Footer;