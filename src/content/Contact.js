import React, {Component} from "react";
import {Grid, GridItem} from "../components/Grid/Grid";
import Button from "../components/Button/Button";
import { MailToUrl } from "./utils/MailTo";

class Contact extends Component {
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
