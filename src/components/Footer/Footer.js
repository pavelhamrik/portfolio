import React, { Component } from 'react';
import { Grid, GridItem } from './../Grid/Grid';
import { Flex, FlexItem } from './../Flex/Flex';
import Button from "../Button/Button";
import { MailToUrl } from "../../content/utils/MailTo";
import Monogram from "../Monogram/Monogram";

import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid className='medium-2-cols'>
                    <GridItem>
                        <Flex className='flex-align-center flex-gapped'>
                            <FlexItem>
                                <Monogram className='monogram-inverse' />
                            </FlexItem>
                            <FlexItem className='flexitem-grow-2'>
                                <p>Pavel Hamrik
                                    <span className='all-display-none small-display-inline'> &bull; </span>
                                    <span className='all-display-block small-display-inline'>Product designer with&nbsp;zeal</span>
                                </p>
                            </FlexItem>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <p className='all-align-center small-align-right'>
                            <Button href={MailToUrl} className='button-plain button-inverse'>Email&nbsp;&#8599;</Button>
                            <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-inverse'>LinkedIn&nbsp;&#8599;</Button>
                            <Button href='https://github.com/pavelhamrik' target='_blank' className='button-plain button-inverse'>GitHub&nbsp;&#8599;</Button>
                        </p>
                    </GridItem>
                </Grid>
            </footer>
        );
    }
}

export default Footer;