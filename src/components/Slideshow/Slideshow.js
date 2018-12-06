import React, { Component } from 'react';
import './Slideshow.scss';
import Button from '../Button/Button';

export class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.keyDown = this.keyDown.bind(this);
    }

    keyDown(event){
        switch (event.keyCode) {
            case 27:
            case 81:
                this.props.presentSlideshow({force: 'close'});
                break;
            case 70:
                this.props.presentSlideshow({force: 'open'});
                break;
            case 80:
            case 37:
                this.props.presentSlide({direction: 'prev'});
                break;
            case 78:
            case 39:
                this.props.presentSlide({direction: 'next'});
                break;
            default:
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyDown, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyDown, false);
    }

    renderLegend() {
        if (this.props.open) {
            return (<SlideshowLegend/>)
        }
        return null;
    }

    render() {
        const { className = '' } = this.props;
        const classNameAttr = `Slideshow ${className} ${this.props.open ? 'slideshow-open' : ''}`;
        return (
            <div className={classNameAttr}>
                {this.renderLegend()}
                {this.props.children}
            </div>
        );
    }
}

export class Slide extends Component {
    constructor(props) {
        super(props);
        this.id = Math.round(Math.random() * 1000000000);
    }

    componentDidMount(): void {
        const { className = '' } = this.props;
        if (!className.includes('slideshow-hide')) this.props.registerSlide(this.id);
    }

    render() {
        const { className = '' } = this.props;
        return (
            <div className={`Slide ${className} ${this.id === this.props.current ? 'slide-current' : ''}`}>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class SlideshowSwitch extends Component {
    handleCheck() {
        this.props.presentSlideshow()
    }

    render() {
        const { className = '' } = this.props;
        // const { id = 'slideshow-switch' } = this.props;
        // return (
        //     <span className={`SlideshowSwitch ${className}`}>
        //         <input type='checkbox'
        //                id={id}
        //                checked={this.props.open}
        //                onChange={() => this.handleCheck()}
        //         />
        //         <label htmlFor={id}>
        //             <span className='switch'/>
        //             {this.props.children}
        //         </label>
        //     </span>
        // );
        return (
            <Button className={`SlideshowSwitch ${className} button-plain button-shy button-large`}
                  onClick={() => this.handleCheck()}>
                {this.props.children}
            </Button>
        );
    }
}

export class SlideshowLegend extends Component {
    render() {
        return (
            <div className='SlideshowLegend'>
                <span className='fake-key-group'>
                    <span className='fake-key'>esc</span>
                </span>
                <span className='fake-key-group'>
                    <span className='fake-key'>&larr;</span> <span className='fake-key'>&rarr;</span>
                </span>
            </div>
        );
    }
}