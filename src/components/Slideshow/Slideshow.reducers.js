// @flow

import { OPEN_SLIDESHOW, CLOSE_SLIDESHOW, REGISTER_SLIDE, SET_CURRENT_SLIDE } from './Slideshow.actions';
import type { Action, Slideshow } from '../../types/types';

const slideshowInitState: Slideshow = {
    slides: [],
    current: -1,
    open: false,
};

export function slideshowReducer( slideshow: Slideshow = slideshowInitState, action: Action ) {
    switch ( action.type ) {
        case OPEN_SLIDESHOW:
            return (
                Object.assign( {}, slideshow, {
                    open: true,
                } )
            );
        case CLOSE_SLIDESHOW:
            return (
                Object.assign( {}, slideshow, {
                    open: false,
                    // current: slideshow.current || 0,
                } )
            );
        case REGISTER_SLIDE:
            return (
                Object.assign( {}, slideshow, {
                    slides: slideshow.slides.concat(action.payload),
                } )
            );
        case SET_CURRENT_SLIDE:
            return (
                Object.assign( {}, slideshow, {
                    current: action.payload,
                } )
            );
        default:
            return slideshow;
    }
}
