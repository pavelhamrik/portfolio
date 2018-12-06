import { connect } from 'react-redux'
import { Slideshow, SlideshowSwitch, Slide } from './Slideshow';
import { presentSlide, presentSlideshow, registerSlide } from './Slideshow.actions';

const mapStateToProps = state => {
    return {
        slides: state.slideshow.slides,
        current: state.slideshow.current,
        open: state.slideshow.open,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        presentSlideshow: (params) => {
            dispatch( presentSlideshow(params) );
        },
        registerSlide: (id) => {
            dispatch( registerSlide(id) );
        },
        presentSlide: (params) => {
            dispatch( presentSlide(params) );
        },
    }
};

const SlideshowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Slideshow );

const SlideContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( Slide );

const SlideshowSwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( SlideshowSwitch );

export { SlideshowContainer, SlideshowSwitchContainer, SlideContainer };
