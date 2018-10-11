import React, { Component } from 'react';
import './Monogram.scss';
import Button from "../Button/Button";

class Monogram extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Monogram ' + className).trim();

        const buttonDefaultClasses = 'button-plain button-primary button-typographic';
        const buttonClassName = className.includes('monogram-inverse') ? buttonDefaultClasses  + ' button-inverse' : buttonDefaultClasses;

        return (
            <div className={classNameAttr}>
                <Button href='/' className={buttonClassName}>
                    ph
                    {this.props.children}
                </Button>
            </div>
        );
    }
}

export default Monogram;