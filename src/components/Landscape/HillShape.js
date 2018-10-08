import React, { Component } from 'react';

class HillShape extends Component {
    render() {
        const { id = 'Hill' } = this.props;
        const { hillFill = 'gray' } = this.props;
        const { faceFill = 'silver' } = this.props;
        const { hillOpacity = '1' } = this.props;
        const { faceOpacity = '1' } = this.props;

        const golden = 1.618;

        const { base = '10.0' } = this.props;
        const baseFloat = parseFloat(base);
        const { center = '10.0' } = this.props;
        const centerFloat = parseFloat(center);
        const { height = '10.0' } = this.props;
        const heightFloat = parseFloat(height);
        const { width = heightFloat / golden } = this.props;
        const widthFloat = parseFloat(width);

        const baseStartingPointX = centerFloat - (widthFloat / 2);
        const baseMidPointX = centerFloat - (widthFloat * 0.2);
        const baseEndPointX = centerFloat + (widthFloat / 2);
        const summitPointY = baseFloat - heightFloat;

        const hillPoints = baseStartingPointX + ' ' + baseFloat + ', ' + centerFloat + ' ' + summitPointY + ', ' + baseEndPointX + ' ' + baseFloat;
        const facePoints = baseStartingPointX + ' ' + baseFloat + ', ' + centerFloat + ' ' + summitPointY + ', ' + baseMidPointX + ' ' + baseFloat;

        return (
            <g id={id} className='Hill'>
                {/*<polygon points='110 90, 130 30, 150 90' fill={faceFill} fillOpacity={faceOpacity} />*/}
                {/*<polygon points='122 90, 130 30, 150 90' fill={fill} fillOpacity={opacity} />*/}
                <polygon points={hillPoints} fill={hillFill} fillOpacity={hillOpacity} />
                <polygon points={facePoints} fill={faceFill} fillOpacity={faceOpacity} />
            </g>
        );
    }
}

export default HillShape;