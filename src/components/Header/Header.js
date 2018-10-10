import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

import Button from './../Button/Button';
import Tooltip from './../Tooltip/Tooltip';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className='identity'>
                        <Button href='/' className='button-plain button-primary button-typographic'>
                            ph
                            <Tooltip className='tooltip-discloseable'>Stands for Pavel Hamrik. Hey!</Tooltip>
                        </Button>
                    </div>
                    <div className='menu'>
                        {/*<NavLink to='/work' className='button-plain button-primary'>Work</NavLink>*/}
                        {/*<NavLink to='/play' className='button-plain button-primary'>Play</NavLink>*/}
                        {/*<NavLink to='/resume' className='button-plain button-primary'>Resume</NavLink>*/}
                        <Button href='/project/figure/' className='button-plain button-primary'>Work</Button>
                        <Button href='/play/' className='button-plain button-primary'>Play</Button>
                        <Button href='https://www.linkedin.com/in/hamrik/' target='_blank' className='button-plain button-primary'>Resume &#8599;</Button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;