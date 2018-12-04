import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Button.scss';


class Button extends Component {
    anchorLinkClick(event, to) {
        event.preventDefault();
        event.stopPropagation();

        const elem = document.querySelector(to);
        const topBodyBound = document.body.getBoundingClientRect().top;
        const position = elem !== null
            ? elem.getBoundingClientRect().top - topBodyBound - 100
            : 0;

        window.scrollTo({
            top: position,
            left: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const { className = '' } = this.props;
        const classNameAttr = ( 'Button ' + className ).trim();
        const { href = '' } = this.props;
        const { target = '' } = this.props;

        if ( href.includes( 'https://' ) || href.includes( 'http://' ) || href.includes( 'mailto:' ) ) {
            return (
                <a href={href} className={classNameAttr} target={target}>{this.props.children}</a>
            );
        }
        else if ( href.charAt(0) === '#' ) {
            return (
                <a onClick={(event) => this.anchorLinkClick(event, href)} href={href} className={classNameAttr} target={target}>{this.props.children}</a>
            );
        }

        return (
            <NavLink to={href} className={classNameAttr} target={target} exact>{this.props.children}</NavLink>
        );
    }
}

export default Button;