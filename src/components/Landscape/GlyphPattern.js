import React, { Component } from 'react';

class GlyphPattern extends Component {
    render() {
        const { id = 'GlyphPattern' } = this.props;
        const { className = '' } = this.props;
        const classNameAttr = ('pattern-text ' + className).trim();

        const { character = 'ϒϒ' } = this.props;
        const { color = 'black' } = this.props;
        const { opacity = '0.25' } = this.props;
        const { transform = 'rotate(-30)' } = this.props;

        return (
            <pattern id={id} x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
                <text className={classNameAttr} x='-5' y='20' fill={color} opacity={opacity}
                      transform={transform}>{character}</text>
            </pattern>
        );
    }
}

export default GlyphPattern;