import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Button ' + className).trim();
        const { href = '' } = this.props;

        return (
            <a href={href} className={classNameAttr}>{this.props.children}</a>
        );
    }
}

export default Button;