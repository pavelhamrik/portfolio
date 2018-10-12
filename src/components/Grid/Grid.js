import React, { Component } from 'react';
import './Grid.scss';

class Grid extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Grid ' + className).trim();

        return (
            <div className={classNameAttr}>
                <div className='grid-content'>{this.props.children}</div>
            </div>
        );
    }
}

class GridItem extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Item ' + className).trim();

        return (
            <div className={classNameAttr}>{this.props.children}</div>
        );
    }
}

export { Grid, GridItem };