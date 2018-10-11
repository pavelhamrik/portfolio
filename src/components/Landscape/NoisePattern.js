import React, { Component } from 'react';
// import './Landscape.scss';

class NoisePattern extends Component {
    render() {
        const { id = 'NoisePattern' } = this.props;
        const { color = 'black' } = this.props;
        const { opacity = '0.25' } = this.props;
        const { transform = 'rotate(15)' } = this.props;

        // const displacementFilter = {
        //     filter: 'url(#displacementFilter)'
        // };

        return (
            <React.Fragment>
                {/*<filter id='displacementFilter'>
                    <feTurbulence type='turbulence' baseFrequency='1' numOctaves='1' result='turbulence'/>
                    <feDisplacementMap in2='turbulence' in='SourceGraphic' scale='100'
                                       xChannelSelector='R' yChannelSelector='G'/>
                </filter>*/}
                <pattern id={id} x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'>
                    {/*<circle cx='70' cy='70' r='50' fill='none' stroke={color} strokeWidth='5' strokeOpacity={opacity} style={displacementFilter} transform={transform} />*/}
                    <circle cx='70' cy='70' r='50' fill='none' stroke={color} strokeWidth='5' strokeOpacity={opacity} transform={transform} />
                </pattern>
            </React.Fragment>
        );
    }
}

export default NoisePattern;