import React from "react";
import styled from 'styled-components'
import {FAINT_GRAY, BLOCK_BORDER_RADIUS} from '../../styles/constants';

const Card = (props) => {
    // const {className = '', ...attrs} = props;
    // const styleClassNames = className
    //     .split(' ')
    //     .concat(['card'])
    //     .map(item => footerStyles[item] ? footerStyles[item] : item)
    //     .join(' ');

    return (
        <div>
            {props.children}
        </div>
    );
};

const StyledCard = styled.div`
    background-color: ${FAINT_GRAY};
    border-radius: ${BLOCK_BORDER_RADIUS};
    padding: 0.5rem 1.5rem;
    margin: 2.0rem 0;
`;

export default StyledCard;