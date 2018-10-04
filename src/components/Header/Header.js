import React, { Component } from 'react';
import './Header.scss';

import Button from './../Button/Button';
import Tooltip from './../Tooltip/Tooltip';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className='identity'>
                        <Button href='#0' className='button-plain button-primary button-typographic'>
                            ph
                            <Tooltip className='tooltip-discloseable'>Yup, this is Pavel. Hey!</Tooltip>
                        </Button>
                    </div>
                    <div className='menu'>
                        <Button href='#0' className='button-plain button-primary'>Work</Button>
                        <Button href='#0' className='button-plain button-primary'>Play</Button>
                        <Button href='#0' className='button-plain button-primary'>Resume</Button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;