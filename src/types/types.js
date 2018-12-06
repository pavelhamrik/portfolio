// @flow

export type MixedMap = {[string]: mixed};

export type State = {|
    +slideshow?: Slideshow,
|};

export type Slideshow = {
    +slides: Array<number>,
    +current: number,
    +open: boolean,
};

export type Action = {
    +type: string,
    +payload?: mixed,
};

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

