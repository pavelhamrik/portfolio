import React, { Component } from 'react';
import Button from './../Button/Button';

import Monogram from "../Monogram/Monogram";
import Tooltip from "../Tooltip/Tooltip";
import { Grid, GridItem } from "../Grid/Grid";

import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <Grid className='all-2-cols grid-align-center'>
                    <GridItem>
                        <Monogram>
                            <Tooltip className='tooltip-discloseable'>Yup, that's me. Hey!</Tooltip>
                        </Monogram>
                    </GridItem>
                    <GridItem className='medium-right'>
                        <div className='menu'>
                            <Button href='/project/figure/' className='button-plain button-primary'>Work</Button>
                            {' '}
                            <Button href='/play/' className='button-plain button-primary'>Play</Button>
                            {' '}
                            <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-primary'>Resume&nbsp;&#8599;</Button>
                        </div>
                    </GridItem>


                </Grid>
            </header>
        );
    }
}

export default Header;