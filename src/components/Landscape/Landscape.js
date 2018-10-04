import React, { Component } from 'react';
import './Landscape.scss';

class Landscape extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Landscape ' + className).trim();

        return (
            <svg className={classNameAttr} width='70%' viewBox='0 0 160 90'>
                <g className='far'>
                    <rect width='100%' height='100%' stroke='ghostwhite' fill='none' />

                    <polygon points='110 90, 130 30, 150 90' fill='mediumpurple' />
                    <polygon points='122 90, 130 30, 150 90' fill='blueviolet' />
                </g>
            </svg>
        );
    }
}

export default Landscape;