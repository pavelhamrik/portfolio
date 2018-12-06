// @flow

import { combineReducers } from 'redux';
import { slideshowReducer } from '../components/Slideshow/Slideshow.reducers';

const rootReducer = combineReducers({
    slideshow: slideshowReducer,
});

export default rootReducer;