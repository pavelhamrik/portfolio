import React, { Component } from 'react';

class TreeShape extends Component {
    render() {
        const { id = 'Tree' } = this.props;
        const { treetopfill = '#2E7347' } = this.props;
        const { trunkfill = '#4A3525' } = this.props;

        const golden = 1.618;

        const { opacity = '1' } = this.props;
        const { base = '10.0' } = this.props;
        const baseFloat = parseFloat(base);
        const { center = '10.0' } = this.props;
        const centerFloat = parseFloat(center);
        const { height = '10.0' } = this.props;
        const heightFloat = parseFloat(height);
        const { width = heightFloat / golden } = this.props;
        const widthFloat = parseFloat(width);

        const treetopY = baseFloat - heightFloat * ((1 / golden / golden / golden));
        const treetopPoints = [
            [centerFloat, baseFloat - heightFloat],
            [centerFloat + widthFloat / 2, treetopY],
            [centerFloat - widthFloat / 4 / golden, treetopY + heightFloat * 0.07],
            [centerFloat - widthFloat / 2, treetopY],
        ];
        const treetopShadePoints = treetopPoints.slice(0, treetopPoints.length - 1);

        const trunkPoints = [
            [centerFloat + widthFloat / 10, treetopY],
            [centerFloat + widthFloat / 10 * golden, baseFloat],
            [centerFloat - widthFloat / 10 * golden, baseFloat],
            [centerFloat - widthFloat / 10, treetopY],
        ];

        return (
            <g id={id} className='Tree' opacity={opacity}>
                <polygon points={trunkPoints} fill={trunkfill} />
                <polygon points={treetopPoints} fill={treetopfill} />
                <polygon points={treetopShadePoints} fill='#000000' fillOpacity='0.25' />
            </g>
        );
    }
}

export default TreeShape;