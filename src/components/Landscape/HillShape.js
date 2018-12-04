import React, { Component } from 'react';
import { GOLDEN_RATIO } from '../../constants/constants';

class HillShape extends Component {
    render() {
        const { id = 'Hill' } = this.props;
        const { hillFill = 'gray' } = this.props;
        const { faceFill = 'silver' } = this.props;
        const { hillOpacity = '1' } = this.props;
        const { faceOpacity = '1' } = this.props;

        const { base = '10.0' } = this.props;
        const baseFloat = parseFloat(base);
        const { center = '10.0' } = this.props;
        const centerFloat = parseFloat(center);
        const { height = '10.0' } = this.props;
        const heightFloat = parseFloat(height);
        const { width = heightFloat / GOLDEN_RATIO } = this.props;
        const widthFloat = parseFloat(width);

        const baseStartingPointX = centerFloat - (widthFloat / 2);
        const baseMidPointX = centerFloat - (widthFloat * 0.2);
        const baseEndPointX = centerFloat + (widthFloat / 2);
        const summitPointY = baseFloat - heightFloat;

        const hillPoints = baseStartingPointX + ' ' + baseFloat + ', ' + centerFloat + ' ' + summitPointY + ', ' + baseEndPointX + ' ' + baseFloat;
        const facePoints = baseStartingPointX + ' ' + baseFloat + ', ' + centerFloat + ' ' + summitPointY + ', ' + baseMidPointX + ' ' + baseFloat;

        return (
            <g id={id} className='Hill'>
                <polygon points={hillPoints} fill={hillFill} fillOpacity={hillOpacity} />
                <polygon points={facePoints} fill={faceFill} fillOpacity={faceOpacity} />
            </g>
        );
    }
}

export default HillShape;