import React, { Component } from 'react';
import { Grid, GridItem } from '../../components/Grid/Grid';
import { Flex, FlexItem } from '../../components/Flex/Flex';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import Splash from '../../components/Splash/Splash';
import {
    SlideshowContainer,
    SlideshowSwitchContainer,
    SlideContainer,
} from '../../components/Slideshow/Slideshow.container';
import Figure from '../../components/Figure/Figure';
import { updateDocTitle } from '../utils/documentTitle';

import imgRegisterIpad from '../../assets/Figure Register iPad.png';
import imgFigureDatePicker from '../../assets/Figure Date Picker.png';
import imgFigurePrinterSettings from '../../assets/Figure Printer Settings.png';
import imgFigurePaymentFlows from '../../assets/Figure Payment Flows.png';
import imgFigureCustomItemExclusions from '../../assets/Figure Custom Item Exclusions.png';
import imgFigureCustomerScreenSignature from '../../assets/Figure Customer Screen Signature.png';
import imgFigureCustomerScreenOptions from '../../assets/Figure Customer Screen Options.png';
import imgFigureCashRegisterReport from '../../assets/Figure Cash Register Report.png';
import imgFigureNetRevenueReport from '../../assets/Figure Net Revenue Report.png';
import imgFigurePaymentSummary from '../../assets/Figure Payment Summary.png';
import imgFigureCustomItem from '../../assets/Figure Custom Item.png';
import imgFigureManageItemsAndCats from '../../assets/Figure Manage Items and Cats.png';
import imgFigureManageItemsAndCatsDetail from '../../assets/Figure Manage Items and Cats Detail.png';
import imgFigureManageItemsAndCatsEmpty from '../../assets/Figure Manage Items and Cats Empty.png';
import imgFigureManageItemsAndCatsEmptyDetail from '../../assets/Figure Manage Items and Cats Empty Detail.png';
import imgFigureManageModifiers from '../../assets/Figure Manage Modifiers.png';
import imgFigureManageModifiersDetail from '../../assets/Figure Manage Modifiers Detail.png';


export default class FigureProject extends Component {
    componentDidMount() {
        updateDocTitle( 'Figure POS' );
    }

    render() {
        return (
            <SlideshowContainer className='FigureProject'>
                <SlideContainer>
                    <Splash>
                        <Grid>
                            <GridItem className='col-large-offset-2 col-medium-offset-1 col-medium-6  col-large-5'>
                                <Flex className='flex-direction-column flex-justify-space-between flex-padded'>
                                    <FlexItem>
                                        <h1 className='headline'>Figure Point of&nbsp;Sale</h1>
                                        <p className='lead'>Figure's mission is empowering small and medium-sized
                                            businesses with the insights to steer effectively and the toolkit to cover
                                            their day-to-day operations.</p>
                                        <p className='lead'>The means to achieve this is a lightweight, carefully scoped
                                            point of sale system.</p>
                                        <h2 className='auxiliary'>My Involvement</h2>
                                        <p>
                                            <Label className='label-primary'>Product Design</Label>
                                            <Label className='label-secondary'>Product Management</Label>
                                            <br/>
                                            <Label className='label-faded'>Executive</Label>
                                            <Label className='label-faded'>Leadership</Label>
                                            <Label className='label-faded'>Front End Coding</Label>
                                        </p>
                                    </FlexItem>
                                    <FlexItem className='slideshow-hide'>
                                        <Flex
                                            className='flex-justify-space-between flex-align-center white-space-emphasis-top'>
                                            <FlexItem>
                                                <Button href='#contents' className='button-large'>
                                                    Read On &darr;
                                                </Button>
                                            </FlexItem>
                                            <FlexItem className='all-display-none medium-display-flex'>
                                                <SlideshowSwitchContainer id='slideshow-switch-1'>
                                                    <i className="material-icons">fullscreen</i> Enjoy as Slideshow
                                                </SlideshowSwitchContainer>
                                            </FlexItem>
                                        </Flex>
                                    </FlexItem>
                                </Flex>
                            </GridItem>
                            <GridItem className='col-medium-5'>
                                <Flex className='flex-align-center'>
                                    <FlexItem>
                                        <Figure src={imgRegisterIpad} alt='Figure register iOS app screen' className='floating'/>
                                    </FlexItem>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Splash>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 className='auxiliary white-space-emphasis-top' id='contents'>Contents</h2>
                            <ol className='auxiliary'>
                                <li><Button href='#design-process' className='button-link'>Design Process</Button></li>
                                <li><Button href='#prototyping' className='button-link'>Prototyping</Button></li>
                                <li><Button href='#validation' className='button-link'>Validation</Button></li>
                                <li><Button href='#design-considerations' className='button-link'>Design
                                    Considerations</Button></li>
                                <li><Button href='#outcomes' className='button-link'>Outcomes</Button></li>
                                <li><Button href='#my-role' className='button-link'>My Role</Button></li>
                                <li><Button href='#toolkit' className='button-link'>Toolkit</Button></li>
                            </ol>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='design-process'>Design Process</h2>
                            <code>{`
                                Discovery ->
                                Building insight ->
                                Making decisions ->
                                Early designs -> [cycle]
                                Internal critique, corridor tests -> [cycle]
                                Mockups, prototyping -> [cycle]
                                Client pre-validation -> [cycle]
                                Visual designs ->
                                Implementation -> [cycle]
                                Release ->
                                Monitoring
                            `}</code>
                            <p>…</p>
                            <code>
                                Show some data, spreadsheets etc.
                            </code>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='prototyping'>Prototyping</h2>
                            <p>We used a variety of prototyping methods depending on the interface's complexity and
                                testing means including fidelity that would be required for a meaningful evaluation.</p>
                            <p>I created most of our prototypes.</p>
                            <ol>
                                <li>Low-fidelity structural mockups and wireframes for internal review and iteration
                                </li>
                                <li>Low-fidelity dirty prototypes for expert review and critique</li>
                                <li>Low-fidelity prototypes made interactive using InVision and their Craft suite</li>
                                <li>High-fidelity prototypes roughly implemented in a testing branches of our apps</li>
                                <li>High-fidelity focused prototypes created in Framer or similarly scripted</li>
                            </ol>
                            <p>For testing with actual users and clientele, we used especially the last 2 types as they
                                were most representative and easy for them to work with.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-6'>
                            <Figure src={imgFigureDatePicker}
                                    caption='Every designer thinks at some point that they can make a better date picker'/>
                        </GridItem>
                        <GridItem className='col-medium-6'>
                            <Figure src={imgFigurePrinterSettings}
                                    caption='A vertical slice through a receipt printing feature'/>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-6'>
                            <Figure src={imgFigurePaymentFlows}
                                    caption='Early deliverables of a payment flows redesign'/>
                        </GridItem>
                        <GridItem className='col-medium-6'>
                            <Figure src={imgFigureCustomItemExclusions}
                                    caption='An extract using high-fidelity UI but focused on a particular feature'/>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='validation'>Validation</h2>
                            <p>We used both qualitative and quantitative validation methods. As our product development
                                team was removed from our clients, logs, metrics and analytics were more readily
                                available.</p>
                            <p>Our co-founder, product manager and account people (all working stateside) were
                                continually handlign the qualitative side of gathering insights and obtaining validation
                                data.</p>
                            <p>…</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='design-considerations'>Design Considerations</h2>
                            <h3>Information Density</h3>
                            <p>…</p>
                        </GridItem>
                        <GridItem className='col-medium-4 col-medium-offset-2'>
                            <code>[density img 1]</code>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <code>[density img 2]</code>
                        </GridItem>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h3>Speed and productivity of interactions</h3>
                            <p>…</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='visual-designs'>Visual Designs</h2>
                            <h3>Figure Register</h3>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigureCustomItem} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigurePaymentSummary} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigureNetRevenueReport} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigureCustomerScreenSignature} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigureCustomerScreenOptions} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-6 col-medium-4'>
                            <Figure src={imgFigureCashRegisterReport} className='unpadded'/>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h3>Figure Manage</h3>
                            <p>The redesigned management and reporting web app relies entirely on the Ant Design design system.</p>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageItemsAndCats} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageItemsAndCatsEmpty} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageModifiers} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageItemsAndCatsDetail} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageItemsAndCatsEmptyDetail} className='unpadded'/>
                        </GridItem>
                        <GridItem className='col-small-4'>
                            <Figure src={imgFigureManageModifiersDetail} className='unpadded'/>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='outcomes'>Outcomes</h2>
                        </GridItem>
                        <GridItem className='col-large-10'>
                            <div className='quote'>
                                <blockquote cite='https://www.figurepos.com/#testimonials'>
                                    Processing orders on the fly has never been easier. We have been able to take our
                                    business beyond our brick & mortar location with this simple to use yet powerful
                                    tool.
                                </blockquote>
                                <cite>
                                    <strong>Esther Choi</strong> • Mŏkbar
                                </cite>
                            </div>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='my-role'>My Role</h2>
                            <p>…</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='toolkit'>Toolkit</h2>
                            <p>I employed a wide variety of design-related tools over the three years with Figure. The
                                most notable follow.</p>
                            <table className='table-aesthetic'>
                                <thead>
                                <tr>
                                    <th>Tool</th>
                                    <th>Use</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><Button href='https://www.sketchapp.com/' target='_blank'
                                                className='button-link'>Sketch&nbsp;&#8599;</Button></td>
                                    <td>Vast majority of visual design deliverables were created in it.</td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.invisionapp.com/' target='_blank'
                                                className='button-link'>InVision&nbsp;&#8599;</Button></td>
                                    <td>We shared and discussed our designs here, relying heavily on the commenting
                                        functions. InVision's interactivity features allowed us to create and test
                                        simple prototypes.
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.invisionapp.com/craft' target='_blank'
                                                className='button-link'>Craft&nbsp;&#8599;</Button></td>
                                    <td>This plugin suite bridges Sketch and InVision rather nicely. I also saved a lot
                                        of sanity by exploiting its content generation capabilities.
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button href='https://framer.com/' target='_blank'
                                                className='button-link'>Framer&nbsp;&#8599;</Button></td>
                                    <td>For when I needed to have full control over our prototypes.</td>
                                </tr>
                                <tr>
                                    <td><Button href='https://ant.design/' target='_blank' className='button-link'>Ant
                                        Design&nbsp;&#8599;</Button></td>
                                    <td>We relied on Ant Design design system when reimplementing our web-based
                                        reporting app. I drew from its Sketch resources, while the developers enjoyed
                                        its React component library.
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.productboard.com/' target='_blank'
                                                className='button-link'>Product Board&nbsp;&#8599;</Button></td>
                                    <td>…</td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.intercom.com/' target='_blank'
                                                className='button-link'>Intercom&nbsp;&#8599;</Button></td>
                                    <td>…</td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.google.com/sheets/about/' target='_blank'
                                                className='button-link'>Google Sheets&nbsp;&#8599;</Button></td>
                                    <td>Not impressive, sure, but I have only the greatest respect given the amount of
                                        research we processed in them.
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.atlassian.com/software/jira' target='_blank'
                                                className='button-link'>Jira&nbsp;&#8599;</Button></td>
                                    <td>…</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button href='https://logz.io/' target='_blank'
                                                className='button-link'>Logz.io&nbsp;&#8599;</Button><br/>
                                        <Button href='https://sentry.io/' target='_blank'
                                                className='button-link'>Sentry&nbsp;&#8599;</Button><br/>
                                        <Button href='https://newrelic.com/' target='_blank' className='button-link'>New
                                            Relic&nbsp;&#8599;</Button>
                                    </td>
                                    <td>Although more a part of a developer's toolset, monitoring of our production and
                                        beta apps constantly informed our design and product decisions. Custom
                                        dashboards allowed us to quickly orient ourselves and especially Elasticsearch's
                                        powerful search capabilities let us see what is what.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer className='slideshow-hide'>
                    <Grid>
                        <GridItem className='white-space-emphasis col-medium-offset-2 col-medium-8'>
                            <h2>Have something like this in mind?</h2>
                            <Flex className='flex-justify-space-between'>
                                <FlexItem>
                                    <Button href='/contact/' className='button-large'>Get in Touch</Button>
                                </FlexItem>
                                <FlexItem>
                                    <Button href='#top' className='button-plain button-large'>Back to
                                        Top &uarr;</Button>
                                </FlexItem>
                            </Flex>
                        </GridItem>
                    </Grid>
                </SlideContainer>
            </SlideshowContainer>
        );
    }
}
