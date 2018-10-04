import React, { Component } from 'react';
import './Label.scss';

class Label extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Label ' + className).trim();

        return (
            <span className={classNameAttr}>{this.props.children}</span>
        );
    }
}

export default Label;