import React, { Component } from 'react';
import { Grid, GridItem } from '../../components/Grid/Grid';
import Label from '../../components/Label/Label';
import { updateDocTitle } from '../utils/documentTitle';

export default class FigureProject extends Component {
    componentDidMount() {
        updateDocTitle( 'Figure POS' );
    }

    render() {
        return (
            <div className='FigureProject'>
                <Grid>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h1 className='headline'>Figure Point of Sale</h1>
                        <p className={'subhead'}>“Empowering small businesses”</p>
                        <p className='lead'>We aimed at…</p>
                        <p>
                            <Label className='label-primary'>Product Design</Label>
                            <Label className='label-secondary'>Product Management</Label>
                            <br/>
                            <Label className='label-faded'>Executive</Label>
                            <Label className='label-faded'>Leadership</Label>
                            <Label className='label-faded'>Front End Coding</Label>
                        </p>
                    </GridItem>
                </Grid>
                <Grid>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2>Contents</h2>

                        <ol>
                            <li><a href='#design-process'>Design Process</a></li>
                        </ol>
                    </GridItem>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2 id='design-process'>Design Process</h2>
                        <p>…</p>

                        <h2>…</h2>
                        <p>…</p>
                    </GridItem>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2>Prototyping</h2>
                        <p>We used a variety of prototyping methods depending on the interface's complexity and testing
                            means including fidelity that would be required for a meaningful evaluation.</p>
                        <ol>
                            <li>Low-fidelity prototypes made interactive using InVision and their Craft suite for
                                Sketch
                            </li>
                            <li>High-fidelity prototypes roughly implemented in a testing branches of our apps</li>
                            <li>Low-fidelity dirty prototypes for expert review and critique</li>
                            <li></li>
                        </ol>
                    </GridItem>
                    <GridItem className='col-medium-4'>
                        <code>[prototyping img 1]</code>
                    </GridItem>
                    <GridItem className='col-medium-4'>
                        <code>[prototyping img 2]</code>
                    </GridItem>
                    <GridItem className='col-medium-4'>
                        <code>[prototyping img 3]</code>
                    </GridItem>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2>Design Considerations</h2>

                        <h3>Information Density</h3>
                        <p>…</p>

                        <h3>Speed and productivity of interactions</h3>
                        <p>…</p>
                    </GridItem>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2>Outcomes</h2>
                        <p>…</p>
                    </GridItem>
                    <GridItem className=''>
                        <div className='quote'>
                            <blockquote cite='https://www.figurepos.com/#testimonials'>
                                Processing orders on the fly has never been easier. We have been able to take our
                                business beyond our brick & mortar location with this simple to use yet powerful tool.
                            </blockquote>
                            <cite>
                                <strong>Esther Choi</strong> • Mŏkbar
                            </cite>
                        </div>
                    </GridItem>
                    <GridItem className='col-medium-offset-2 col-medium-8'>
                        <h2>My Role</h2>
                        <p>…</p>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}
