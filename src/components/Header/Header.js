import React, { Component } from 'react';
import Button from './../Button/Button';

import './Header.scss';
import Monogram from "../Monogram/Monogram";
import Tooltip from "../Tooltip/Tooltip";

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Monogram className='monogram-tight'>
                        <Tooltip className='tooltip-discloseable'>Yup, that's me. Hey!</Tooltip>
                    </Monogram>
                    <div className='menu'>
                        <Button href='/project/figure/' className='button-plain button-primary'>Work</Button>
                        <Button href='/play/' className='button-plain button-primary'>Play</Button>
                        <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-primary'>Resume&nbsp;&#8599;</Button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;