import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import { MailToUrl } from "./utils/MailTo";
import { updateDocTitle } from './utils/documentTitle';

class Contact extends Component {
    componentDidMount() {
        updateDocTitle('Contact');
    }

    render() {
        return (
            <Grid className='Contact medium-1-cols'>
                <GridItem>
                    <h1 className='headline'>Saying 'Hello' and such</h1>
                    <p><Button href={MailToUrl}>Email Me</Button></p>
                </GridItem>
            </Grid>
        );
    }
}

export default Contact;
