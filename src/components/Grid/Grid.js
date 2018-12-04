import React, { Component } from 'react';
import './Grid.scss';

export class Grid extends Component {
    render() {
        const { className = '' } = this.props;

        return (
            <div className={`Grid ${className}`}>
                <div className='grid-content'>{this.props.children}</div>
            </div>
        );
    }
}

export class GridItem extends Component {
    render() {
        const { className = '' } = this.props;

        return (
            <div className={`GridItem ${className}`}>{this.props.children}</div>
        );
    }
}
