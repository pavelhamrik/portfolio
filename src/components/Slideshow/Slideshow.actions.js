// @flow

import type { Action, GetState, ThunkAction } from '../../types/types';
import { getNextArrayIndex, getPrevArrayIndex } from '../../util/util';

export const OPEN_SLIDESHOW = 'OPEN_SLIDESHOW';

export function openSlideshow(): Action {
    return {
        type: OPEN_SLIDESHOW,
    };
}

export const CLOSE_SLIDESHOW = 'CLOSE_SLIDESHOW';

export function closeSlideshow(): Action {
    return {
        type: CLOSE_SLIDESHOW,
    };
}

export const REGISTER_SLIDE = 'REGISTER_SLIDE';

export function registerSlide( payload: number ): Action {
    return {
        type: REGISTER_SLIDE,
        payload,
    };
}

export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';

export function setCurrentSlide( payload: number ): Action {
    return {
        type: SET_CURRENT_SLIDE,
        payload,
    };
}

export function presentSlideshow( params: { [string]: mixed } = {} ): ThunkAction {
    return ( dispatch, getState: GetState ) => {
        const { slideshow = {} } = getState();
        const { open = false, slides = [] } = slideshow;
        const { force = 'none' } = params;

        if ( ( !open && force === 'open' ) || ( force === 'none' && !open ) ) {
            dispatch( setCurrentSlide( slides[0] ) );
            dispatch( openSlideshow() );
        }
        else if ( ( open && force === 'close' ) || ( open && force === 'none)' ) ) {
            dispatch( closeSlideshow() )
        }
    };
}

export function presentSlide( params: { [string]: mixed } = {} ): ThunkAction {
    return ( dispatch, getState: GetState ) => {
        const { slideshow = {} } = getState();
        const { current = -1, slides = [] } = slideshow;
        const { direction = 'next' } = params;
        const currentSlideIdx = Math.max( slides.indexOf( current ), 0 );

        const slideIdx = direction === 'next'
            ? getNextArrayIndex( currentSlideIdx, slides )
            : getPrevArrayIndex( currentSlideIdx, slides );

        dispatch( setCurrentSlide( slides[slideIdx] ) );
    };
}