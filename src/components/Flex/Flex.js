import React, { Component } from 'react';
import './Flex.scss';

class Flex extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Flex ' + className).trim();

        return (
            <div className={classNameAttr}>{this.props.children}</div>
        );
    }
}

class FlexItem extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('FlexItem ' + className).trim();

        return (
            <div className={classNameAttr}>{this.props.children}</div>
        );
    }
}

export { Flex, FlexItem };