import React, { Component } from 'react';
import './Stump.scss';

class Stump extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Stump ' + className).trim();

        return (
            <span className={classNameAttr}>{this.props.children}</span>
        );
    }
}

export default Stump;