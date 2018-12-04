import React, { Component } from 'react';
import Button from './../Button/Button';

import Monogram from "../Monogram/Monogram";
import Tooltip from "../Tooltip/Tooltip";
import { Grid, GridItem } from "../Grid/Grid";

import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Grid className='grid-align-center'>
                    <GridItem className='col-all-4'>
                        <Monogram>
                            <Tooltip className='tooltip-discloseable'>Yup, that's me. Hey!</Tooltip>
                        </Monogram>
                    </GridItem>
                    <GridItem className='col-all-8 all-right'>
                        <div className='menu'>
                            <Button href='/project/figure/' className='button-plain button-primary'>Work</Button>
                            {/*<Button href='/play/' className='button-plain button-primary'>Play</Button>*/}
                            <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-primary'>Resume&nbsp;&#8599;</Button>
                        </div>
                    </GridItem>


                </Grid>
            </header>
        );
    }
}
