import React, { Component } from 'react';
import './Icon.scss';

class Icon extends Component {
    render() {
        const { className = '' } = this.props;
        return (
            <span className={`Icon ${className}`}>
                <i className="material-icons">{this.props.icon}</i>
            </span>
        );
    }
}

class IconBlock extends Component {
    render() {
        const { className = '' } = this.props;
        return (
            <div className={`IconBlock ${className}`}>
                <Icon icon={this.props.icon} className='icon-boxed'/>
                {this.props.children}
            </div>
        );
    }
}

export { Icon, IconBlock }