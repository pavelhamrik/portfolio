import React, { Component } from 'react';
import { Grid, GridItem } from './../Grid/Grid';
import { Flex, FlexItem } from './../Flex/Flex';
import Button from "../Button/Button";
import { MailTo, MailToUrl } from "../../content/utils/MailTo";
import Monogram from "../Monogram/Monogram";

import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid className='medium-2-cols grid-compensated-gap'>
                    <GridItem>
                        <Flex className='flex-align-center flex-gapped'>
                            <FlexItem>
                                <Monogram className='monogram-inverse monogram-tight' />
                            </FlexItem>
                            <FlexItem>
                                <p>Pavel Hamrik &bull; Product designer with zeal</p>
                            </FlexItem>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <p className='medium-right'>
                            <Button href={MailToUrl} className='button-plain button-link button-inverse'>{MailTo}</Button>
                            <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-link button-inverse'>LinkedIn&nbsp;&#8599;</Button>
                            <Button href='https://www.instagram.com/pavelhamrik/' target='_blank' className='button-plain button-link button-inverse'>Instagram&nbsp;&#8599;</Button>
                        </p>
                    </GridItem>
                </Grid>
            </footer>
        );
    }
}

export default Footer;