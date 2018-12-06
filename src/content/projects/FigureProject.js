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
import { IconBlock } from '../../components/Icon/Icon';


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
                                        <Figure src={imgRegisterIpad} alt='Figure register iOS app screen'
                                                className='floating'/>
                                    </FlexItem>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Splash>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 className='auxiliary white-space-great-emphasis-top' id='contents'>Contents</h2>
                            <ol className='auxiliary'>
                                <li><Button href='#design-process' className='button-link'>Design Process</Button></li>
                                <li><Button href='#working-with-the-team' className='button-link'>Working with the Team</Button></li>
                                <li><Button href='#prototyping' className='button-link'>Prototyping</Button></li>
                                <li><Button href='#validation' className='button-link'>Validation</Button></li>
                                <li><Button href='#design-considerations' className='button-link'>Design Considerations</Button></li>
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
                            <p>The team's design process changed a lot over the 3 years. I'm going to describe the essence of it.</p>
                        </GridItem>

                        <GridItem className='col-medium-4'>
                            <IconBlock icon='explore' className='spacious'>
                                <h3>Discovery</h3>
                            </IconBlock>
                            <p>Included user research, analysis of competition and tapping internal sources.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='map' className='spacious'>
                                <h3>Building Insight</h3>
                            </IconBlock>
                            <p>We collated our initial research in short design documents, spreadsheets and productboard.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='near_me' className='spacious'>
                                <h3>Decision Making</h3>
                            </IconBlock>
                            <p>About 3 people were usually involved in determining which features will we be building and when.</p>
                        </GridItem>

                        <GridItem className='col-medium-4'>
                            <IconBlock icon='local_laundry_service' className='spacious'>
                                <h3>Early Designs</h3>
                            </IconBlock>
                            <p>Rough drafts, often dirty, often thrashed (read: archived), exploring our options.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='assignment_late' className='spacious'>
                                <h3>Internal Critique</h3>
                            </IconBlock>
                            <p>Show, don't tell, then see how it works. Ranged from 'corridor' tests over design critique to seeking help from an expert outsider.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='vibration' className='spacious'>
                                <h3>Mockups, Prototyping</h3>
                            </IconBlock>
                            <p>Gaining on fidelity, deepening interactions, anything to make future tests viable.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='record_voice_over' className='spacious'>
                                <h3>Client Pre-Validation</h3>
                            </IconBlock>
                            <p>We pre-validated especially larger and more 'expensive' features, or those where our trust in execution was low.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='brush' className='spacious'>
                                <h3>Visual Designs</h3>
                            </IconBlock>
                            <p>Last refinement of the designs, focus on clarity and consistency, unless a clear improvement was at hand.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='code' className='spacious'>
                                <h3>Implementation and Testing</h3>
                            </IconBlock>
                            <p>Close collaboration ensured the feature would be delivered as envisioned or better.</p>
                        </GridItem>

                        <GridItem className='col-medium-offset-2 col-medium-4'>
                            <IconBlock icon='new_releases' className='spacious'>
                                <h3>Release</h3>
                            </IconBlock>
                            <p>We released often and aimed for predictability, as well as informing our customers about the changes.</p>
                        </GridItem>
                        <GridItem className='col-medium-4'>
                            <IconBlock icon='visibility' className='spacious'>
                                <h3>Monitoring</h3>
                            </IconBlock>
                            <p>We often discovered additional insights after our customers experienced more of the new feature.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='working-with-the-team'>Working with the Team</h2>
                            <p>Our team was split between two continents, three at times. Our market revolved around New York, where worked our co-founder and key account people. Product design and development took place in Brno, Czech Republic.</p>
                            <p>Sharing insights, deliverables and feedback was facilitated using a variety of tools like InVision, Google Sheets, productboard, Slack.</p>
                            <p>Frequent video calls took place, scheduled or ad-hoc, with the entire team, parts of it or just a couple of individuals as needed.</p>
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
                                continually handling the qualitative side of gathering insights and obtaining validation
                                data.</p>
                            <p>We collected and processed input from at-scale channels such as email or Intercom.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='design-considerations'>Design Considerations</h2>
                            <IconBlock icon='opacity'>
                                <h3>Clarity of Data</h3>
                            </IconBlock>
                            <p>Our priority was to provide clear view of relevant data to minimize probability of human
                                error on one hand, and to promote discoverability of reporting insights on the other.</p>
                            <IconBlock icon='line_weight'>
                                <h3>Information Density</h3>
                            </IconBlock>
                            <p>Although airy designs are both in fashion and easier to navigate, the amount of data a
                                cashier requires to process at any given time forced us to opt for a higher density of
                                information.</p>
                        </GridItem>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <IconBlock icon='timer'>
                                <h3>Speed and productivity of interactions</h3>
                            </IconBlock>
                            <p>Unlike a consumer-focused app, we built Figure for the power user. We made partial
                                sacrifices to intuitiveness and system status visibility wherever it led to greater
                                overall efficiency of use. We were careful to monitor these.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='visual-designs'>Visual Designs</h2>
                            <h3>Figure Register</h3>
                            <p>The register iPad app is the company's main product and most our attention was paid to
                                it.</p>
                            <p>Over the 3 years, I kept evolving the visual style, trying to constantly improve on
                                clarity and legibility of what's on the screen.</p>
                            <p>Later reimplementation of the app in React Native allowed us to overhaul the UI as well.
                                The new technology greatly increased our ability to produce rich UI quickly and allowed
                                more team members to participate in its creation, myself included.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
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
                            <p>The redesigned management and reporting web app relies entirely on the Ant Design design
                                system.</p>
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
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
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
                            <p>We produced a working version in little over a year, deployed it at a customer's location
                                and had it running there ever since.</p>
                            <p>As Figure Register matured and became more capable, we were gradually increasing our base
                                of testing customers, later converting them to paying customers.</p>
                            <p>Stability and reliability issues of the app were an ongoing weakness we addressed
                                repeatedly. I think we were unable to spot the point at which we were coming 'out of
                                beta', gaining on a significant technological debt we had little time to substantially
                                decrease.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
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
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <p>A number of our customers were delighted by our app overall, mentioning particular
                                features, the overall feel and aesthetically pleasing visuals.</p>
                            <p>At the time of my parting ways with the team, I saw critical validations by the market
                                yet to come.</p>
                        </GridItem>
                    </Grid>
                </SlideContainer>
                <SlideContainer>
                    <Grid>
                        <GridItem className='col-medium-offset-2 col-medium-8'>
                            <h2 id='my-role'>My Role</h2>
                            <p>I was initially hired to prototype minimal design of the main product-to-be, the Register
                                app, in late 2014.</p>
                            <p>As Figure's production phase started in May 2015, I assumed a dual responsibility over
                                the overall executive of Figure as
                                a team as well as leadership of it's product efforts.</p>
                            <p>After a bit over a year in, <Button href='https://www.linkedin.com/in/kelly-yang/'
                                                                   className='button-link' target='_blank'>Kelly
                                Yang&nbsp;&#8599;</Button>, a seasoned product manager, came on board and took
                                over the at the time growing steering needs of our product's direction.</p>
                            <p>As our team continued to grow, talented people took additional responsibilities upon
                                themselves, such
                                as recruiting and management of development operations. This allowed me to stay focused
                                on
                                the high-level and on product design which I did till I left the company in April
                                2018.</p>
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
                                                className='button-link'>productboard&nbsp;&#8599;</Button></td>
                                    <td>As the amount of people involved in Figure's direction grew, it became crucial
                                        to process insights coming through various channels and keep everyone on the
                                        same page. I would've liked to see us using it more in prioritization workflows.
                                    </td>
                                </tr>
                                <tr>
                                    <td><Button href='https://www.intercom.com/' target='_blank'
                                                className='button-link'>Intercom&nbsp;&#8599;</Button></td>
                                    <td>Intercom streamlined our at-scale communications with customers. We also
                                        deployed our support docs there to offload some of the requests we would have to
                                        handle by hand otherwise.
                                    </td>
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
                                    <td>Working with Jira Agile, it was a daily place to go to for status of the product
                                        as well as the daily priorities of individual teammates. Productboard's
                                        integration with Jira saved us a lot of clicking.
                                    </td>
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
                        <GridItem className='white-space-emphasis white-space-great-emphasis-bottom col-medium-offset-2 col-medium-8'>
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
