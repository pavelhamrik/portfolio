import React, { Component } from 'react';
import './Tooltip.scss';

class Tooltip extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Tooltip ' + className).trim();

        return (
            <span className={classNameAttr}>{this.props.children}</span>
        );
    }
}

export default Tooltip;