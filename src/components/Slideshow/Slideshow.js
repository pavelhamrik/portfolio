import React, { Component } from 'react';
import './Slideshow.scss';

export class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideshowOn: false,
        }
    }

    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Slideshow ' + className).trim();

        return (
            <div className={classNameAttr}>{this.props.children}</div>
        );
    }
}

export class Slide extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Slide ' + className).trim();

        return (
            <div className={classNameAttr}>{this.props.children}</div>
        );
    }
}

export class SlideshowSwitch extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('SlideshowSwitch ' + className).trim();

        return (
            <div className={classNameAttr}>
                <input type='checkbox' id='slideshow-switch'/>
                <label htmlFor='slideshow-switch'>{this.props.children}</label>
            </div>
        );
    }
}
