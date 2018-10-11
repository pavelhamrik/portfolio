import React, { Component } from 'react';
import Landscape from './../Landscape/Landscape';

import './Splash.scss';

class Splash extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Splash ' + className).trim();

        return (
            <div className={classNameAttr}>
                <div className='content'>
                    <Landscape className='landscape-bottom landscape-right'/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Splash;