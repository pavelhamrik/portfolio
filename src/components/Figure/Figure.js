import React, { Component } from 'react';
import './Figure.scss';

export default class Figure extends Component {
    renderCaption() {
        if ( typeof this.props.caption !== 'undefined' && this.props.caption !== '' ) return (
            <div className='caption'>{this.props.caption}</div>
        )
    }

    render() {
        const { className = '' } = this.props;
        const alt = this.props.alt || this.props.caption || '';
        return (
            <div className={`Figure ${className}`}>
                <div className='image-container'>
                    <img
                        src={this.props.src}
                        alt={alt}
                    />
                </div>
                {this.renderCaption()}
            </div>
        );
    }
}