import React, { Component } from 'react';

import GlyphPattern from './GlyphPattern';
import NoisePattern from './NoisePattern';

import HillShape from './HillShape';
import TreeShape from './TreeShape';

import './Landscape.scss';

class Landscape extends Component {
    render() {
        const { className = '' } = this.props;
        const classNameAttr = ('Landscape ' + className).trim();

        const viewHeight = 90;
        const viewWidth = 160;

        return (
            <svg className={classNameAttr} width='100%' viewBox={'0 0 ' + viewWidth + ' ' + viewHeight}>
                <NoisePattern id='SplatterNoise' color='#E6BF20' opacity='0.45'/>

                <GlyphPattern id='Upsilon' character='ϒϒϒ' color='#5B10DA' opacity='1' />
                <pattern id='MixedPatternUpsilon' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                    <rect x='0' y='0' width='100' height='100' fill='#861AFF' />
                    <rect x='0' y='0' width='100' height='100' fill='url(#SplatterNoise)' />
                    <rect x='0' y='0' width='100' height='100' fill='url(#Upsilon)' />
                </pattern>

                <GlyphPattern id='Character2' className='pattern-text-large pattern-text-monospace' character='§'
                              color='#000' opacity='0.2' transform='scale(1) rotate(20) translate(10 -5)' />
                <pattern id='MixedPattern2' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                    <rect x='0' y='0' width='100' height='100' fill='#D08D65' />
                    <rect x='0' y='0' width='100' height='100' fill='url(#SplatterNoise)' />
                    {/*<rect x='0' y='0' width='100' height='100' fill='url(#Character2)' />*/}
                </pattern>

                <pattern id='MixedPattern3' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                    <rect x='0' y='0' width='100' height='100' fill='#334BD0' />
                    <rect x='0' y='0' width='100' height='100' fill='url(#SplatterNoise)' />
                    {/*<rect x='0' y='0' width='100' height='100' fill='url(#Character2)' />*/}
                </pattern>

                <pattern id='TreetopPattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                    <rect x='0' y='0' width='100%' height='100%' fill='#097376' />
                    <rect x='0' y='0' width='100%' height='100%' fill='url(#SplatterNoise)' />
                </pattern>

                {/*<rect width='100%' height='100%' stroke='ghostwhite' fill='url(#MixedPattern2)' />*/}

                <g className='horizon'>
                    <circle cx={viewWidth - viewHeight * 0.42} cy={viewHeight * 0.94} r={viewHeight * 0.31} fill='#E7E8DF' />
                    <circle cx={viewWidth - viewHeight * 0.78} cy={viewHeight * 0.97} r={viewHeight * 0.25} fill='#EFF0E6' />
                    {/*<circle cx={viewWidth - viewHeight * 0.77} cy={viewHeight * 0.92} r={viewHeight * 0.25} fill='none' stroke='#F5F5EB' strokeWidth='1' strokeDasharray='10,2,4,2' strokeLinecap='round' />*/}
                    {/*<circle cx={viewWidth - viewHeight * 0.77} cy={viewHeight * 0.92} r={viewHeight * 0.24} fill='none' stroke='#E1E1EB' strokeWidth='0.75' strokeDasharray='8,4,4,4' strokeLinecap='round' />*/}
                </g>

                <g className='far'>
                    <HillShape hillFill='url(#MixedPattern3)' faceFill='#2C84D0'
                               base={viewHeight} center='80' width='23' height='20' />
                    <HillShape hillFill='url(#MixedPattern2)' faceFill='orange'
                               base={viewHeight} center='110' width='30' height='28' />
                    <HillShape hillFill='#7C964E' faceFill='#9AD06D'
                               base={viewHeight} center='95' width='18' height='13' />
                    <HillShape hillFill='#765DA8' faceFill='#8869C2'
                               base={viewHeight} center='130' width='33' height='35' />
                    {/*<HillShape hillFill='url(#MixedPatternUpsilon)' faceFill='mediumpurple' base={viewHeight} center='130' width='30' height='40' />*/}


                    <TreeShape base={viewHeight} center='67' height='8'/>
                    <TreeShape base={viewHeight} center='70' height='9'/>
                    {/*<TreeShape base={viewHeight} center='100' height='12' treetopfill='url(#TreetopPattern)' />*/}
                    <TreeShape base={viewHeight} center='100' height='12'/>
                    <TreeShape base={viewHeight} center='104' height='10'/>
                    <TreeShape base={viewHeight} center='124' height='11'/>
                </g>
            </svg>
        );
    }
}

export default Landscape;