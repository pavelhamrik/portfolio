import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import { MailToUrl } from "./utils/MailTo";
import { updateDocTitle } from './utils/documentTitle';
import Splash from '../components/Splash/Splash';

class Contact extends Component {
    componentDidMount() {
        updateDocTitle('Contact');
    }

    render() {
        return (
            <Splash>
                <Grid>
                    <GridItem className='col-medium-8 col-medium-offset-2'>
                        <h1 className='headline'>Don’t be a stranger <span role='img' aria-label='Woman sleuth emoji'>🕵️‍♀️</span></h1>
                        <p className='lead subhead'>Always happy to receive your line or two.</p>
                        <p className='white-space-emphasis'><Button href={MailToUrl} className='button-large'>Email Me</Button></p>
                    </GridItem>
                </Grid>
            </Splash>
        );
    }
}

export default Contact;
