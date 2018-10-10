import React, { Component } from 'react';
import './Button.scss';
import { NavLink } from "react-router-dom";

class Button extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Button ' + className).trim();
        const { href = '' } = this.props;
        const { target = '' } = this.props;

        {/*<a href={href} className={classNameAttr} target={target}>{this.props.children}</a>*/}

        return (
            <NavLink to={href} className={classNameAttr} target={target} exact>{this.props.children}</NavLink>
        );
    }
}

export default Button;